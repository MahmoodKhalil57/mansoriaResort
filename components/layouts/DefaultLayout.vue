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

const languages = {
  en: "English",
  ar: "عربي",
} as const

const changeLang = (lang: keyof typeof languages) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content relative">
      <header
        class="fixed flex justify-between items-center lg:justify-evenly px-10 py-4 text-gray-700 dark:text-gray-200 h-[70px] w-full z-10 bg-white">
        <!-- Logo -->
        <NuxtImg width="53" src="/botelogonoeat.png" class="size-[53px]" />
        <!-- Navigation -->
        <nav class="text-gray-700 dark:text-gray-200 hidden lg:flex items-center">
          <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path" active-class="font-bold" class="mr-6">
            {{
              // @ts-expect-error this is fine
              appConfig?.Language?.navigation?.[link?.title?.toLowerCase()]?.[selectedLang] ??
              link?.title }}
          </NuxtLink>
        </nav>

        <!-- Social icons & Color Mode -->
        <div class="space-x-3 transition text-gray-500 flex items-center">
          <div class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0" role="button" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              <Icon name="icon-lang" class="w-7 h-7" />
            </div>
            <ul tabindex="0" class="dropdown-content menu rounded-box z-[1] shadow bg-white dark:bg-[#1F2937]">
              <li v-for="languageName, languageKey of languages"><a @click="changeLang(languageKey)">{{ languageName
                  }}</a></li>
            </ul>
          </div>

          <!-- <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 flex" /> -->
          <label for="my-drawer-4"
            class="drawer-button cursor-pointer lg:hidden dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <Icon name="icon-menu" class="w-7 h-7" />
          </label>

        </div>
      </header>

      <div class="w-full h-[70px]">

      </div>

      <slot />

    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu text-base-content min-h-full w-[75vw] max-w-80 sm:w-80 p-4 bg-white dark:bg-[#1F2937]">
        <div class="w-full flex justify-end">
          <label for="my-drawer-4"
            class="drawer-button cursor-pointer dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <Icon name="icon-cross" class="w-7 h-7" />
          </label>
        </div>
        <nav>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path" active-class="font-bold" class="mr-6">
              {{
                // @ts-expect-error this is
                appConfig?.Language?.navigation?.[link?.title?.toLowerCase()]?.[selectedLang] ??
                link?.title }}
            </NuxtLink>
          </li>
        </nav>
        <!-- Sidebar content here -->
      </ul>
    </div>
  </div>
</template>
