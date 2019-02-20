<script>
import LogoFatec from '../components/LogoFatec.vue'

export default {
  name: 'Login',
  components: { LogoFatec },
  data: () => ({
    username: '',
    password: '',
    showPassword: false,
    error: false,
    rules: {
      required: value => !!value || 'Campo obrigatório.'
    }
  }),
  computed: {
    formValid () {
      return this.username && this.password
    }
  },
  methods: {
    login () {
      this.error = false

      if (this.username === 'admin' && this.password === '123') {
        localStorage['user'] = { username: this.username, loginDate: new Date() }
        this.$router.push(this.$route.query.redirect || '/')
      } else this.error = true
    }
  }
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary" class="pa-2 pt-3 pb-3">
              <logo-fatec dark />
              <v-spacer />
              <span class="subheading blue-grey--text text--lighten-5">Homenageados</span>
            </v-toolbar>
            <v-card-text>
              <p class="text-xs-center">
                Realize o acesso para poder escolher professores e
                funcionários que merecem seu reconhecimento.
              </p>
              <v-form>
                <v-text-field id="login" type="text" v-model="username" browser-autocomplete="off" :rules="[rules.required]"
                  prepend-icon="person" label="Usuário" hint="Seu usuário é seu número de RA"
                  @input="error = false" @keypress.enter="login" />
                <v-text-field id="password" v-model="password" browser-autocomplete="off" :rules="[rules.required]"
                  prepend-icon="lock" label="Senha" hint="Utilize a mesma senha usada nos computadores da faculdade"
                  :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                  @click:append="showPassword = !showPassword" @input="error = false" @keypress.enter="login" />
              </v-form>
            </v-card-text>
            <v-card-actions class="pa-3">
              <v-spacer />
              <v-btn color="primary" @click="login" :disabled="!formValid">Entrar</v-btn>
            </v-card-actions>

            <v-alert type="error" v-model="error">
              As credenciais fornecidas não são válidas.<br>
              Confira seu usuário e senha e tente novamente.
            </v-alert>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
