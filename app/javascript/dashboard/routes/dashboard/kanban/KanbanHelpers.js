export function groupConversations(conversations, groupBy = 'status') {
  if (!Array.isArray(conversations)) return {};

  switch (groupBy) {
    case 'status':
      return {
        open: conversations.filter(c => c.status === 'open'),
        pending: conversations.filter(c => c.status === 'pending'),
        snoozed: conversations.filter(c => c.status === 'snoozed'),
        resolved: conversations.filter(c => c.status === 'resolved'),
      };

    case 'assignee':
      return conversations.reduce((acc, conv) => {
        const assignee = conv.meta?.assignee?.name || 'Não atribuído';
        if (!acc[assignee]) acc[assignee] = [];
        acc[assignee].push(conv);
        return acc;
      }, {});

    case 'team':
      return conversations.reduce((acc, conv) => {
        const team = conv.meta?.team?.name || 'Sem time';
        if (!acc[team]) acc[team] = [];
        acc[team].push(conv);
        return acc;
      }, {});

    default:
      return {};
  }
}
