<script setup lang="ts">
import { habits } from '@/mock';
import type { Habit } from '@/types';
import { computed, ref } from 'vue';

const inputValue = ref('');

const validInput = computed(() => {
  return inputValue.value.trim().length > 0 ? true : false;
});

function handleSubmit() {
  if (!inputValue.value) return;

  const newHabit: Habit = {
    id: crypto.randomUUID(),
    title: inputValue.value,
    createdAt: new Date(),
    completedDates: [],
  };

  habits.push(newHabit);

  inputValue.value = '';
}
</script>
<template>
  <form
    class="flex w-1/3 gap-x-2"
    @submit.prevent="handleSubmit"
  >
    <input
      class="w-full rounded-lg border px-4 py-1"
      type="text"
      placeholder="Enter habit..."
      v-model.trim="inputValue"
    />
    <button
      :disabled="!validInput"
      class="cursor-pointer rounded-lg border px-4 py-3"
    >
      Create
    </button>
  </form>
</template>
