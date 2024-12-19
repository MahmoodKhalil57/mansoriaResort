<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between lg:justify-evenly px-10 py-4 text-gray-700 dark:text-gray-200">
    <!-- Logo -->
    <NuxtImg src="/botelogonoeat.png" />
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200 hidden lg:block">
      <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path" active-class="font-bold" class="mr-6">
        {{ link.title }}
      </NuxtLink>
    </div>

    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-gray-500">
      <!-- <a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter"
        class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
        <Icon name="fa-brands:twitter" class="w-5 h-5" />
      </a>
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub"
        class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
        <Icon name="fa-brands:github" class="w-5 h-5" />
      </a>
      <a v-if="appConfig.socials?.mastodon" :href="`https://elk.zone/${appConfig.socials?.mastodon}`" title="Mastodon"
        class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
        <Icon name="fa-brands:mastodon" class="w-5 h-5" />
      </a> -->

      <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
      <label for="my-drawer-4" class="drawer-button btn btn-primary lg:hidden"></label>

    </div>
  </div>
</template>
