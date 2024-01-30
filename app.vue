<template>
  <div class="bg-black fixed w-[calc(100%+1px)] h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CreatePost
      :class="[
        {
          'max-h-[100vh] transition-all duration-200 ease-in visible':
            userStore.isMenuOverlay,
        },
        {
          'max-h-[0px] transition-all duration-200 ease-out invisible':
            !userStore.isMenuOverlay,
        },
      ]"
    />
  </div>
</template>

<script setup>
const userStore = useUserStore();
</script>
