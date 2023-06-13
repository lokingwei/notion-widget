<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const route = useRoute()
const id = route.query.id;
const domain = route.query.domain;
let images = ref([]);
if(id != null && domain != null) {
  const res = await useFetch(`https://${domain}.notion.site/api/v3/loadCachedPageChunk`, { method: 'POST', body: {"page":{"id":id},"limit":30,"cursor":{"stack":[]},"chunkNumber":0,"verticalColumns":false}});
  images.value = Object.values(res.data.value.recordMap.block).filter(b => b.value.type === 'image').map(b => ({url: b.value.properties.source[0][0], id: b.value.id}))
  .map(s => `https://${domain}.notion.site/image/${encodeURIComponent(s.url)}?id=${s.id}&table=block&spaceId=12c6b7f7-1d70-4eea-8ae0-671efc6e35d5&width=1610&userId=&cache=v2`)
}
</script>

<style>
.responsive {
  object-fit: cover;
  width: 100%;
  max-height: 400px;
  height: auto;
}
</style>

<template>
  <Splide :options="{ rewind: true }">
    <SplideSlide v-for="img in images" :key="img">
      <img :src="img" class="responsive"/>
    </SplideSlide>
  </Splide>
</template>
