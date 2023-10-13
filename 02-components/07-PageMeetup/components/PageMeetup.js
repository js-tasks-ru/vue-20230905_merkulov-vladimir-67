import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupView from './MeetupView.js';


export default defineComponent({
  name: 'PageMeetup', 
  data() {
    return {
      meetup: null, 
      error: null,
      isLoading : false,
      isError : false,
    };
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupAgendaItem,
    MeetupAgenda,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },   
  watch:{
    meetupId:{
      handler(newValue){
        this.getMeetup(newValue);
      },
      immediate: true
    }
  },
   methods: {
    async useFetchMeetupById(t){
      this.isLoading=true; 
      this.isError=false;        
       fetchMeetupById(t).then((result) => {
         this.meetup = result
         this.isLoading=false;  
             return result;
       },
       (error) =>{
         this.error = error;
         this.isError = true;
         return error;
       }); 
    },
    getMeetup(t) {
        return this.useFetchMeetupById(t)
    }
  },


  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <UiContainer v-if="!this.isLoading && !this.isError">
      <MeetupView :meetup="this.meetup" />
      </UiContainer>
      <UiContainer v-if="this.isLoading && !this.isError">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="this.isError">
        <UiAlert>{{ this.error.message }}</UiAlert>
      </UiContainer>
    </div>`,
});
