<template>
  <div class="flex items-center justify-center">
    <div class="relative w-full max-w-lg">
      <navigation-bar />
    </div>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
</script>
