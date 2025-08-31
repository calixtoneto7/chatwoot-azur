<script setup>
import ConversationCard from 'dashboard/components/widgets/conversation/ConversationCard.vue';

const props = defineProps({
  conversation: { type: Object, required: true },
  groupBy: { type: String, default: 'status' },
});
</script>

<template>
  <ConversationCard
    :chat="conversation"
    :conversation-type="conversation.conversation_type"
    :team-id="conversation.meta?.team?.id"
    :label="conversation.label"
    compact
  />
</template>
