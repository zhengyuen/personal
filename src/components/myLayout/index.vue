<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const route = useRoute()
const changePage = (url) => {
  router.push(url)
}

const menuList = ref([
  {
    key: '/',
    name: 'Home'
  },
  {
    key: '/about',
    name: 'About'
  },
  {
    key: '/work',
    name: 'Work'
  }
])
</script>

<template>
<nav class="flex list-none justify-end font-bold bg-slate-300 h-11 items-center w-full fixed z-10 px-3">
  <div class="absolute left-0 cursor-pointer" @click="changePage('/')">
    <img src="@/assets/images/logo.png" alt="" class="w-24 text-white">
  </div>
    <li v-for="items in menuList"
    :key="items"
    @click="changePage(items.key)"
    :class="{ 'text-white': route.fullPath === items.key }"
    class="mx-2 cursor-pointer hover:text-slate-400">{{ items.name }}</li>
</nav>
<div class="flex flex-col min-h-screen">
  <slot />
</div>
<footer class="text-center">
  <p>© 2024 ZhengYuen All Right</p>
</footer>
</template>

<script scope>
</script>