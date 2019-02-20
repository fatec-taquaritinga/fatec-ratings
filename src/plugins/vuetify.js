import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.blueGrey.base,
    secondary: colors.red.base,
    accent: colors.orange.base,
    error: colors.deepOrange.base,
    warning: colors.amber.base,
    info: colors.teal.base,
    success: colors.green.base
  }
})
