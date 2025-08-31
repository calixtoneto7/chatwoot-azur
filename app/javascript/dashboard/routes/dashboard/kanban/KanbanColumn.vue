<script setup>
import { useStore } from 'vuex';
import ConversationCard from 'dashboard/components/widgets/conversation/ConversationCard.vue';

const props = defineProps({
  title: String,
  items: Array,
  status: String,
});

const store = useStore();

function onDrop(e, conversationId) {
  const newStatus = props.status;
  store.dispatch('conversations/toggleStatus', { conversationId, status: newStatus });
}
</script>

<template>
  <div
    class="flex-1 p-4 bg-n-slate-2 rounded-md mx-2 min-w-[320px]"
    @drop.prevent="e => onDrop(e, e.dataTransfer.getData('id'))"
    @dragover.prevent
  >
    <h3 class="font-semibold mb-4">{{ title }}</h3>
    <div class="space-y-2">
      <ConversationCard
        v-for="c in items"
        :key="c.id"
        :chat="c"
        draggable="true"
        @dragstart="e => e.dataTransfer.setData('id', c.id)"
      />
    </div>
  </div>
</template>
