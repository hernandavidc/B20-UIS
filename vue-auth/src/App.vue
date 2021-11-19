<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <guest-nav v-if="!isLogged"></guest-nav>
        <logged-nav v-else></logged-nav>
      </div>

      <router-view/>
    </b-container>


    <div class="position-absolute h-100 w-100 d-flex justify-content-center align-items-center"
      style="z-index:10000;top:0; left: 0; background: #0000004f;"
      v-if="loading"
    >
      <b-spinner style="width: 5rem; height:5rem;" variant="primary" type="grow"></b-spinner>
    </div>
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'
import { mapState } from 'vuex';

import GuestNav from '@/components/layout/GuestNav.vue'
import LoggedNav from '@/components/layout/LoggedNav.vue'

export default {
  name: "App",
  components: {
    BSpinner, GuestNav, LoggedNav
  },
  computed:{
    ...mapState(['loading']),
    ...mapState('auth', ['isLogged'])
  }
}
</script>
