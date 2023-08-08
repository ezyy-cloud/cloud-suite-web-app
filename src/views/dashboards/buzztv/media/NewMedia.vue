<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import { useMutation, useQuery } from '@vue/apollo-composable'
import UseUserStore from '@/store/userStore'
import UseMediaStore from '@/store/mediaStore'
import gql from 'graphql-tag'

const close = () => {
  modal.value = false
}

const props = defineProps({
  show: Boolean
})

const format = ref([
  { name: 'Mp4', value: 'MP4' },
])

const modal = ref(props.show);

watch(() => props.show, (newVal) => {
  modal.value = newVal;
});


const userStore = UseUserStore()
const mediaStore = UseMediaStore()
const user = ref(userStore.user)
const newMediaFormat = ref()
const name = ref('')
const url = ref('')

const {
  mutate: createMedia,
  loading: createMediaLoading,
  error: createMediaError,
  onDone,
  onError,
} = useMutation(gql`
    mutation createMedia ($input: MediaInput!) {
      createMedia(input: $input) {
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
  <VDialog v-model="modal" width="400" persistent>
    <v-card>
      <v-container>
        <v-form>
          <div class="text-h6 mb-4">Add new content</div>
          <v-text-field label="Content name" variant="outlined" v-model="name"></v-text-field>
          <v-select v-model="newMediaFormat" :items="format" item-title="name" item-value="value" label="Content Format"
            class="mt-8"></v-select>
          <v-text-field class="mt-8" label="Content Link" v-model="url" variant="outlined"></v-text-field>
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
        <v-btn :disabled="createMediaLoading" color="primary" variant="text" @click="createMedia({
          input: {
            format: newMediaFormat,
            name: name,
            owner: user.id,
            url: url,
          }
        })">Save</v-btn>
        <p v-if="createMediaError">An error occurred: {{ createMediaError }}</p>
      </v-card-actions>
    </v-card>
  </VDialog>
</template>
  