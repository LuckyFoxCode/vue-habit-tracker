<script setup lang="ts">
import HabitForm from './HabitForm.vue';
import HabitList from './HabitList.vue';
</script>

<template>
  <main class="flex flex-col gap-y-4 bg-slate-500 px-4 py-3 text-white">
    <HabitForm />
    <HabitList />
  </main>
</template>
