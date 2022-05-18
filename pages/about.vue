<template>
<main>
  <banner-image :source="'/img2.jpg'" :alt="'imagen-de-flores'" />
  <section>
    <h1> ABOUT</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi velit adipisci veritatis,quasi odit nam quia corporis fugiat ad, <br> distinctio hic numquam impedit voluptatem id aspernatur iure qui culpa deleniti.</p>
  </section>
  <section class="row-articles">
    <article-card v-for="(card,i) in cards" 
    :key="i" 
    :title="card.title" />
   
  </section>
</main>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'default.vue',
  data(){
    return{
  
      cards : [
        {title: 'btn1'},
        {title: 'btn2'},
        {title: 'btn3'},
        {title: 'btn4'}
      ]
  
    }
  }
}
</script>



<style lang="postcss">
section{
  @apply p-20;
  h1{
    @apply font-bold;
    @apply text-3xl;
  }
}
.row-articles{
  button{
    @apply bg-blue-100 p-3 w-full;
  }
  display: flex
}
</style>


