# Gestor de Tasques - Refactorització en components

## Execució
```
npm install
npm run dev
```

## Jerarquia de components

```
App.vue              (estat: tasques, filtre, comptadors, notificacions)
├── TaskForm.vue     (input per afegir una tasca)
├── TaskList.vue     (mostra la llista o el missatge de "buit")
└── TaskItem.vue     (una tasca: completar / eliminar)
```

## Millora inclosa
Notificacions temporals per cada acció.

Comptador de tasques pendents i completades.
