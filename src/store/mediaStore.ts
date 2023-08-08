import { defineStore } from "pinia"
import { computed, ref, watch } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import useUserStore from '@/store/userStore'

const useMediaStore = defineStore('mediaStore', () => {
    const userStore = useUserStore()

    const { result } = useQuery(gql`
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
        setMedias(value.medias)
    })

    const medias = ref()

    const setMedias = (data: any) => {
        medias.value = data
    }

    const getMedia = (id: any) => {
        return computed(() => medias.value.find((media: any) => media.id === id))
    }

    return {
        getMedia,
        medias,
        setMedias,
    }
})

export default useMediaStore;
