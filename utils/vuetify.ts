import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'
import { vuetifyTheme } from './vuetify.theme'
import { mdiChevronDown, mdiFileOutline } from '@mdi/js'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'vuetifyTheme',
    themes: {
      vuetifyTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      chevronDown: mdiChevronDown,
      fileOutline: mdiFileOutline
    },
    sets: {
      mdi
    }
  }
})

export default vuetify
