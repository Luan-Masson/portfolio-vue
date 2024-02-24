<script setup>
import { ref } from "vue";
let knowledges = ["FRONT", "BACK", "DEV"];
let showText = ref("FRONT");
let i = 1;

setInterval(() => {
  if (i !== null || i !== undefined) {
    if (i === 3) {
      i = 0;
    }
    let returnValue = knowledges[i];
    i++;
    showText.value = returnValue;
  }
}, 2000);
</script>

<template>
  <section class="flex w-dvw h-3/4 items-center justify-center">
    <section class="flex w-full justify-center items-center gap-4 md:gap-8">
      <h1 class="text-3xl md:text-7xl font-bold fade-in">
        {{ $t("about.is") }}
      </h1>
      <section class="flex md:gap-6 items-center mt-0.5 md:mt-2 overflow-hidden relative">
        <span class="text-3xl md:text-6xl font-bold text-start">
          <h1
            class="fade-in-out w-28 md:w-56"
            :key="showText"
            :class="
              showText === 'DEV' ? 'text-primary-600 dark:text-primary-500' : ''
            "
          >
            {{ showText }}
          </h1>
        </span>
      </section>
    </section>
  </section>
</template>

<style scoped></style>
