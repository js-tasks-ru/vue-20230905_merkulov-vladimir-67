import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      required: false,      
    },
    image: {
      type: String,
      required: false,
    }
  },
  computed: {
    getImageUrl: function() { 
    if ( this.image != undefined ){
      return '--bg-url: url(' + this.image + ')';
    } else {
      return  undefined;
    }
    }, 
  },



  template: `

        <div class="meetup-cover" :style="getImageUrl" >
         <!-- <div class="meetup-cover" style="--bg-url: url('https://course-vue.javascript.ru/api/images/2')" class=image> -->
        <!-- Ссылка выше - пример верстки при наличии изображения, а не изображение по умолчанию. -->
        <!-- Изображение по умолчанию уже есть в стилях. Для его вывода достаточно не добавлять никаких стилей. -->
        <h1 class="meetup-cover__title">{{ title }} </h1>
        

   </div>`, 
});
