
<template>
  <div class="passenger-class">
    <div class="passenger-card">
      <span> {{ passenger?.first_name }}  {{ passenger?.last_name }}</span>
      <h4>{{ passenger?.gender }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PassengerItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  passenger: {
    type: Object as PropType<PassengerItem>,
    require: true
  }
})
</script>


<style scoped>
.passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
</style>
