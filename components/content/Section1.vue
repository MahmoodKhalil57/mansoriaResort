<script setup lang="ts">
const {
  sectionOneBg,
  sectionOneContentImage,
  sectionOneContentTitle,
} = defineProps<{
  sectionOneBg: string,
  sectionOneContentImage: string,
  sectionOneContentTitle: string,
}>();


const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img(sectionOneBg, { width: 17000 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div
    class="min-h-[70vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center relative gap-10 py-10 px-5"
    :style="backgroundStyles">
    <h1 class="text-[#FCD46D] text-[57px] text-center my-0 font-Poppins font-semibold"
      style="text-shadow: #ffffff99 1px 1px 1px, #00000099 -1px -1px 1px;">
      {{ sectionOneContentTitle }}
    </h1>
    <NuxtImg :src="sectionOneContentImage" width="532"
      class="w-[572px] h-[496px] object-cover border-y-[20px] border-x-[25px] border-[#fcd46d] my-0">
    </NuxtImg>
  </div>
</template>