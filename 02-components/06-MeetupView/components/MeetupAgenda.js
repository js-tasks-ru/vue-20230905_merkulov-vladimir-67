import { defineComponent } from '../vendor/vue.esm-browser.js';
import  MeetupAgendaItem  from './MeetupAgendaItem.js';


export default defineComponent({
  name: 'MeetupAgenda',
  props: {
    agenda: {
    type: Array,
    required: true
    },
  },
  components: {
      MeetupAgendaItem,
  },
  
  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="agenda_item of agenda">
        <!-- meetup agenda item -->
        <MeetupAgendaItem :agenda-item="agenda_item" />
      </li>
    </ul>`,
});
