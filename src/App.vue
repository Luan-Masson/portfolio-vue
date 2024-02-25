<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
import FirstImpression from "./components/FirstImpression.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import { useDark } from "@vueuse/core";
import { ref, onMounted, onBeforeUnmount } from "vue";

const aboutMeElement = ref(false);
const skillsElement = ref(false);
let showElementAboutMe = ref(false);
let showElementSkills = ref(false);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.1,
  });
  observer.observe(aboutMeElement.value);
  observer.observe(skillsElement.value);
});

onBeforeUnmount(() => {
  observer.disconnect();
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "aboutMe") {
        showElementAboutMe.value = true;
      } else {
        showElementSkills.value = true;
      }
    }
  });
}

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
</script>

<template>
  <HeaderComponent />
  <ChangeTheme />
  <div class="!overflow-hidden relative h-dvh">
    <FirstImpression />
    <img
      class="absolute bottom-0"
      v-if="!isDark"
      src="/src/assets/imgs/img/waves.svg"
      alt=""
    />
    <img
      class="absolute bottom-0"
      v-else
      src="/src/assets/imgs/img/dark-waves.svg"
      alt=""
    />
  </div>
  <div id="aboutMe" class="relative h-dvh overflow-hidden" ref="aboutMeElement">
    <img
      class="absolute top-0"
      v-if="!isDark"
      src="/src/assets/imgs/img/waves-upside.svg"
      alt=""
    />
    <img
      class="absolute top-0"
      v-else
      src="/src/assets/imgs/img/dark-waves-upside.svg"
      alt=""
    />
    <div :class="showElementAboutMe ? 'fade-in' : 'invisible'">
      <AboutMe />
    </div>
  </div>
  <div
    id="skills"
    ref="skillsElement"
    class="relative h-max pb-20 2xl:h-dvh 2xl:p-0 overflow-hidden"
  >
    <div :class="showElementSkills ? 'fade-in-up' : 'invisible'">
      <Skills />
    </div>
  </div>
  <div class="relative h-max pb-20 2xl:h-dvh 2xl:p-0 overflow-hidden"></div>
</template>

<style scoped></style>
