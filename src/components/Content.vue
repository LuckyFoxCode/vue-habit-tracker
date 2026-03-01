<script setup lang="ts">
import type { Habit } from '@/types';
import HabitForm from './HabitForm.vue';
import HabitList from './HabitList.vue';

defineProps<{
  habits: Habit[];
}>();

const emit = defineEmits<{
  (e: 'add', habit: Habit): void;
  (e: 'delete', id: string): void;
}>();
</script>

<template>
  <main class="flex flex-col gap-y-4 bg-slate-500 px-4 py-3 text-white">
    <HabitForm
      :habits
      @add="(newHabit: Habit) => emit('add', newHabit)"
    />
    <HabitList
      :habits
      @delete="(id: string) => emit('delete', id)"
    />
  </main>
</template>
