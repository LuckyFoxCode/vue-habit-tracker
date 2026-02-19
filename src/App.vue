<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('');
const habits = ref([
  { id: '1', title: 'Random habit', completed: false },
  { id: '2', title: 'Smart habit', completed: true },
]);

function handleSubmit() {}
</script>

<template>
  <h1>Vue Habit Tracker</h1>
  <form>
    <input
      class="border"
      type="text"
    />
    <button>Add</button>
  </form>
  <ul>
    <li
      v-for="habit in habits"
      :key="habit.id"
      class="flex gap-x-1"
    >
      <span>{{ habit.title }}</span>
      <button>Delete</button>
    </li>
  </ul>
</template>
