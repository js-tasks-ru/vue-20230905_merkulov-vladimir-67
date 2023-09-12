 import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const vm = createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      action:''
     };
  },

  computed: {
    total () {
      if(this.action ==="sum"){
        return this.num1 + this.num2;
      }
      if(this.action ==="subtract"){
        return this.num1 - this.num2;
      }
      if(this.action ==="multiply"){
        return this.num1 * this.num2;
      }
      if(this.action ==="divide"){
        return this.num1/this.num2;
      }
      return 0;
    }
  }
}).mount('#app');