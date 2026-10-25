<script setup>
import TaskItem from './TaskItem.vue'

// llista de tasques que rep del pare
defineProps({
  tasques: {
    type: Array,
    required: true
  }
})

// Els events de TaskItem es reenvien al pare
const emit = defineEmits(['completar', 'eliminar'])
</script>

<template>
  <!-- Si hi ha tasques o no -->
  <ul v-if="tasques.length > 0" class="llista">
    <TaskItem
      v-for="tasca in tasques"
      :key="tasca.id"
      :tasca="tasca"
      @completar="emit('completar', $event)"
      @eliminar="emit('eliminar', $event)"
    />
  </ul>
  <p v-else class="buit">No hi ha tasques per mostrar</p>
</template>