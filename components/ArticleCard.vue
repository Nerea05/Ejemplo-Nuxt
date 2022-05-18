<template>
    <article>
        <div>
            <img src="/img1.jpg" alt="">
        </div>
        <button @click="reproducirparar">{{title}}
            <MIconPlay  v-show="!isPlaying" /> 
            <MIconPause  v-show="isPlaying" /> 

        </button>
    </article>
</template>

 <script> 
 import {Howl, Howler} from 'howler';
 export default{
     props:['title'],
      data(){
     return{
      sound:'',
      isPlaying: false
     }
 },
 mounted(){
this.sound = new Howl({
  src: ['/audio/floor.mp3']
});
},
 methods:{
reproducirparar(){
    if(this.isPlaying){
        this.sound.pause()
        this.isPlaying= false;
    } else {
        this.sound.play()
        this.isPlaying= true;
    }
}
 }
 }

 </script>
 
<style lang="postcss">
article{
    @apply mr-5;
    @apply w-1/4;
    @apply h-32;
    img{
         object-fit: cover;
    }
}
</style>