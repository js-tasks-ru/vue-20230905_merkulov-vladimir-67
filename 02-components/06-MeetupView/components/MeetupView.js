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

  computed: {
    // description() { 
    //     return this.meetups[this.selectedMeetup].description;
    // },
  },

  template: `
    <div >
      <!-- meetup cover-->
      <MeetupCover :title="this.meetup.title" :image="this.meetup.image"/>
      <!-- <MeetupCover :title="meetupWithoutImage.title" :image="meetupWithoutImage.image" />-->

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <!--  <h3>Описание</h3>-->
            <!-- meetup description -->
            <h3><MeetupDescription :description="meetup.description"/></h3>
               {{ meetup_item }}
            <h3>Программа</h3>
            <!-- meetup agenda -->              
            <div v-if ="meetup.agenda === null || meetup.agenda === ''"><UiAlert>Программа пока пуста...</UiAlert></div>
            <div v-else><MeetupAgenda :agenda="meetup.agenda" /></div>   
          </div>
          <div class="meetup__aside">
        
            <!-- meetup info -->
            <MeetupInfo
            :organizer="meetup.organizer"
            :place="meetup.place"
            :date="meetup.date" 
          />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
