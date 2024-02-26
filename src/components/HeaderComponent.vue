<script setup>
import SelectButton from "primevue/selectbutton";
import { ref } from "vue";
let selectedLang = ref(
  localStorage.getItem("lang") === "en"
    ? { img: "/src/assets/imgs/icons/us-flag.svg", value: "en" }
    : { img: "/src/assets/imgs/icons/br-flag.svg", value: "pt" }
);
let oldOpt = selectedLang.value;
const options = ref([
  { img: "/src/assets/imgs/icons/br-flag.svg", value: "pt" },
  { img: "/src/assets/imgs/icons/us-flag.svg", value: "en" },
]);

function getImageUrl(name) {
  return new URL(import.meta.env.MODE === 'production' ? `/portfolio-vue${name}` : `${name}`, import.meta.url).href
}
verifyLang();

function verifyLang(event) {
  if (selectedLang.value && selectedLang?.value?.value === "pt") {
    document.getElementById("page-structure").lang = "pt-BR";
    localStorage.setItem("lang", "pt");
  } else if (!selectedLang.value) {
    selectedLang = ref(oldOpt);
  } else {
    document.getElementById("page-structure").lang = "en";
    localStorage.setItem("lang", selectedLang.value.value);
  }
  oldOpt = selectedLang.value;
  if (event) {
    window.location.reload();
  }
}
</script>

<template>
  <header
    class="p-6 rounded-full w-max gap-6 flex items-center h-12 shadow-lg bg-slate-300 shadow-teal-200
    dark:bg-slate-950 dark:shadow-teal-800"
  >
    <h1 class="text-2xl drop-shadow-md w-max h-max">Luan Masson</h1>
    <SelectButton
      v-model="selectedLang"
      :options="options"
      aria-labelledby="basic"
      optionLabel="value"
      dataKey="value"
      v-on:change="verifyLang($event)"
      class="select-button"
    >
      <template #option="slotProps">
        <img class="w-6" :src="getImageUrl(slotProps.option.img)" alt="" />
      </template>
    </SelectButton>
  </header>
</template>

<style scoped>
@media (min-width: 768px) {
  header {
    z-index: 100;
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  header {
    z-index: 100;
    position: fixed;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
