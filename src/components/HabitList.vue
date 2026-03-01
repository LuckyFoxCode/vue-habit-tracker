<script setup lang="ts">
import type { Habit } from '@/types';
import HabitListItem from './HabitListItem.vue';

defineProps<{
  habits: Habit[];
}>();

const emit = defineEmits<{ (e: 'delete', id: string): void }>();
</script>

<template>
  <ul class="grid gap-y-3">
    <HabitListItem
      v-for="habit in habits"
      :key="habit.id"
      :habit
      @delete="(id: string) => emit('delete', id)"
    />
  </ul>
</template>
