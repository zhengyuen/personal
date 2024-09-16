<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const changePage = (url) => {
  router.push(url)
}
</script>

<template>
  <div class="my-auto">
    <div class="font-bold text-center text-2xl title">Welcome to Yuen's web</div>
    <div class="text-center text-white mt-5">
      <button class="bg-slate-400 rounded-md w-24 hover:scale-90 hover:text-black" @click="changePage('/about')">About me</button>
      <button class="bg-slate-400 rounded-md w-24 ml-3 hover:scale-90 hover:text-black" @click="changePage('/work')">My work</button>
    </div>
  </div>
</template>

<style scope>
</style>