<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">

      <AppNavbar />
      <NuxtPage />

    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">

        <!-- Sidebar content here -->
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" active-class="font-bold" class="mr-6">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
