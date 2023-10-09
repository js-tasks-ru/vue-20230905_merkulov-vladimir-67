import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';


export default defineComponent({
  name: 'MeetupAgendaItem',

  props: { 
    agendaItem:{
     // type: Array
    },  
    },
    methods: {
        getImageUrl(t) { 
        return '/assets/icons/icon-'.concat(agendaItemIcons[`${t}`], '.svg');
        },  
        getTitle(t) { 
      //    console.log('ciytr', agendaItemDefaultTitles[`${t}`]);
          return agendaItemDefaultTitles[`${t}`];
        },  

    },


  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img v-bind:src="getImageUrl(\`\${agendaItem.type}\`)"   class="icon"  /> 
     <!--   <img src="/assets/icons/icon-key.svg" class="icon" alt="key" /> -->
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col"> 
        <h3 class="agenda-item__title" v-if="agendaItem.title != null">{{ agendaItem.title }}</h3>
        <h3 class="agenda-item__title" v-else > {{ getTitle(agendaItem.type) }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <!--  <span>{{ agendaItem.speaker }}</span> -->
           <span class="agenda-item__dot"> {{ agendaItem.speaker }} </span>  
          <span class="agenda-item__lang"> {{ agendaItem.language }} </span>
        </p>
        <p v-if="agendaItem.description !=null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
