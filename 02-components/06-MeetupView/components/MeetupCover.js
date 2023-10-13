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
  methods: {
    getImageUrl(t) { 
      if ( `${t}` != 'undefined' ){
        return '--bg-url: url(' + `${t}` + ')';
      } else {
        return  undefined;
      }
    },  

},


  template: `

   <div class="meetup-cover" :style="getImageUrl(\`\${image}\`)" >
  <!-- <div class="meetup-cover" v-if="image != null" :style="getImageUrl(\`\${image}\`)" > -->
        <!-- <div class="meetup-cover" style="--bg-url: url('https://course-vue.javascript.ru/api/images/2')" class=image> -->
        <!-- Ссылка выше - пример верстки при наличии изображения, а не изображение по умолчанию. -->
        <!-- Изображение по умолчанию уже есть в стилях. Для его вывода достаточно не добавлять никаких стилей. -->
        <h1 class="meetup-cover__title">{{ title }} </h1>
        
 <!--   </div>,-->  

<!--    <div class="meetup-cover" v-else > -->
<!--        <h1 class="meetup-cover__title">{{ title }} </h1>    -->  
   </div>`, 
});
