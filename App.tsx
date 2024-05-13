import {Text, View} from 'react-native'
import React from 'react'
import {useTranslation} from 'react-i18next'
import tw from './src/infraestructure/tailwind'

const App = () => {
  const {t} = useTranslation()
  return (
    <View style={tw`flex-row gap-3 items-center`}>
      <Text style={tw`text-neutral-500 mt-separator`}>
        {t('common.rules-description')} {/* Clave de traducción */}
      </Text>
    </View>
  )
}

export default App
