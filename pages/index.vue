<template>
  <main>
    <banner-image :source="'/img1.jpg'" :alt="'imagen-de-montanas'"/>
    <section>
      <h1>HOME</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia rem unde consectetur ea possimus alias aspernatur magni earum fugiat aliquam natus molestias, facilis illo omnis voluptatibus! Nam, quam quibusdam.</p>
      <ul>
        <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    </section>
    <div id="map-wrap" style="height: 100vh">
 <client-only>
   <l-map :zoom=10 :center="[55.9464418,8.1277591]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
   </l-map>
 </client-only>
</div>
  </main>
</template>


<script>
export default {
  name: 'IndexPage',
  layout: 'default.vue',

 data() {
    return {
        mountains: []
      }
    },
 async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
}
</script>

<style lang="postcss"scoped>
section{
  @apply p-20;
}

#map-wrap{
width: 50%;
margin-left: 5%;
}
</style>
