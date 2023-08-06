<template>
    <div class="categories">
      <div class="event-card">
        <span>Category:  {{ event?.category }} </span><br>
        <span>Organizer: {{ event?.organizer }}</span>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { EventItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>

<style scoped>
  .categories {
      display:flex;
      flex-direction: column;
      font: 20px;
      float: right;
      margin: 10px;
    }

  .event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}

</style>