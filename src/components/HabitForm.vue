<script setup lang="ts">
import type { Habit } from '@/types';
import { computed, ref } from 'vue';

const emit = defineEmits<{ (e: 'add', habit: Habit): void }>();

const inputValue = ref('');

const validInput = computed(() => {
  return inputValue.value.trim().length > 0 ? true : false;
});

function handleSubmit() {
  if (!inputValue.value) return;

  const newHabit: Habit = {
    id: crypto.randomUUID(),
    title: inputValue.value.trim(),
    createdAt: new Date(),
    completedDates: [],
  };

  emit('add', newHabit);

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
      type="submit"
      :disabled="!validInput"
      class="cursor-pointer rounded-lg border px-4 py-3"
    >
      Create
    </button>
  </form>
</template>
