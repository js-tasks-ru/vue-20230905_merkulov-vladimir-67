import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupInfo from './MeetupInfo.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
   
  },

  template: `
    <div >
      <!-- meetup cover-->
      <MeetupCover :title="this.meetup.title" :image="this.meetup.image"/>
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <!--  <h3>Описание</h3>-->
            <!-- meetup description -->
            <h3><MeetupDescription :description="this.meetup.description"/></h3>
               {{ meetup_item }}
            <h3>Программа</h3>
            <!-- meetup agenda -->              
            <div v-if ="this.meetup.agenda === null || this.meetup.agenda === ''"><UiAlert>Программа пока пуста...</UiAlert></div>
            <div v-else><MeetupAgenda :agenda="this.meetup.agenda" /></div>   
          </div>
          <div class="meetup__aside">
        
            <!-- meetup info -->
            <MeetupInfo
            :organizer="this.meetup.organizer"
            :place="this.meetup.place"
            :date="this.meetup.date" 
          />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
