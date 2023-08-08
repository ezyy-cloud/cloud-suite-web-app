<script lang="ts" setup>
import UseCampaignsStore from '@/store/campaignsStore'

interface DataItem {
  id: number;
  name: string;
  media: Array<string>;
  startDate: string;
  endDate: string;
  displays: Array<string>;
  playbacks: string;
  status: number;
}

const store = UseCampaignsStore()

const data: DataItem[] = computed(() => store.campaigns) as unknown as DataItem[]

const campaigns = ref(data)

const status: Record<DataItem['status'], string> = {
  1: 'LIVE',
  2: 'PAUSED',
  3: 'STOPPED',
  4: 'COMPLETED',
};

const statusColor: Record<typeof status[number], string> = {
  LIVE: 'success',
  PAUSED: 'primary',
  STOPPED: 'error',
  COMPLETED: 'warning',
};

const headers = ['NAME', 'MEDIA', 'START', 'END', 'DISPLAYS', 'RUNS', 'STATUS'];

</script>
<template>
  <v-card>
    <v-toolbar title="Campaigns">

      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-plus" rounded="xl" color="black" @click="$router.push({ name: 'buzztv-newCampaign' })">
        New Campaign
      </v-btn>
      <v-btn prepend-icon="mdi-folder" rounded="xl" color="black" @click="$router.push({ name: 'buzztv-medias' })">
        Manage Media
      </v-btn>
    </v-toolbar>
    <v-table :headers="headers" :items="campaigns" item-key="fullName" class="table-rounded" hide-default-footer
      disable-sort>
      <thead>
        <tr>
          <th id="90" v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="campaign in campaigns" :key="campaign.id"
          @click="$router.push({ name: 'buzztv-campaign', params: { campaign: campaign.id.toString() } })">
          <!-- name -->

          <td>
            <div class="d-flex flex-column">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ campaign.name }}</span>
            </div>
          </td>

          <td v-text="campaign.media.length" />
          <td v-text="new Date(Number(campaign.startDate)).toLocaleDateString()" />
          <td v-text="new Date(Number(campaign.endDate)).toLocaleDateString()" />
          <td v-text="campaign.displays.length" />
          <td v-text="campaign.playbacks" />
          <!-- status -->
          <td>
            <VChip small :color="statusColor[campaign.status]" class="font-weight-medium">
              {{ campaign.status }}
            </VChip>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div>
    </div>
  </v-card>
</template>
