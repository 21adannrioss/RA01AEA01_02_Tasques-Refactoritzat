<script setup>
// Props que rep del pare
const props = defineProps({
  tasca: {
    type: Object,
    required: true
  }
})

// Esdeveniments que envia al pare quan es marca o s'elimina
const emit = defineEmits(['completar', 'eliminar'])
</script>

<template>
  <li>
    <!-- :class posa la classe tatxada només si la tasca està completada -->
    <span :class="{tatxada: tasca.completada}">{{tasca.titol}}</span>
    <span class="data">({{tasca.dataCreacio}})</span>

    <button @click="emit('completar', props.tasca.id)">
      <span v-if="tasca.completada">Desmarcar</span>
      <span v-else>Completar</span>
    </button>
    <button @click="emit('eliminar', props.tasca.id)" :title="'Elimina la tasca ' + tasca.titol">🗑️</button>
  </li>
</template>