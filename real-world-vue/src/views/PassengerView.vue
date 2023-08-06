<template>
  <h1>Events For Good</h1>
  <main class="events">
    <StudentCard v-for="student in students" :student="student" :key="student.id"></StudentCard>
  </main>
</template>

<script setup lang="ts">
import type { PassengerItem } from '@/type'
import StudentCard from '@/components/PassengerCard.vue'
import { ref, type Ref } from 'vue'
import PassengerService from '@/services/PassengerService';

const students: Ref<Array<PassengerItem>> = ref([])
PassengerService.getEvent().then((res) => {
  students.value = res.data
})
</script>

<style scoped></style>
@/services/PassengerService