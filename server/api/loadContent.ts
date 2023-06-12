export default defineEventHandler(async (event) => {
  // const data = await $fetch('https://succinct-hamburger-1b1.notion.site/api/v3/loadCachedPageChunk', { method: 'POST'})
  // console.log(data);
  return {
    hello: 'world'
  }
})