<script>
import { Fragment } from 'vue-fragment'
import LogoFatec from '../components/LogoFatec.vue'
import ChoosenPerson from '../components/ChoosenPerson.vue'

export default {
  name: 'Home',
  components: { Fragment, LogoFatec, ChoosenPerson },
  methods: {
    logout () {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <fragment>
    <v-toolbar app color="primary">
      <v-toolbar-title>
        <v-layout row align-center>
          <logo-fatec dark height="38" />
          <span class="body-2 ml-3 blue-grey--text text--lighten-5">Homenageados</span>
        </v-layout>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="logout" title="Encerrar acesso">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container grid-list-lg>
        <v-layout row wrap justify-center>
          <choosen-person :category="1" name="Erick Eduardo Petrucelli" when="10/02/2019" />
          <choosen-person :category="2" name="Fábio Bento Takeda" when="05/08/2018" />
          <choosen-person :category="3" name="Lúcia Elena Pinsetta" when="20/12/2018" gender="f" />
        </v-layout>
      </v-container>
    </v-content>
  </fragment>
</template>
