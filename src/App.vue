<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
import FirstImpression from "./components/FirstImpression.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import SpeedDial from "primevue/speeddial";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { useDark } from "@vueuse/core";
import { ref } from "vue";
const toast = useToast();
let selectedLanguage = localStorage.getItem("lang");
const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
window.onload = function () {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
};

const items = ref([
  {
    label: "Linkedin",
    icon: "pi pi-linkedin",
    command: () => {
      window.open("https://www.linkedin.com/in/luanmasson/", "_blank");
    },
  },
  {
    label: "Github",
    icon: "pi pi-github",
    command: () => {
      window.open("https://github.com/Luan-Masson", "_blank");
    },
  },
  {
    label: "Instagram",
    icon: "pi pi-instagram",
    command: () => {
      window.open("https://www.instagram.com/masson.z/", "_blank");
    },
  },
  {
    label: "Email",
    icon: "pi pi-envelope",
    command: () => {
      navigator.clipboard.writeText("luan0masson@gmail.com");
      toast.add({
        severity: "info",
        summary: selectedLanguage === "pt" ? "Copiado" : "Copied",
        detail:
          selectedLanguage === "pt"
            ? "E-mail copiado para a área de transferência"
            : "Email copied to clipboard",
        life: 3000,
      });
    },
  },
]);
</script>

<template>
  <Toast position="top-left" />
  <SpeedDial
    :model="items"
    direction="down"
    showIcon="pi pi-comments"
    :style="{ left: '1%', top: '1%', position: 'fixed' }"
    :tooltipOptions="{ position: 'right' }"
  />
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
  <div id="aboutMe" class="relative h-dvh overflow-hidden">
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
    <AboutMe />
  </div>
  <div
    id="skills"
    ref="skillsElement"
    class="relative h-max pb-20 2xl:h-dvh 2xl:p-0 overflow-hidden"
  >
    <Skills />
  </div>
  <div class="relative h-max pb-20 overflow-hidden">
    <Projects />
  </div>
</template>

<style scoped></style>
