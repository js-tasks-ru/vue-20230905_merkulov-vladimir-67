import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';


export default defineComponent({
  name: 'MeetupAgendaItem',

  props: { 
    agendaItem:{
      type: Array,
      required: true,
    },  
    },
    computed: {
      getTitle: function() {
        return agendaItemDefaultTitles[this.agendaItem.type];
      },
      getImageUrl: function() { 
        return '/assets/icons/icon-' + agendaItemIcons[this.agendaItem.type] + '.svg';
      }, 
    },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img v-bind:src="getImageUrl"   class="icon"  /> 
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col"> 
        <h3 class="agenda-item__title" >{{ agendaItem.title != null ? agendaItem.title : getTitle  }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span class="agenda-item__dot"> {{ agendaItem.speaker }} </span>  
          <span class="agenda-item__lang"> {{ agendaItem.language }} </span>
        </p>
        <p v-if="agendaItem.description !=null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
