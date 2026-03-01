<script setup lang="ts">
import type { Habit } from '@/types';
defineProps<{ habit: Habit }>();

defineEmits<{ (e: 'delete', id: string): void }>();
</script>

<template>
  <li class="flex items-center gap-x-1 rounded-xl bg-slate-700 p-2">
    <span class="text-xl">{{ habit.title }}</span>
    <button
      class="size-6 cursor-pointer rounded-md bg-slate-300"
      @click="$emit('delete', habit.id)"
    >
      🗑️
    </button>
  </li>
</template>
