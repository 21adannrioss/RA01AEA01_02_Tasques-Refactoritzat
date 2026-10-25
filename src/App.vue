<script setup>
import { ref, computed } from 'vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

// Funció per donar el mateix format a totes les dates
function formatarData(data) {
  return data.toLocaleDateString('ca-ES')
}

const tasques = ref([
  {id: 1, titol: 'Rentar o guardar els plats', completada: true, dataCreacio: formatarData(new Date(2026, 9, 17))},
  {id: 2, titol: 'Treure les escombraries', completada: false, dataCreacio: formatarData(new Date(2026, 9, 17))},
  {id: 3, titol: 'Fer el llit', completada: true, dataCreacio: formatarData(new Date(2026, 9, 17))},
  {id: 4, titol: 'Respondre un correu', completada: false, dataCreacio: formatarData(new Date(2026, 9, 17))}
])

// Comptador per donar un id diferent a cada tasca nova
let seguentId = tasques.value.length + 1

// Casella "Mostra només pendents" amb v-model
const nomesPendents = ref(false)

// Missatge de notificació que es mostra temporalment
const missatge = ref('')
let temporitzador = null


// COMPUTED

// Totes les tasques o només les pendents segons la casella
const tasquesVisibles = computed(() => {
  if(nomesPendents.value) return tasques.value.filter((t) => !t.completada)
  return tasques.value
})

// Comptadors a nivell de component pare
const total = computed(() => tasques.value.length)
const completades = computed(() => tasques.value.filter((t) => t.completada).length)
const pendents = computed(() => total.value - completades.value)

// Mostra una notificació durant 3 segons
function notificar(text) {
  missatge.value = text
  clearTimeout(temporitzador)
  temporitzador = setTimeout(() => (missatge.value = ''), 3000)
}


// Events rebuts dels components fills

// TaskForm emet "afegir" amb el títol
function afegirTasca(titol) {
  tasques.value.push({
    id: seguentId++,
    titol,
    completada: false,
    dataCreacio: formatarData(new Date())
  })
  notificar(`Tasca "${titol}" afegida`)
}

// TaskItem emet "completar" amb l'id
function completarTasca(id) {
  const tasca = tasques.value.find((t) => t.id === id)
  if(!tasca) return
  tasca.completada = !tasca.completada
  notificar(tasca.completada? `Tasca "${tasca.titol}" completada`: `Tasca "${tasca.titol}" torna a pendent`)
}

// TaskItem emet "eliminar" amb l'id
function eliminarTasca(id) {
  const tasca = tasques.value.find((t) => t.id === id)
  if(!tasca) return
  tasques.value = tasques.value.filter((t) => t.id !== id)
  notificar(`Tasca "${tasca.titol}" eliminada`)
}
</script>

<template>
  <div class="gestor">
    <h1>Gestor de Tasques</h1>

    <!-- S'escolta l'event del component fill -->
    <TaskForm @afegir="afegirTasca"/>

    <!-- Filtre de pendents -->
    <label class="filtre">
      <input v-model="nomesPendents" type="checkbox"/>
      Mostra només pendents
    </label>

    <!-- Es passa la llista de tasques visibles al component fill -->
    <TaskList :tasques="tasquesVisibles" @completar="completarTasca" @eliminar="eliminarTasca"/>

    <p class="resum">Total: {{total}} | Pendents: {{pendents}} | Completades: {{completades}}</p>

    <!-- Notificació temporal, només es mostra si hi ha missatge -->
    <p v-if="missatge" class="notificacio">{{ missatge }}</p>
  </div>
</template>