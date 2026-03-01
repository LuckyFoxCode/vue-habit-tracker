<script setup lang="ts">
import { ref } from 'vue';
import Content from './components/Content.vue';
import Header from './components/Header.vue';
import { MOCK_HABITS } from './mock';
import type { Habit } from './types';

const habits = ref<Habit[]>(MOCK_HABITS);

const addHabit = (newHabit: Habit) => {
  habits.value.push(newHabit);
};

const deleteHabit = (id: string) => {
  return (habits.value = habits.value.filter((habit) => habit.id !== id));
};
</script>

<template>
  <Header />
  <Content
    :habits
    @add="addHabit"
    @delete="deleteHabit"
  />
</template>
