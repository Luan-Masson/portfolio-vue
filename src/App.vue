<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
import FirstImpression from "./components/FirstImpression.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue"
import {useDark} from '@vueuse/core';

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
</script>

<template>
  <HeaderComponent/>
  <ChangeTheme/>
  <div class="!overflow-hidden relative h-dvh">
    <FirstImpression/>
    <img class="absolute bottom-0" v-if="!isDark" src="/src/assets/imgs/img/waves.svg" alt="">
    <img class="absolute bottom-0" v-else src="/src/assets/imgs/img/dark-waves.svg" alt="">
  </div>
  <div class="relative h-dvh overflow-hidden">
    <img class="absolute top-0" v-if="!isDark" src="/src/assets/imgs/img/waves-upside.svg" alt="">
    <img class="absolute top-0" v-else src="/src/assets/imgs/img/dark-waves-upside.svg" alt="">
    <AboutMe/>
  </div>
  <div class="relative h-max pb-20 2xl:h-dvh 2xl:p-0 overflow-hidden">
    <Skills/>
  </div>
</template>

<style scoped>
</style>
