<template>
<div class="toasts" v-for="toast in toasts">
    <div class="toast toast_success" v-if = "toast.type == 'success'">
      <UiIcon class="toast__icon" icon="check-circle" />
      <span> {{ toast.message }}</span>
    </div>

    <div class="toast toast_error" v-if="toast.type == 'error'">
      <UiIcon class="toast__icon" icon="alert-circle" />
      <span> {{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToaster',

  data() {
    return {
      toasts:[]     
      }
    
  
},
methods: {
      success: function(t)  {
        this.toasts.push({'message': t, 'type': 'success', 'time': new Date()});
        setTimeout(() => this.removeToast(),5000);
        console.log(this.toasts.length);      
      },
      error: function(t) { 
        this.toasts.push({'message': t, 'type': 'error', 'time': new Date()});
        setTimeout(() => this.removeToast(),5000);
        console.log(this.toasts.length);    
      }, 
      removeToast() {
      this.toasts.shift();
    }
    },

  components: { UiIcon },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}
.toasts + .toasts {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
