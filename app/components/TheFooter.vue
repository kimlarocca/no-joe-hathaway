<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black py-16 text-center">
    <div class="container">
      <p class="text-white small font-semibold mt-4">
        The views expressed herein are exclusively those of the authors and do not reflect
        the official stance of any political candidate or other organization and have not
        been requested or endorsed by any related entity. Information presented has been
        verified as accurate to the best of our ability. This website was not requested or
        authorized by any candidate or candidate's committee. Paid for by People Are
        People LLC, 971 US Highway 202N #8014, Branchburg, NJ 08876.
      </p>
      <p class="text-white small font-semibold mt-4">
        Copyright © {{ currentYear }} People Are People NJ. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
