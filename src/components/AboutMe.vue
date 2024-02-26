<script setup></script>
<template>
  <section class="flex w-dvw h-3/4 absolute top-2">
    <div
      class="flex flex-col md:flex-row fade-in w-full h-full items-center justify-center gap-8"
    >
      <div class="flex flex-col gap-2 w-30rem items-center md:items-start"
      v-animateonscroll="{ enterClass: 'fade-in-up', leaveClass: 'invisible' }">
        <h1 class="text-md md:text-3xl text-start">{{ $t("about.header") }}</h1>
        <div class="w-48 md:w-96">
          <p class="text-xs md:text-base text-justify indent-4">
            {{ $t("about.aboutMe") }}
          </p>
        </div>
      </div>
      <div class="photos relative flex"
      v-animateonscroll="{ enterClass: 'fade-in-up', leaveClass: 'invisible' }">
        <img
          class="rounded-2xl w-32 md:w-96 shadow-xl shadow-teal-300 transition-all ease-in-out duration-300 dark:shadow-teal-800 hover:scale-110 hover:shadow-md"
          src="../assets/imgs/img/Me.png"
          alt=""
        />
        <img
          class="rounded-2xl max-h-16 md:max-h-32 absolute z-10 -top-4 -left-3 shadow-md shadow-teal-300 transition-all ease-in-out duration-300 dark:shadow-teal-800 hover:scale-110 hover:shadow-sm"
          src="../assets/imgs/img/Me2.png"
          alt=""
        />
        <img
          class="rounded-2xl max-h-20 md:max-h-48 absolute z-10 -bottom-4 -right-3 shadow-lg shadow-teal-300 transition-all ease-in-out duration-300 dark:shadow-teal-800 hover:scale-110 hover:shadow-sm"
          src="../assets/imgs/img/Me3.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.w-30rem {
  width: 30rem;
}
</style>
