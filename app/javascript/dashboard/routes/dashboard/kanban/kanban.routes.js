/* eslint arrow-body-style: 0 */
import { frontendURL } from '../../../helper/URLHelper';
import KanbanBoard from './KanbanBoard.vue';

const CONVERSATION_PERMISSIONS = [
  'administrator',
  'agent',
  'conversation_manage',
  'conversation_unassigned_manage',
  'conversation_participating_manage',
];

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/kanban'),
      name: 'kanban_board',
      meta: { permissions: CONVERSATION_PERMISSIONS },
      component: KanbanBoard,
    },
  ],
};
