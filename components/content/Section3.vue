<script lang="ts" setup>
const {
  sectionThreeContent,
  sectionThreeEvents
} = defineProps<{
  sectionThreeContent: string,
  sectionThreeEvents: {
    imageUrl: string,
    title: string,
    href1: string,
    href2: string,
    href3: string,
    href4: string,
  }[],
}>();
</script>

<template>
  <div class="bg-[#3f7652] flex justify-center items-center">
    <div class="flex flex-col items-center justify-center w-full bg-white py-5 max-w-[980px]">
      <h2 class="text-[38px] font-normal max-w-[600px] text-center text-[#2a2f36]">
        {{ sectionThreeContent }}
      </h2>
      <div class="flex items-center justify-center w-full gap-7">
        <div class="w-[292px] h-[560px] border flex flex-col" v-for="event in sectionThreeEvents">
          <NuxtLink :href="event.href1" class="hover:brightness-75 transition-all duration-300 !border-0">
            <NuxtImg width="290" :src="event.imageUrl" class="aspect-square m-0 w-full object-cover"></NuxtImg>
          </NuxtLink>
          <div class="flex flex-col justify-between w-full h-full p-[31px]">
            <div class="flex flex-col">
              <div>
                <NuxtLink :href="event.href2"
                  class="!text-[#2a2f36] text-[24px] leading-[24px] !border-0 hover:opacity-60 transition-all duration-300">
                  {{ event.title }}
                </NuxtLink>
              </div>
              <div>
                <NuxtLink :href="event.href3"
                  class="!text-[#2a2f36] !border-[#2a2f36] !border-solid hover:opacity-60 transition-all duration-300">
                  More Info
                </NuxtLink>
              </div>
            </div>
            <div class="flex">
              <NuxtLink :href="event.href4"
                class="bg-[#8abdcf] !rounded-full leading-[16px] py-[12px] px-[16px] !text-white !border-none hover:opacity-60 transition-all duration-300">
                Book Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>