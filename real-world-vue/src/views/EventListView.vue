<template>
  <h1>Events For Good</h1>
  <main class="events">
    <EventCard  v-for="event in events" :event="event" :key="event.id"></EventCard>
  </main>
</template>

<script setup lang="ts">
import type { EventItem } from '@/type';
import EventCard from '@/components/EventCard.vue';
import { ref, type Ref } from 'vue';
import EventService from '@/services/EventService'

const events: Ref<Array<EventItem>> = ref([])
EventService.getEvent().then( (res) => {
    events.value =res.data
})

</script>

<style scoped>
  
</style>
