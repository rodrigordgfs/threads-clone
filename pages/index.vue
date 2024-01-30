<template>
  <div id="IndexPage" class="w-full overflow-auto">
    <div class="mx-auto max-w-[500px] overflow-hidden">
      <div id="Posts" class="px-4 max-w-[600px] mx-auto">
        <div
          class="text-white"
          v-if="isPosts"
          v-for="post in posts"
          :key="post"
        >
          <Post :post="post" @isDeleted="posts = []" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const useStore = useUserStore();
// const user = useSupabaseUser()

const posts = ref([]);
const isPosts = ref(true);
const isLoading = ref(false);

onBeforeMount(() => {
  posts.value = [
    {
      name: "Rodrigo Shinoda",
      image: "https://placehold.co/100",
      text: "This is the title",
      picture: "https://placehold.co/500",
    },
    {
      name: "Rodrigo Shinoda",
      image: "https://placehold.co/100",
      text: "This is the title",
      picture: "https://placehold.co/500",
    },
    {
      name: "Rodrigo Shinoda",
      image: "https://placehold.co/100",
      text: "This is the title",
      picture: "https://placehold.co/500",
    },
    {
      name: "Rodrigo Shinoda",
      image: "https://placehold.co/100",
      text: "This is the title",
      picture: "https://placehold.co/500",
    },
  ];
});
</script>

<style></style>
