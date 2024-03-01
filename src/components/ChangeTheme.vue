<script setup>
import Button from "primevue/button";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
let toggle = useToggle(isDark);

function changeStatus() {
  toggle();
}
</script>
<template>
  <Button
    class="change-theme-button shadow-teal-200 hover:!bg-slate-400/75 !bg-slate-300/75 size-12 
    dark:shadow-teal-800 dark:hover:!bg-slate-800/90 dark:!bg-slate-950/75"
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    text
    raised
    rounded
    aria-label="Filter"
    @click="changeStatus()"
    :pt="{ icon: 'text-slate-950 dark:text-slate-50' }"
    v-tooltip.left="isDark ? $t('mode.light') : $t('mode.dark') "
  />
</template>

<style scoped>
.change-theme-button {
  position: fixed;
  top: 2%;
  right: 1.5%;
  z-index: 100;
}
</style>
