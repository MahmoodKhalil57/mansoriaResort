<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()

const selectedLanguageCookie = useCookie("selectedLanguage")
const route = useRequestURL()
const langParam = route.searchParams.get("lang")
const langAccept = ((useRequestHeaders(['accept-language']))['accept-language'])?.split("-")?.[0]?.split(",")?.[0]
const langCookie = selectedLanguageCookie.value
if (langParam || (!langCookie && langAccept)) {
  const selectedLang = langParam ?? langAccept
  selectedLanguageCookie.value = selectedLang
  if (langParam) {
    await navigateTo(route.pathname)
  }
}

const selectedLang = selectedLanguageCookie.value ?? "en"


const changeLang = (lang) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">

      <div class="flex justify-between lg:justify-evenly px-10 py-4 text-gray-700 dark:text-gray-200">
        <!-- Logo -->
        <NuxtImg src="/botelogonoeat.png" />
        <!-- Navigation -->
        <div class="text-gray-700 dark:text-gray-200 hidden lg:flex items-center">
          <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path" active-class="font-bold" class="mr-6">
            {{ appConfig?.Language?.navigation?.[link?.title?.toLowerCase()]?.[selectedLang] ??
              link?.title }}
          </NuxtLink>
        </div>

        <!-- Social icons & Color Mode -->
        <div class="space-x-3 transition text-gray-500 flex items-center">
          <div class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0" role="button" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              <Icon name="icon-lang" class="w-7 h-7" />
            </div>
            <ul tabindex="0" class="dropdown-content menu rounded-box z-[1] shadow bg-white dark:bg-[#1F2937]">
              <li><a @click="changeLang('en')">English</a></li>
              <li><a @click="changeLang('ar')">عربي</a></li>
            </ul>
          </div>

          <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 flex" />
          <label for="my-drawer-4"
            class="drawer-button cursor-pointer lg:hidden dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <Icon name="icon-menu" class="w-7 h-7" />
          </label>

        </div>
      </div>
      <slot />

    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu text-base-content min-h-full w-80 p-4 bg-white dark:bg-[#1F2937]">
        <div class="w-full flex justify-end">
          <label for="my-drawer-4"
            class="drawer-button cursor-pointer lg:hidden dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <Icon name="icon-close" class="w-7 h-7" />
          </label>
        </div>
        <!-- Sidebar content here -->
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" active-class="font-bold" class="mr-6">
            {{ appConfig?.Language?.navigation?.[link?.title?.toLowerCase()]?.[selectedLang] ??
              link?.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
