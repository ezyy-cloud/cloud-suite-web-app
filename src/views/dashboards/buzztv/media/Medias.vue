<script lang="ts" setup>
// import EditMedia from './components/EditMedia.vue'
import NewMedia from './NewMedia.vue';
import UseMediaStore from '@/store/mediaStore'

interface DataItem {
  id: number;
  name: string;
  format: string;
  url: string;
}

const store = UseMediaStore()

const data: DataItem[] = computed(() => store.medias) as unknown as DataItem[]

const medias = ref(data)

const headers = ['NAME', 'FORMAT', 'URL', ''];

const addNew = ref(false)

</script>
<template>
  <v-card>
    <v-toolbar title="Media Manager">
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-plus" rounded="xl" color="black" @click="addNew = true">
        New Media
      </v-btn>
      <NewMedia :show="addNew" />
    </v-toolbar>
    <v-table :headers="headers" :items="medias" item-key="fullName" class="table-rounded" hide-default-footer
      disable-sort>
      <thead>
        <tr>
          <th id="90" v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="media in medias" :key="media.id" @click="$router.push({ name: 'buzztv-media', params: { media: media.id.toString() } })">
          <!-- name -->

          <td>
            <div class="d-flex flex-column">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ media.name }}</span>
            </div>
          </td>

          <td v-text="media.format" />
          <td v-text="media.url" />
          <td><v-btn density="compact" color="error" icon="mdi-delete-outline"></v-btn></td>
        </tr>
      </tbody>
    </v-table>
    <div>
    </div>
  </v-card>
</template>
