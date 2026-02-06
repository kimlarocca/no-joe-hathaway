<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black py-16 text-center">
    <p class="text-white small font-semibold mt-4">
      This website is a work of satire and political commentary. We are not affiliated
      with, sponsored by, or endorsed by any of the companies whose logos appear here.
    </p>
    <p class="text-white small font-semibold mt-4">
      Copyright © {{ currentYear }}. All Rights Reserved.
    </p>
  </footer>
</template>
