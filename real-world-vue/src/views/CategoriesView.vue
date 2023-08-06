<script setup lang="ts">
import type { EventItem } from '@/type';
import EventOrganizerCard from '@/components/EventOrganizerCard.vue';
import { ref } from 'vue'
// import TheWelcome from '@/components/TheWelcome.vue';

const events = ref<EventItem[]>([
  {
    id: 5928101,
    category: 'Animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id:4582797,
    category: 'Food',
    title: 'Community Gaardening',
    description: 'Join us as we tend to the community edible plants',
    location: 'Flora City',
    date : 'March 14, 2022',
    time: '10:00',
    petsAllowed: true ,
    organizer: 'Fren Pollin'
  },
  {
    id: 5928101,
    category: 'Sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  }
])

</script>

<template>
  <main>
    <EventOrganizerCard v-for="event in events" :key="event.id" :event="event"></EventOrganizerCard>
  </main>
</template>

<style scoped>
  .event {
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    font-size: 20px;
  }

</style>
