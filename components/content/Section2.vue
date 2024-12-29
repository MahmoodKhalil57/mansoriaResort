<script setup lang="ts">

const {
  sectionTwoTitle,
  sectionTwoLogo,
  sectionTwoSubTitle1,
  sectionTwoSubTitle2,
  sectionTwoContentImage,
  sectionTwoContent,
  eventLinks
} = defineProps<{
  sectionTwoTitle: string,
  sectionTwoLogo: string,
  sectionTwoSubTitle1: string,
  sectionTwoSubTitle2: string,
  sectionTwoContentImage: string,
  sectionTwoContent: string,
  eventLinks: { title: string, href: string }[],
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full bg-[#e6d7be] overflow-hidden">
    <div class="flex flex-col items-center justify-center relative w-full">
      <NuxtImg width="212" :src="sectionTwoLogo" class="size-[212px] absolute right-0 top-0 mr-[60px]" />
      <div class="max-w-lg flex flex-col items-center justify-center font-InknutAntiqua gap-3 pt-8 relative"
        style="text-shadow: #ffffff 3px 3px 0px, #00000033 6px 6px 0px">
        <h1 class="text-[#2a2f36] text-[81px] text-center my-0 font-semibold leading-[80px]">
          {{ sectionTwoTitle }}
        </h1>
        <h2 class="text-[#2a2f36] text-[48px] tracking-[0.48px] text-center my-0 font-semibold pt-3">
          {{ sectionTwoSubTitle1 }}
        </h2>
        <h2 class="text-[#2a2f36] text-[48px] text-center my-0 font-semibold">
          {{ sectionTwoSubTitle2 }}
        </h2>
      </div>
    </div>
    <div class="flex font-Playfair gap-20 w-full justify-center py-10">
      <NuxtLink v-for="eventLink of eventLinks" :href="eventLink.href"
        class="w-[155px] h-[60px] bg-[#27331B] flex items-center justify-center !border-4 !border-double border-white text-white text-[18px] tracking-[2.55px] hover:!text-black hover:!bg-white hover:!border-black transition-all duration-500">
        {{ eventLink.title }}
      </NuxtLink>
    </div>
    <div class="flex items-center gap-5">
      <NuxtImg width="444" :src="sectionTwoContentImage" :modifiers="{ rotate: null }"
        class="border-y-[9px] border-x-[30px] border-[#4a6976]">
      </NuxtImg>
      <p class="text-black max-w-[380px] text-[22px] text-center leading-[30.8px]">
        {{ sectionTwoContent }}
      </p>
    </div>
  </div>
</template>