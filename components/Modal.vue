<template>
  <div
    id="Modal"
    class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md w-full"
  >
    <div
      class="bg-black w-full max-w-[300px] rounded-lg text-white border border-gray-600 p-2"
    >
      <button
        @click="useStore.isLogoutOverlay = false"
        class="flex items-center justify-between bg-black w-full p-3"
      >
        <span>Close Modal</span>
        <Icon name="mdi:close" size="25" />
      </button>
      <div class="border-b border-b-gray-700 my-1" />
      <button
        @click="logout()"
        class="flex items-center justify-between bg-black w-full p-3"
      >
        <span>Log Out</span>
        <Icon name="mdi:logout" size="25" />
      </button>
    </div>
  </div>
</template>

<script setup>
const useStore = useUserStore();
const client = useSupabaseClient();

const logout = () => {
  client.auth.signOut();
  useStore.isLogoutOverlay = false;
  return navigateTo("/");
};
</script>

<style></style>
