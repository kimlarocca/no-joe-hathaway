<template>
  <div class="floating-donate-btn flex align-center">
    <button @click="openDonate" aria-label="Donate" class="donate-btn">Donate</button>
    <!-- <button @click="openVolunteer" aria-label="Volunteer" class="volunteer-btn">
      Volunteer
    </button> -->
    <button @click="openLinktree" aria-label="Linktree" class="icon-btn">
      <i class="pi pi-link" style="font-size: 1.5rem; color: var(--white)"></i>
    </button>
  </div>
</template>

<script setup>
function openDonate() {
  window.open("https://secure.papnj.com/donate", "_blank")
}
function openVolunteer() {
  window.open("https://papnj.com/#volunteer", "_blank")
}
function openLinktree() {
  window.open("https://linktr.ee/papnj", "_blank")
}
</script>

<style scoped>
.floating-donate-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}
.donate-btn,
.volunteer-btn {
  background: var(--red);
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  margin-left: 0.5rem;
}
.donate-btn:hover,
.volunteer-btn:hover {
  transform: scale(1.07);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
}
.icon-btn {
  background: var(--red);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s, box-shadow 0.15s;
}
.icon-btn:hover {
  transform: scale(1.12);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
}
</style>
