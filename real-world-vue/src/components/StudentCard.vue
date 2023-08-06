
<template>
    <div class="student-class">
      <div class="student-card">
        <span>Name: {{ student.name }}  {{ student.surname }}</span>
        <h4>GPA: {{ student.gpa }}</h4>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { StudentItem } from '@/type'
  import type { PropType } from 'vue'
  
  defineProps({
    student: {
      type: Object as PropType<StudentItem>,
      required: true
    }
  })
  </script>
  
  
  <style scoped>
  .student-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  
  .student-card:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
  }
 
  </style>
  