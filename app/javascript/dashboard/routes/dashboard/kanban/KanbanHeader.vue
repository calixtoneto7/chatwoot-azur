<script setup>
const props = defineProps({
  groupBy: { type: String, default: 'status' },
});

const emit = defineEmits(['update:groupBy']);
</script>

<template>
  <div class="flex items-center justify-between p-4 border-b">
    <h2 class="text-lg font-semibold">Kanban de Conversas</h2>
    <select
      v-model="props.groupBy"
      @change="emit('update:groupBy', $event.target.value)"
      class="border rounded px-2 py-1"
    >
      <option value="status">Status</option>
      <option value="assignee">Responsável</option>
      <option value="team">Time</option>
    </select>
  </div>
</template>
