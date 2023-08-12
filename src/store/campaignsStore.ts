import { defineStore } from "pinia"
import { computed, ref, watch } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import useUserStore from '@/store/userStore'
import { supabase } from "@/plugins/supabase"

const useCampaignsStore = defineStore('campaigns', () => {
    const userStore = useUserStore()

    const { result, onError } = useQuery(gql`
        query Campaigns($ownerId: ID!) {
            campaigns(ownerId: $ownerId) {
                id
                owner
                name
                media
                startDate
                endDate
                displays
                category
                playbacks
                status
            }
        }`, {
        ownerId: userStore.user.id,
    })

    onError((error) => console.log(error))

    watch(result, value => {
        setCampaigns(value.campaigns)
    })

    const campaigns = ref()

    const setCampaigns = (data: any) => {
        campaigns.value = data
    }

    const getCampaign = (id: any) => {
        if (campaigns.value) {
            const campaign = computed(() => campaigns.value.find((campaign: any) => campaign.id === id))

            setSelectedCategory(campaign.value.category)

            return campaign
        }
    }

    const categories = ref()

    const getCategories = async () => {
        let { data: content_categories, error } = await supabase
            .from('content_categories')
            .select()

        categories.value = []

        content_categories?.forEach(category => {
            const cat = {
                name: category.name,
                value: category.value,
            }

            categories.value.push(cat)
        })

    }

    getCategories()

    const selectedCategory = ref()

    const setSelectedCategory = (category: string) => selectedCategory.value = category

    return {
        getCampaign,
        campaigns,
        setCampaigns,
        categories,
        setSelectedCategory,
        selectedCategory,

    }
})

export default useCampaignsStore;
