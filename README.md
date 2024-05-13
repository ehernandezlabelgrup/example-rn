
# Example React Native


Este manual está diseñado para guiar a los desarrolladores en el proceso de iniciar una aplicación móvil utilizando React Native. Antes de seguir esta guía, es esencial que hayas configurado tu entorno de desarrollo según la documentación oficial de React Native, que puedes encontrar aquí. Además, se recomienda instalar globalmente la librería react-native-asset para gestionar y adjuntar tipografías personalizadas en la aplicación.

## Inicialización del Proyecto

Primero, se crea un nuevo proyecto de React Native utilizando el comando:

```bash
npx react-native init [nombre_de_la_aplicación]
```
    
## Configuración de Herramientas de Desarrollo

Configura ESLint y Prettier para mantener un código limpio y consistente.

- ESLint

```javascript
module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-native/no-inline-styles': 0,
    semi: ['error', 'never'],
    'react/no-unstable-nested-components': ['off', {allowAsProps: true}],
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
      },
    ],
  },
}
```

- Prettier

```javascript
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  semi: false
};
```


## Librerías Recomendadas
Posterior al comando init, instala las siguientes librerías esenciales:

```bash
npm install twrnc redux react-redux react-native-tracking-transparency react-native-vector-icons react-native-responsive-fontsize react-native-device-info intl-pluralrules i18next-http-backend i18next dayjs axios @reduxjs/toolkit @react-native-async-storage/async-storage
```

```bash
cd ios
pod install
```

Estas herramientas y librerías te ayudarán a manejar el estado, estilos, internacionalización, persistencia de datos, y más.

#### 1. twrnc

**Descripción**: Es una biblioteca que permite utilizar Tailwind CSS con React Native, ofreciendo una manera eficiente y rápida de aplicar estilos utilizando clases de Tailwind.

**Uso**: Para estilizar componentes de forma consistente y rápida sin escribir CSS tradicional.

***Paso a Paso para Configurar ```twrnc``` en tu Proyecto React Native***

**Configuración de los Archivos de Colores y Estilos:**

Dentro de tu carpeta ```src/infrastructure/tailwind```, crea los siguientes archivos:

- colors.ts: Define los colores básicos de la app y otras escalas de color.

```javascript
// colors.ts
const PRIMARY = '#FCC10F'
const MEDIUM_BLACK = '#1D1D1D'

export const colors = {
  primary: {
    50: "#E3F1F0",
    500: "#538D86",
    600: "#4D8079",
    700: "#383838",
    900: "#384341"
  },
  secondary: {
    50: "#FEFFF8",
    100: "#FCFEE8",
    200: "#F7FCCA",
    500: "#E8F569",
    600: "#DBF017",
    700: "#BBCD0E"
  },
  neutral: {
    50: "#F9FAFA",
    100: "#F4F4F4",
    200: "#E9ECEF",
    500: "#999999",
    800: "#1E1E1E",
    900: "#2C2C2C"
  }
};
```

- padding.ts: Establece el padding para tener una mejor proporción de los contenedores.

```javascript
// padding.js
import { PixelRatio } from 'react-native';
export const PADDING_CONTAINER = 8 * PixelRatio.get();
```

- Archivo de Configuración de Tailwind (tailwind.config.ts):

Crea el archivo de configuración donde se especificarán los tamaños de fuente y otras configuraciones relacionadas con Tailwind.

```javascript
// tailwind.config.ts
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from './colors';
import {PADDING_CONTAINER} from './padding';

export const theme = {
  extend: {
    colors,
    fontSize: {
      xxxs: RFValue(8),
      // Agrega más tamaños según sea necesario
      '11xl': RFValue(25),
    },
    padding: {
      container: `${PADDING_CONTAINER}px`,
    }
  }
};

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: theme,
};
```

***Uso de twrnc en Componentes:***

Utiliza ```twrnc``` en tus componentes importando el archivo configurado y usando las clases de Tailwind.

```javascript
// En cualquier componente React Native
import tw from '../../../infrastructure/tailwind/tailwind.config';

const MyComponent = () => (
  <View style={tw`flex-row gap-3 items-center`}>
    {/* Contenido del componente */}
  </View>
);

export default MyComponent;
```

Esta configuración te permitirá usar Tailwind en tu proyecto de React Native de una manera estructurada y eficiente, siguiendo las prácticas recomendadas en cuanto a manejo de estilos. Para más información sobre cómo usar twrnc, puedes consultar su [documentación en GitHub](https://www.npmjs.com/package/twrnc).

#### 2. redux y react-redux

Descripción: Redux es una biblioteca para la gestión del estado de aplicaciones JavaScript. React-redux proporciona bindings de React para Redux, facilitando la integración en proyectos React Native.

Uso: Para manejar y centralizar el estado de la aplicación, facilitando el acceso y la mutación del estado desde cualquier componente.

#### 3. react-native-tracking-transparency

Descripción: Proporciona una API para solicitar permiso al usuario para rastrear su actividad en aplicaciones que utilizan identificadores de dispositivos.

Uso: Esencial para cumplir con las políticas de privacidad, especialmente en iOS, donde es obligatorio solicitar este permiso.

***Configuración de React Native Tracking Transparency***

Para utilizar la librería ```react-native-tracking-transparency``` y solicitar permiso para rastrear la actividad del usuario en dispositivos iOS, es necesario modificar el archivo ```Info.plist```. Este archivo se encuentra en el directorio ios/[nombre_app]/.

Paso a seguir:

**Modificación del archivo ```Info.plist```:**

Abre el archivo ```Info.plist``` ubicado en ```ios/[nombre_app]/```.

Añade la siguiente entrada para describir el uso de datos de seguimiento:

```bash
<key>NSUserTrackingUsageDescription</key>
<string>[nombre_app] solicita permiso para rastrear tu actividad dentro de la aplicación con el fin de personalizar tu experiencia. Utilizamos estos datos para ofrecerte recomendaciones de planes y eventos deportivos, mejorar nuestra plataforma según tus intereses y facilitar tu conexión con otros deportistas. Tu privacidad es importante para nosotros y siempre tendrás control sobre esta información.</string>
```


Esta entrada en el ```Info.plist``` es crucial porque especifica el mensaje que verán los usuarios cuando se les solicite el permiso para rastrear su actividad. Este mensaje debe ser claro y transparente, explicando por qué se necesita el permiso y cómo se utilizarán los datos. En el ejemplo proporcionado, se explica que el rastreo se utiliza para personalizar la experiencia del usuario ofreciendo recomendaciones personalizadas y mejorando la plataforma basada en sus intereses.

**Importante**

Asegúrate de que el mensaje sea específico para tu aplicación y que realmente refleje cómo se van a utilizar los datos de seguimiento. Este paso no solo es un requisito para pasar la revisión de la App Store, sino también una buena práctica para mantener la confianza de tus usuarios respetando su privacidad.

#### 4. react-native-vector-icons

**Descripción**: Es una biblioteca popular para incluir iconos vectoriales en proyectos React Native.

**Uso**: Permite utilizar una gran variedad de iconos de fuentes como FontAwesome, Ionicons, entre otros, mejorando la interfaz de usuario.

***Configuración de React Native Vector Icons***

Para hacer uso de react-native-vector-icons en tu proyecto, es necesario configurar algunos detalles específicos para cada plataforma:

**Android**

Añade la siguiente línea en tu archivo ```android/app/build.gradle``` para asegurar que las fuentes de los iconos se incluyan en el build:

**iOS**

Para iOS, necesitas actualizar el archivo ```Info.plist``` para incluir las fuentes de iconos. Edita el archivo en ```ios/[nombre_del_proyecto]/Info.plist``` y añade lo siguiente:

```bash
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>FontAwesome6_Brands.ttf</string>
    <string>FontAwesome6_Regular.ttf</string>
    <string>FontAwesome6_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
</array>
```

#### 5. react-native-responsive-fontsize

**Descripción**: Facilita la creación de tamaños de fuente que se adaptan a diferentes tamaños de pantalla.

**Uso**: Asegura que el texto se vea bien en dispositivos con diferentes resoluciones y tamaños de pantalla.

#### 6. react-native-device-info

**Descripción**: Proporciona información sobre el dispositivo del usuario, como la versión del sistema operativo, modelo, identificador único, etc.

Uso: Útil para analíticas, personalización de la experiencia del usuario o manejo de características específicas del dispositivo.

#### 7. intl-pluralrules

**Descripción**: Polyfill para la API Intl.PluralRules, que proporciona localización de números plurales.

Uso: Esencial para aplicaciones que necesitan soporte de internacionalización para manejar diferentes reglas de pluralización de texto según el idioma.

#### 8. i18next y i18next-http-backend

**Descripción**: i18next es un marco de trabajo de internacionalización para JavaScript. i18next-http-backend permite cargar recursos de traducción desde un servidor backend.

**Uso**: Facilita la traducción de tu aplicación a múltiples idiomas, mejorando el soporte para usuarios globales.

***Configuración de i18next en React Native***

**Creación del archivo de configuración de i18next (i18n.ts):**

Dentro de la carpeta ```src/infrastructure/locales/```, crea un archivo llamado ```i18n.ts```. Este archivo contendrá toda la configuración necesaria para inicializar i18next con soporte para cargar traducciones desde un backend.

```bash
// src/infrastructure/locales/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Usa Http backend para cargar traducciones
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    supportedLngs: ['en', 'es'], // Idiomas soportados
    fallbackLng: 'es', // Idioma de respaldo

    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: 'https://example.com/locales/{{lng}}', // URL de tu API
    },
    react: {
      useSuspense: false, // Desactiva Suspense para evitar warnings en React Native
    },
  });

export default i18n;
```

**Nota**: Asegúrate de reemplazar ```https://example.com/locales/{{lng}}``` con la URL real de tu backend donde se encuentran los archivos de traducción.

***Integración en el proyecto:***

En el archivo index.js (o index.tsx si usas TypeScript) que se encuentra en la raíz de tu proyecto, asegúrate de importar el módulo de i18next configurado para que se inicialice correctamente al arrancar la aplicación.

```bash
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'intl-pluralrules'; // Para soporte de pluralización en idiomas
import './src/infrastructure/locales/i18n'; // Importa la configuración de i18n

AppRegistry.registerComponent(appName, () => App);
```

**Uso de i18next en Componentes:**

Utiliza la función useTranslation de react-i18next para manejar las traducciones en tus componentes de React Native.

```bash
import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import tw from '../../../infrastructure/tailwind'; // Asegúrate de tener configurado twrnc

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={tw`text-neutral-500 mt-separator`}>
        {t('common.rules-description')} {/* Clave de traducción */}
      </Text>
    </View>
  );
};

export default MyComponent;
```

Estos pasos te permitirán implementar un sistema de internacionalización robusto en tu aplicación React Native, cargando las traducciones de forma dinámica desde un backend y facilitando la localización en múltiples idiomas.

#### 9. dayjs

Descripción: Librería ligera para manejar y formatear fechas.

Uso: Proporciona funciones para parsear, validar, manipular y mostrar fechas y horas en JavaScript, útil para cualquier función relacionada con fechas.

#### 10. axios

Descripción: Cliente HTTP basado en promesas para el navegador y node.js. Permite hacer solicitudes HTTP a servidores externos.

Uso: Utilizado para comunicarse con APIs externas, cargar datos dinámicamente, entre otros.

#### 11. @reduxjs/toolkit

Descripción: Conjunto de herramientas que simplifica la configuración y manejo de Redux, proporcionando utilidades adicionales.

Uso: Ayuda a escribir lógica de Redux de manera más eficiente y con menos código.

#### 12. @react-native-async-storage/async-storage

Descripción: Un sistema de almacenamiento local asíncrono, persistente y sin encriptar que permite guardar datos entre sesiones de la aplicación.

Uso: Ideal para guardar preferencias del usuario, datos de sesión u otra información que necesita persistir entre sesiones de la app.

Cada una de estas librerías contribuye a aspectos específicos del desarrollo, mejorando la funcionalidad, el rendimiento y la experiencia del usuario en tu aplicación React Native.

## Comenzando el Desarrollo

Una vez configurado el entorno y la estructura del proyecto, puedes comenzar a desarrollar las pantallas y componentes siguiendo las necesidades específicas de tu aplicación.

Este manual te proporciona una base sólida para comenzar el desarrollo de aplicaciones móviles con React Native, asegurando que tu proyecto esté bien organizado y preparado para escalar.
# example-rn
# example-rn
