<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">
                 <MIconHome /> Home
                  </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about"><MIconAlarm /> About </NuxtLink>
            </li>
            <div class="user"
            @click="panelIsOpen= !panelIsOpen"><MIconRabbit /></div>
        </ul>
        <div class="panel"
        v-show="panelIsOpen"></div>
    </nav>
</template>


<script>
export default {
    data() {
        return{
            panelIsOpen: false
        }
    },
}
</script>
<style>
nav{
    @apply bg-blue-200;
    ul{
        display: flex;
        justify-content: space-around;
        li {
            @apply p-5;
        }
    }
    .user{
        @apply p-5 w-12 h-12 bg-indigo-500 rounded-full mt-2;

    }
    .panel{
        @apply p-5 w-48 h-24 bg-indigo-200;
        position: absolute;
        top: 90px;
        left: 75%;

    }
}
.nuxt-link-exact-active{
    font-weight: bold;
}
</style>