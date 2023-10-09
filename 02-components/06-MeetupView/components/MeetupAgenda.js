import { defineComponent } from '../vendor/vue.esm-browser.js';
import  MeetupAgendaItem  from './MeetupAgendaItem.js';


export default defineComponent({
  name: 'MeetupAgenda',
  props: {
    agenda: [],

  },
  components: {
      MeetupAgendaItem,
  },
  
  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <!-- meetup agenda item -->
       <div v-for="agenda_item of agenda">
        <MeetupAgendaItem :agenda-item="agenda_item" />
      </div>
      </li>
    </ul>`,
});
