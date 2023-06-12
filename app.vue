<script setup>
const res = await useFetch('https://succinct-hamburger-1b1.notion.site/api/v3/loadCachedPageChunk', { method: 'POST', body: {"page":{"id":"55985dd4-cdeb-4039-bd75-475ba457b123"},"limit":30,"cursor":{"stack":[]},"chunkNumber":0,"verticalColumns":false}});
console.log(Object.values(res.data.value.recordMap.block));
var images = Object.values(res.data.value.recordMap.block).filter(b => b.value.type === 'image').map(b => ({url: b.value.properties.source[0][0], id: b.value.id}))
.map(s => `https://succinct-hamburger-1b1.notion.site/image/${encodeURIComponent(s.url)}?id=${s.id}&table=block&spaceId=12c6b7f7-1d70-4eea-8ae0-671efc6e35d5&width=1610&userId=&cache=v2`)
console.log(images);
</script>

<template>
  <div>
    <img v-for="img in images" :key="img" :src="img" />
  </div>
</template>
