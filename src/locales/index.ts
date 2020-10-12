// Native
import { initReactI18next } from 'react-i18next'
import 'moment/locale/pt-br'
import i18next from 'i18next'
import moment from 'moment'

// Private
import PT_BR from './PT_BR'

i18next.use(initReactI18next).init({
  resources: { 'pt-BR': PT_BR },
  fallbackLng: 'pt-BR',
  lng: 'pt-BR',
  defaultNS: 'Glossary',
  debug: false,
  interpolation: {
    format(value, format, lng) {
      if (value instanceof Date || moment.isMoment(value)) {
        const momentInstance = moment(value)
        if (lng) momentInstance.locale(lng.toLowerCase())
        return momentInstance.format(format)
      }

      return value
    },
  },
})

i18next.on('languageChanged', (lng) => {
  if (lng) moment.locale(lng.toLowerCase())
})

export default i18next
