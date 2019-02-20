<script>
export default {
  name: 'ChoosenPerson',
  props: {
    category: Number,
    name: String,
    gender: {
      type: String,
      default: 'm',
      validator: value => ['m', 'f'].includes(value)
    },
    when: String
  }
}
</script>

<template>
  <v-flex xs12 sm10 md8 lg6 class="ma-2">
    <v-card color="blue-grey darken-3" class="white--text">
      <v-layout justify-start class="pl-4 pr-4 pt-2 pb-2">
        <v-flex shrink>
          <v-avatar size="120">
            <img :src="require(`../assets/persons/${ name }.jpg`)" />
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-card-title primary-title>
            <div>
              <div v-if="category === 1 || category === 2">
                <span v-if="gender === 'm'">Professor</span>
                <span v-else>Professora</span>
              </div>
              <div v-else>
                <span v-if="gender === 'm'">Funcionário</span>
                <span v-else>Funcionária</span>
              </div>

              <div class="headline">{{ name }}</div>

              <div class="body-2 blue-grey--text text--lighten-4">
                <v-icon class="amber--text subheading mr-1" style="vertical-align: top">star</v-icon>

                <template v-if="category === 1">
                  <span v-if="gender === 'm'">Mais Querido pelos Alunos</span>
                  <span v-else>Mais Querida pelos Alunos</span>
                </template>
                <template v-else-if="category === 2">
                  <span>Domina Plenamente os Conteúdos</span>
                </template>
                <template v-else-if="category === 3">
                  <span>Trabalha com Dedicação</span>
                </template>
              </div>

              <div>
                <span class="caption blue-grey--text text--lighten-3">Sua escolha desde {{ when }}</span>
              </div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3 primary darken-3">
        <v-spacer />
        <v-btn flat color="primary lighten-2">Modificar Escolha</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
