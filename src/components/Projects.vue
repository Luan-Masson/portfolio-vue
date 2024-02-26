<script setup>
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import { useDark } from "@vueuse/core";
import { ref } from "vue";

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
</script>

<template>
  <div class="card">
    <Carousel
      :value="Object.values($tm('projects'))"
      :numVisible="3"
      :numScroll="1"
      circular
      :autoplayInterval="4000"
      :responsiveOptions="responsiveOptions"
      v-animateonscroll="{ enterClass: 'fade-in-up' }"
    >
      <template #item="slotProps">
        <Card
          class="w-11/12 h-112 xl:h-100 overflow-hidden"
        >
          <template #header>
            <div class="flex justify-center items-center w-full h-40">
              <img
                class="w-36 p-2 drop-shadow-4xl"
                alt="user header"
                :src="!isDark ? slotProps.data.image : slotProps.data.imageDark"
              />
            </div>
          </template>
          <template #title>
            <span class="w-full flex items-center justify-center">{{
              slotProps.data.title
            }}</span></template
          >
          <template #content>
            <span>{{ slotProps.data.about }}</span>
          </template>
        </Card>
      </template>
    </Carousel>
  </div>
</template>
