 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const vm = createApp({
  data() {
    return {
      meetupId: null,
      title: null,
      MEETUP_TITLE: null
     };
  },

  watch:{
    meetupId(newValue) {
      console.log(newValue);
      this.MEETUP_TITLE= fetchMeetupById(newValue);
      
    },
  },
  method:{
    
  }

}).mount('#app');