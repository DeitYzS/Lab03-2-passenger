<template>
  <h1>Events For Good</h1>
  <main class="events">
    <PassengerCard  v-for="passenger in passengers" :event="passenger" :key="passenger.id"></PassengerCard>
  </main>
</template>

<script setup lang="ts">
import type { PassengerItem } from '@/type';
import PassengerCard from '@/components/PassengerCard.vue';
import { ref, type Ref } from 'vue';
import PassengerService from '@/services/PassengerService';

const passengers: Ref<Array<PassengerItem>> = ref([])
PassengerService.getEvent().then( (res) => {
    passengers.value =res.data
})

</script>

<style scoped>
  
</style>
