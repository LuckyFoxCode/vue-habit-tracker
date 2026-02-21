<script setup lang="ts">
import type { Habit } from '@/types';
import { ref } from 'vue';

const habits = ref<Habit[]>([]);

function deleteHabit(id: string) {
  return (habits.value = habits.value.filter((habit) => habit.id !== id));
}
</script>

<template>
  <li
    v-for="habit in habits"
    :key="habit.id"
    class="flex items-center gap-x-1 rounded-xl bg-slate-700 p-2"
  >
    <span class="text-xl">{{ habit.title }}</span>
    <button
      class="size-6 cursor-pointer rounded-md bg-slate-300"
      @click="() => deleteHabit(habit.id)"
    >
      🗑️
    </button>
  </li>
</template>
