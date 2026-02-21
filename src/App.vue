<script setup lang="ts">
import { computed, ref } from 'vue';

const inputValue = ref('');
const habits = ref([
  { id: '1', title: 'First habit', completed: false },
  { id: '2', title: 'Second habit', completed: true },
  { id: '3', title: 'Third habit', completed: true },
]);

const validInput = computed(() => {
  return inputValue.value.trim().length > 0 ? true : false;
});

function handleSubmit() {
  console.log('---Send habit---', inputValue.value);
  if (!inputValue.value) return;

  const newHabit = {
    id: crypto.randomUUID(),
    title: inputValue.value,
    completed: false,
  };

  habits.value.push(newHabit);

  inputValue.value = '';
}

function deleteHabit(id: string) {
  return (habits.value = habits.value.filter((habit) => habit.id !== id));
}
</script>

<template>
  <header class="flex bg-slate-200 px-4 py-3">
    <h1>Vue Habit Tracker</h1>
  </header>
  <main class="flex flex-col gap-y-4 bg-slate-500 px-4 py-3 text-white">
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
    <ul class="grid gap-y-3">
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
    </ul>
  </main>
</template>
