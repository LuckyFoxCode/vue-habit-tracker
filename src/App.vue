<script setup lang="ts">
import { ref } from 'vue';
import Content from './components/Content.vue';
import Header from './components/Header.vue';
import { habits } from './mock';
import type { Habit } from './types';

const habitsData = ref<Habit[]>(habits);
</script>

<template>
  <Header />
  <Content />
</template>
