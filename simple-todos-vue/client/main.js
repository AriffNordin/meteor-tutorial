import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import VueMeteorTracker from 'vue-meteor-tracker';



Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })

  Vue.use(VueMeteorTracker);
})
