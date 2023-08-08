<script lang="ts" setup>
import { ref } from 'vue';
import UseDisplaysStore from '@/store/displaysStore'
import UseMediaStore from '@/store/mediaStore'
import UseUserStore from '@/store/userStore'
import UseCampaignsStore from '@/store/campaignsStore'
import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const displayStore = UseDisplaysStore()
const mediaStore = UseMediaStore()
const campaignStore = UseCampaignsStore()
const userStore = UseUserStore()
const router = useRouter()
const user = ref(userStore.user)
const name = ref('')
const startDate = ref()
const endDate = ref()
const campaignDisplays = ref([])
const campaignMedia = ref([])
const campaignStatus = ref()
const categories = computed(() => campaignStore.categories)
const category = ref()

const status = ref([
    { name: 'Live', value: 'LIVE' },
    { name: 'Paused', value: 'PAUSED' },
    { name: 'Stopped', value: 'STOPPED' },
    { name: 'Completed', value: 'COMPLETED' },
])

const done = () => router.push({ name: 'buzz-tv' })

const displays = computed(() => {
    const fetchedDisplays: any[] = []
    if (displayStore.displays) {
        displayStore.displays.forEach((display: {
            location: any; name: any; id: any;
        }) => {
            fetchedDisplays.push({ name: `${display.name} at ${display.location}`, id: display.id });
        });
    }
    return fetchedDisplays
})

const media = computed(() => {
    const fetchedMedia: any[] = []
    if (mediaStore.medias) {
        mediaStore.medias.forEach((media: { name: any; id: any; }) => {
            fetchedMedia.push({ name: media.name, id: media.id });
        });
    }
    return fetchedMedia
})

const parseDateToMilliseconds = (dateString: string): number => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // Months are zero-based in the Date object
    return date.getTime();
}

const {
    mutate: createCampaign,
    loading: createCampaignLoading,
    error: createCampaignError,
    onDone,
    onError,
} = useMutation(gql`
    mutation createCampaign ($input: NewCampaignInput!) {
        createCampaign(input: $input) {
            id
            owner
            name
            media
            startDate
            endDate
            displays
            playbacks
            category
            status
        }
    }
`)

onDone(() => {
    done()
    refetch()
})

onError(error => {
    console.log(error)
})

const { result, refetch } = useQuery(gql`
    query Campaigns($ownerId: ID!) {
        campaigns(ownerId: $ownerId) {
            id
            owner
            name
            media
            startDate
            endDate
            displays
            playbacks
            category
            status
        }
    }`, {
    ownerId: userStore.user.id,
})

watch(result, async value => {
    campaignStore.setCampaigns(value.campaigns)
})

const onSelectCategory = () => campaignStore.setSelectedCategory(category.value)

</script>
<template>
    <v-card>
        <v-container>
            <v-form>
                <div class="text-h6 mb-4">Create a new campaign</div>
                <v-text-field label="Campaign Name" variant="outlined" v-model="name"></v-text-field>
                <v-text-field class="mt-8" label="Start Date" type="date" variant="outlined"
                    v-model="startDate"></v-text-field>
                <v-text-field class="mt-8" label="End Date" variant="outlined" v-model="endDate" type="date"></v-text-field>
                <v-select class="mt-8" v-model="category" :items="categories" item-title="name" item-value="value"
                    label="Campaign Category" @update:modelValue="onSelectCategory" />
                <v-select v-if="category" class="mt-8" v-model="campaignDisplays" :items="displays" item-title="name"
                    item-value="id" label="Screens" multiple hint="Pick screens to display campaign"
                    persistent-hint></v-select>
                <v-select v-model="campaignStatus" :items="status" item-title="name" item-value="value"
                    label="Campaign Status" class="mt-8"></v-select>
                <v-select class="mt-8" v-model="campaignMedia" :items="media" item-title="name" item-value="id"
                    label="Media" multiple hint="Pick media to add to campaign" persistent-hint></v-select>
            </v-form>
        </v-container>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" variant="text" @click="$router.push({ name: 'buzztv' })">
                Close
            </v-btn>
            <v-btn :disabled="createCampaignLoading" color="primary" variant="text" @click="createCampaign({
                input: {
                    displays: campaignDisplays,
                    media: campaignMedia,
                    name: name,
                    owner: user.id,
                    category: category,
                    startDate: parseDateToMilliseconds(startDate),
                    endDate: parseDateToMilliseconds(endDate),
                    status: campaignStatus,
                }
            })">Save</v-btn>
            <p v-if="createCampaignError">An error occurred: {{ createCampaignError }}</p>
        </v-card-actions>
    </v-card>
</template>
