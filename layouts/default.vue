<template>
  <div id="MainLayout" class="h-screen">
    <div class="w-full max-w-[500px] mx-auto">
      <div
        id="TopMenu"
        class="w-full flex items-center justify-center px-2 h-10 my-2"
      >
        <img class="w-[35px]" src="/threads-logo.png" alt="Threads Logo" />
      </div>
    </div>
    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot />
    </div>
    <div
      id="BottomNav"
      class="fixed z-50 bottom-0 flex w-full justify-center h-[70px] border-t border-t-gray-700 bg-black"
    >
      <div
        class="flex w-full max-w-[500px] max-auto flex items-center justify-around"
      >
        <button @click="handleNavigateHome" class="w-full h-full">
          <Icon name="material-symbols:home-outline" size="35" color="#FFF" />
        </button>
        <button @click="handleNewPost" class="w-full h-full">
          <Icon
            class="mb-1"
            name="material-symbols:edit-square-outline-rounded"
            size="32"
            color="#FFF"
          />
        </button>
        <button @click="handleLogout" class="w-full h-full">
          <Icon class="mb-1" name="ph:sign-out" size="32" color="#FFF" />
        </button>
      </div>
    </div>
  </div>
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
  <Modal
    :class="[
      {
        'max-h-[100vh] transition-all duration-200 ease-in visible':
          userStore.isLogoutOverlay,
      },
      {
        'max-h-[0px] transition-all duration-200 ease-out invisible':
          !userStore.isLogoutOverlay,
      },
    ]"
  />
</template>

<script setup>
const router = useRouter();
const userStore = useUserStore();

const handleNavigateHome = () => {
  router.push("/");
};

const handleNewPost = () => {
  userStore.isMenuOverlay = true;
};

const handleLogout = () => {
  userStore.isLogoutOverlay = true;
};
</script>

<style></style>
