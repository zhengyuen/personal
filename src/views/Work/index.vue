<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter()
const changePage = (url) => {
  router.push(url)
}

const workList = ref([
  {
    name: '健身網站',
    image: 'https://i.imgur.com/MAz6qZg.jpeg',
    connect: 'https://0125sport.netlify.app'
  },
  {
    name: 'Pizza網站',
    image: 'https://i.imgur.com/tvM7ak0.jpeg',
    connect: 'https://1128pizza.netlify.app'
  },
  {
    name: '舞蹈網站',
    image: 'https://i.imgur.com/ZW8FzGD.jpeg',
    connect: 'https://dancemework.netlify.app'
  },
  {
    name: '麵包店網站',
    image: 'https://i.imgur.com/rILxXvS.jpeg',
    connect: 'https://0118breakfast.netlify.app'
  },
  {
    name: '相機網站',
    image: 'https://i.imgur.com/h3RvUVQ.jpeg',
    connect: 'https://0111camera.netlify.app'
  },
  {
    name: '摩托車網站',
    image: 'https://i.imgur.com/O1QaT9R.jpeg',
    connect: 'https://0109motorcycle.netlify.app'
  },
  {
    name: '圖片導覽網站',
    image: 'https://i.imgur.com/f1EwXxE.jpeg',
    connect: 'https://1207move.netlify.app'
  }
])

const vueWorkList = ref([
  {
    name: '保養品網站',
    image: 'https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    connect: 'https://zhengyuen.github.io/make-up-public/'
  },
  {
    name: '模仿小木屋訂餐系統App',
    image: 'https://i.imgur.com/mYG5F6a.png',
    connect: 'https://github.com/zhengyuen/meal'
  }
])
</script>

<template>
  <p class="mt-20 ml-5 font-bold">網頁切版作品</p>
  <div class="flex mx-auto flex-wrap">
    <template  v-for="items in workList" :key="items.name">
    <div class="mx-3 my-5 w-32 h-36 brightness-75 hover:scale-110 hover:brightness-100 hover:delay-150 text-center shadow-md ">
      <a :href="items.connect"  target="_blank">
        <img :src="items.image" alt="" class="w-30 h-40 object-cover">
        <p class="text-sm">{{ items.name }}</p>
      </a>
    </div>
    </template>
    </div>
  <p class="mt-20 ml-5 font-bold">vue作品</p>
  <div class="flex ml-5 mb-10">
    <template  v-for="items in vueWorkList" :key="items.name">
    <div class="mx-3 my-5 w-32 h-36 brightness-75 hover:scale-110 hover:brightness-100 hover:delay-150 text-center shadow-md ">
      <a :href="items.connect"  target="_blank">
        <img :src="items.image" alt="" class="w-30 h-40 object-cover">
        <p class="text-sm">{{ items.name }}</p>
      </a>
    </div>
    </template>
  </div>

</template>

