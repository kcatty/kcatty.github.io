<template>
  <div class="flex min-h-screen items-center justify-center bg-silver px-16">
    <div class="relative w-full max-w-lg">
      <div
        class="animate-blob absolute -left-4 top-0 rounded-full bg-blush opacity-80 mix-blend-multiply blur-xl filter h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
      ></div>
      <div
        class="animate-blob animation-delay-2 absolute -right-4 top-0 rounded-full bg-secondary opacity-70 mix-blend-multiply blur-xl filter h-32 w-32 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-72 xl:w-72"
      ></div>
      <div
        class="animate-blob animation-delay-4 absolute -bottom-8 left-20 rounded-full bg-dark opacity-70 mix-blend-multiply blur-xl filter h-24 w-24 md:h-36 md:w-36 lg:h-48 lg:w-48 xl:h-60 xl:w-60"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
