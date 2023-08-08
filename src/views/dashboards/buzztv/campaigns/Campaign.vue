<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import UseCampaignsStore from '@/store/campaignsStore'
import UseDisplaysStore from '@/store/displaysStore'
import UseUserStore from '@/store/userStore'
import UseMediaStore from '@/store/mediaStore';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const campaignStore = UseCampaignsStore()
const displayStore = UseDisplaysStore()
const mediaStore = UseMediaStore()
const userStore = UseUserStore()
const router = useRouter()
const route = useRoute()
const campaign = campaignStore.getCampaign(route.params.campaign)
const name = ref(campaign?.value.name)
const id = ref(campaign?.value.id)
const playbacks = ref(campaign?.value.playbacks)
const campaignDisplays = ref(campaign?.value.displays)
const campaignMedia = ref(campaign?.value.media)
const campaignStatus = ref(campaign?.value.status)
const categories = computed(() => campaignStore.categories)

const formatDateFromMilliseconds = (milliseconds: number): string => {
    const date = new Date(Number(milliseconds));
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const parseDateToMilliseconds = (dateString: string): number => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // Months are zero-based in the Date object
    return date.getTime();
}

const category = ref(campaign?.value.category)
const startDate = ref(formatDateFromMilliseconds(campaign?.value.startDate))
const endDate = ref(formatDateFromMilliseconds(campaign?.value.endDate))
const status = ref([
    { name: 'Live', value: 'LIVE' },
    { name: 'Paused', value: 'PAUSED' },
    { name: 'Stopped', value: 'STOPPED' },
    { name: 'Completed', value: 'COMPLETED' },
])

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

const done = () => router.push({ name: 'buzztv' })

const {
    mutate: updateCampaign,
    loading: updateCampaignLoading,
    error: updateCampaignError,
    onDone,
    onError,
} = useMutation(gql`
    mutation updateCampaign ($input: UpdateCampaignInput!) {
        updateCampaign(input: $input) {
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
</script>
<template>
    <v-card>
        <v-container>
            <v-form>
                <div class="text-h6 mb-4">{{ name }}</div>
                <v-text-field label="Campaign Name" variant="outlined" v-model="name"></v-text-field>
                <v-text-field class="mt-8" type="number" label="Runs" variant="outlined" disabled
                    v-model="playbacks"></v-text-field>
                <v-text-field class="mt-8" label="Start Date" variant="outlined" v-model="startDate"
                    type="date"></v-text-field>
                <v-text-field class="mt-8" label="End Date" variant="outlined" v-model="endDate" type="date"></v-text-field>
                <v-select class="mt-8" v-model="category" :items="categories" item-title="name" item-value="value" label="Campaign Category" disabled></v-select>
                <v-select class="mt-8" v-model="campaignDisplays" :items="displays" item-title="name" item-value="id"
                    label="Screens" multiple hint="Pick screens to display campaign" persistent-hint></v-select>
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
            <v-btn :disabled="updateCampaignLoading" color="primary" variant="text" @click="updateCampaign({
                input: {
                    displays: campaignDisplays,
                    media: campaignMedia,
                    name: name,
                    id: id,
                    category: category,
                    startDate: parseDateToMilliseconds(startDate),
                    endDate: parseDateToMilliseconds(endDate),
                    status: campaignStatus,
                }
            })">Save</v-btn>
            <p v-if="updateCampaignError">An error occurred: {{ updateCampaignError }}</p>
        </v-card-actions>
    </v-card>
</template>
