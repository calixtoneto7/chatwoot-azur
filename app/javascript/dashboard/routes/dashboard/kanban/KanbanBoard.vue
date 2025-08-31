<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import KanbanColumn from './KanbanColumn.vue';
import wootConstants from 'dashboard/constants/globals';

const store = useStore();

const conversations = computed(() => store.getters['conversations/getAllConversations']);

const grouped = computed(() => {
  const map = {
    [wootConstants.STATUS_TYPE.OPEN]: [],
    [wootConstants.STATUS_TYPE.PENDING]: [],
    [wootConstants.STATUS_TYPE.SNOOZED]: [],
    [wootConstants.STATUS_TYPE.RESOLVED]: [],
  };
  conversations.value.forEach(c => {
    map[c.status]?.push(c);
  });
  return map;
});
</script>

<template>
  <section class="flex h-full w-full overflow-x-auto">
    <KanbanColumn title="Abertos" :items="grouped.open" status="open" />
    <KanbanColumn title="Pendentes" :items="grouped.pending" status="pending" />
    <KanbanColumn title="Snoozed" :items="grouped.snoozed" status="snoozed" />
    <KanbanColumn title="Resolvidos" :items="grouped.resolved" status="resolved" />
  </section>
</template>
