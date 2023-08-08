import { defineStore } from "pinia"
import { computed, ref, watch } from 'vue'
import gql from 'graphql-tag'
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import useCampaignsStore from "./campaignsStore"
import { apolloClient } from "@/plugins/apollo";

const useDisplaysStore = defineStore('diplays', () => {
    const campaignsStore = useCampaignsStore()

    watch(() => campaignsStore.selectedCategory,
        (category) => {
            const { result, onError } = provideApolloClient(apolloClient)(
                () => useQuery(gql`
                    query Displays($category: String) {
                        displays(category: $category) {
                            id
                            pairCode
                            owner
                            playlist
                            location
                            categories
                            name
                            status
                            group
                        }
                    }`, () => ({ category })
                )
            )

            onError(error => {
                console.log(error)
            })

            watch(result, value => {
                if (value?.displays) setDisplays(value.displays)
            })
        }
    )

    const displays = ref()

    const setDisplays = (data: any) => {
        displays.value = data
    }

    const getDisplay = (id: any) => {
        return computed(() => displays.value.find((display: any) => display.id === id))
    }

    return {
        getDisplay,
        displays,
        setDisplays,
    }
})

export default useDisplaysStore;
