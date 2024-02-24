<script setup>
import Card from "primevue/card";
import Chip from "primevue/chip";
import ScrollPanel from "primevue/scrollpanel";
import { useDark } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
</script>
<template>
  <section class="flex flex-wrap w-full h-full justify-center gap-6">
    <!-- Usar quando finalizar os i18n <h1 v-for="skills in $tm('skills')">{{ skills }}</h1> -->
    <Card
      v-for="skillQ in $tm('skills')"
      class="w-11/12 md:w-96 h-max overflow-hidden"
    >
      <template #header>
        <div class="flex justify-center items-center w-full h-40">
          <img
            class="w-36 p-2"
            alt="user header"
            :src="!isDark ? skillQ.image : skillQ.imageDark"
          />
        </div>
      </template>
      <template #title>
        <span class="w-full flex items-center justify-center">{{
          skillQ.title
        }}</span></template
      >
      <template #content>
        <div class="flex flex-col gap-2 h-44">
          <ScrollPanel style="width: 100%; height: 200px">
            <div class="flex flex-col gap-2">
                <li v-for="skill in skillQ.skills" :key="skill">
                  <Chip class="shadow" :label="skill" />
                </li>
            </div>
          </ScrollPanel>
        </div>
      </template>
    </Card>
  </section>
</template>
<style scoped></style>
