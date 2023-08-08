<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import UseUserStore from '@/store/userStore'
import UseMediaStore from '@/store/mediaStore'
import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const close = () => {
  router.push({ name: 'buzztv-medias' })
}

const mediaFormats = ref([
  { name: 'Mp4', value: 'MP4' },
])


const userStore = UseUserStore()
const mediaStore = UseMediaStore()
const route = useRoute()
const media = mediaStore.getMedia(route.params.media)
const name = ref(media.value.name)
const format = ref(media.value.format)
const url = ref(media.value.url)
const router = useRouter()
const user = ref(userStore.user)
const newMediaFormat = ref()

const {
  mutate: updateMedia,
  loading: updateMediaLoading,
  error: updateMediaError,
  onDone,
  onError,
} = useMutation(gql`
    mutation updateMedia ($input: MediaInput!) {
      updateMedia(input: $input) {
        id
        name
        owner
        format
        url
      }
    }
`)

onDone(() => {
  close()
  refetch()
})

onError(error => {
  console.log(error)
})

const { result, refetch } = useQuery(gql`
  query Media($ownerId: ID!) {
      medias(ownerId: $ownerId) {
          id
          name
          owner
          format
          url
      }
  }`, {
  ownerId: userStore.user.id,
})

watch(result, value => {
  mediaStore.setMedias(value.medias)
})

</script>
<template>
  <v-card>
    <v-container>
      <v-form>
        <div class="text-h6 mb-4">Add new content</div>
        <v-text-field label="Content name" variant="outlined" v-model="name"></v-text-field>
        <v-select :items="mediaFormats" item-title="name" item-value="value" label="Content Format" class="mt-8" disabled
          v-model="format"></v-select>
        <v-text-field class="mt-8" label="Content Link" variant="outlined" disabled v-model="url"></v-text-field>
      </v-form>
    </v-container>
    <v-card-actions>
      <v-btn color="error" variant="text" @click="close">
        Delete
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="secondary" variant="text" @click="close">
        Close
      </v-btn>
      <v-btn :disabled="updateMediaLoading" color="primary" variant="text" @click="updateMedia({
        input: {
          format: format,
          name: name,
          owner: user.id,
          url: url,
        }
      })">Save</v-btn>
      <p v-if="updateMediaError">An error occurred: {{ updateMediaError }}</p>
    </v-card-actions>
  </v-card>
</template>
  