import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { supabase } from '../plugins/supabase'

const useUserStore = defineStore('user', () => {
  const fetchGroups = async (userUid: any) => {
    try {
      const { data: groups, error, status } = await supabase
        .from("groups")
        .select("name")
        .eq("user_uid", userUid)

      if (error && status !== 406) {
        throw error;
      }

      setGroups(groups);

    } catch (error) {
      // Handle the error
    } finally {
      // Add any additional code or logic to execute after the try-catch block
    }
  }

  const user = ref({
    id: '',
  })

  const getUser = computed(() => user.value)

  const setUser = async (data: any) => {
    user.value = data;

    // Fetch the profile from Supabase if user.id exists
    if (data.id) {
      try {
        const { data: profileData, error, status } = await supabase
          .from("profiles")
          .select("username, website, avatar_url")
          .eq("id", data.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        setProfile(profileData!!);

      } catch (error) {
        // Handle the error
      } finally {
        // Add any additional code or logic to execute after the try-catch block
      }

      // Fetch user's groups
      fetchGroups(data.id)
    }

  }

  const profile = ref({
    username: '',
    avatar_url: '',
  })

  const getProfile = computed(() => profile.value)

  const setProfile = (data: { username: string; avatar_url: string; } | { username: any; website: any; avatar_url: any; }) => {
    profile.value = data
  }

  const setGroups = (fetchedGroups: any[] | null) => {
    groups.value = []
    groups.value.push('Default')
    
    fetchedGroups?.forEach((group: { name: string; }) => {
      groups.value.push(group.name)
    });

    groups.value.sort()
  }

  const groups = ref(['Default'])

  return {
    user,
    getUser,
    setUser,
    profile,
    getProfile,
    setProfile,
    groups,
    fetchGroups,
  }
})

export default useUserStore;