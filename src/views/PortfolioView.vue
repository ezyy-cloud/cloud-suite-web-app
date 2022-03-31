
<script lang="ts" setup>
	import { ref, onMounted } from 'vue'
	import GrabzIt from './../../node_modules/@grabzit/js/grabzit.min.mjs'
    const card = ref()
	
    const items = [{ 
			id: '1', 
            url: 'https://pamushanaafrica.com',
            title: 'Pamushana Africa',
            faceBookUrl: 'https://www.facebook.com/PamAfriGroup/',
            twitterUrl: 'https://twitter.com/pamafrigroup',
            instagramUrl: 'https://www.instagram.com/_pamushana_/?hl=en',
          }, { 
			id: '2',
            url: 'https://mountviewprep.com',
            title: 'Mountview Preparatory School',
            faceBookUrl: 'https://www.facebook.com/mountviewprep/',
            twitterUrl: 'https://twitter.com/mountviewprep',
            instagramUrl: 'https://www.instagram.com/mountviewprep/',
            }, { 
			id: '3',
            url: 'http://face.co.zw',
            title: 'FACE Zimbabwe',
            faceBookUrl: 'https://www.facebook.com/facezimbabwe/',
            twitterUrl: 'https://twitter.com/facezimbabwe',
            instagramUrl: 'https://www.instagram.com/facezimbabwe/',
            }]

    onMounted(() => {
		
		console.log(card.offsetWidth)
  		items.forEach((item: { url: String; id: String; }): void => {
			GrabzIt("NTJlZDYzY2QwMjgzNGFiNTg5ZmI5YjI1YWI2ZGY2MjI=").ConvertURL(item.url, { "width": card._rawValue.offsetWidth, "format": "png" }).AddTo(item.id);
		})
	})

</script>

<template>
<v-container fluid>
	<v-row>
  <v-col>
	  <div  ref="card"></div>
    <v-card elevation="3" style="margin: 2vh;" v-for="(item, index) in items">
      <div :id="item.id"></div>
      <v-card-actions>
        <v-card-title class="text-xs-subtitle-1 text-md-h6 text-lg-h6">
          <a :href="item.url" style="color: black;" >{{ item.title }}</a>
        </v-card-title>
        <v-spacer />
        <v-btn size="small" color="surface-variant" :href="item.faceBookUrl" variant="text" icon="mdi-facebook">f</v-btn>
        <v-btn size="small" color="surface-variant" :href="item.twitterUrl" variant="text" icon="mdi-twitter">i</v-btn>
        <v-btn size="small" color="surface-variant" :href="item.instagramUrl" variant="text" icon="mdi-instagram">t</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
