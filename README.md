# Gestor de Tasques - Refactorització en components

## Execució

```
npm install
npm run dev
```

## Anàlisi i descomposició

L'aplicació original tenia tot el codi en un sol component. L'he dividit en tres components, cadascun amb una responsabilitat:

- `TaskForm.vue`: input per afegir una tasca nova.
- `TaskList.vue`: mostra la llista de tasques.
- `TaskItem.vue`: representa una tasca individual.

L'estat (tasques, comptadors i notificacions) es queda a `App.vue`, que coordina els altres components.

## Jerarquia de components

```
App.vue (estat: tasques, filtre, comptadors, notificacions)
├── TaskForm.vue (input per afegir una tasca)
└── TaskList.vue (mostra la llista o el missatge de "buit")
    └── TaskItem.vue (una tasca: completar / eliminar)
```

## Millores incloses

- Notificacions temporals en afegir, completar i eliminar tasques.
- Comptador de tasques totals, pendents i completades a `App.vue`.
