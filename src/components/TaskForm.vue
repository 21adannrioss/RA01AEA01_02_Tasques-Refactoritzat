<script setup>
import { ref } from 'vue'

// Esdeveniment que aquest component pot enviar al pare
const emit = defineEmits(['afegir'])

// Text de la nova tasca i si s'ha de mostrar l'avís que el títol està buit
const nouTitol = ref('')
const mostrarAvis = ref(false)

// Envia el títol al pare, si està buit, mostra l'avís
function enviar() {
  const titol = nouTitol.value.trim()

  if(titol === '') {
    mostrarAvis.value = true
    return
  }

  emit('afegir', titol)
  nouTitol.value = ''
  mostrarAvis.value = false
}
</script>

<template>
  <!-- Un únic element arrel que agrupa el formulari i l'avís -->
  <div class="formulari-contenidor">

    <!-- @click executa la funció en fer clic i @keyup.enter en prémer Enter -->
    <div class="formulari">
      <input v-model="nouTitol" @keyup.enter="enviar" type="text" placeholder="Escriu una nova tasca"/>
      <button @click="enviar">Afegir</button>
    </div>

    <!-- Només s'amaga i es mostra amb v-show -->
    <p v-show="mostrarAvis" class="avis">Has d'escriure un títol per a la tasca</p>
  </div>
</template>