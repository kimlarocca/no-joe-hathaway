// link to Aura tokens to reference
//https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/

import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },
    borderRadius: {
      lg: "24px",
    },
    formField: {
      paddingX: "24px",
      paddingY: ".5rem",
      borderRadius: "{border.radius.lg}",
      focusRing: {
        width: "0",
        style: "none",
        color: "transparent",
        offset: "0",
        shadow: "none",
      },
      transitionDuration: "{transition.duration}",
    },
    colorScheme: {
      light: {
        text: {
          color: "#000000",
        },
        content: {
          background: '#ffffff', // light mode background color
        },
        primary: {
          color: '{sky.800}',
          inverseColor: '{surface.0}',
          hoverColor: '{sky.700}',
          activeColor: '{sky.500}'
        },
        highlight: {
          background: '{sky.50}',
        },
      },
      dark: {
        text: {
          color: '{surface.0}',
        },
        content: {
          background: '#000000', // dark mode background color
        },
        primary: {
          color: '{sky.500}',
          inverseColor: '#000000',
          hoverColor: '{sky.300}',
          activeColor: '{sky.300}'
        },
        highlight: {
          background: '{surface.950}',
        },
      }
    },
  },
  button: {
    colorScheme: {
      light: {
        outlined: {
          primary: {
            hoverBackground: '{red.50}',
            activeBackground: '{red.100}',
            borderColor: '{red.200}',
            color: '{red.500}'
          },
        },
      },
    },
  },
  components: {
  }
})

export default defineNuxtConfig({
  compatibilityDate: '2025-10-26',
  devtools: { enabled: true },
  // modules: ['@primevue/nuxt-module', '@nuxtjs/supabase'],
  modules: ['@primevue/nuxt-module'],
  // supabase: {
  //   key: 'sb_publishable_otwK3d25ys4EnLvnMmQCoQ_kvEEXS5u',
  //   url: 'https://fghyfvvnbgipfkrxjwia.supabase.co',
  //   redirect: false,
  // },

  css: [
    '~/assets/css/tailwind.css',
    'primeicons/primeicons.css',
    '~/assets/scss/main.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: false
        }
      }
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: 'No Joe Hathaway!', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#0a84ff' },
        { name: 'theme-color', content: '#0a84ff' }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff3904' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        }
      ],
      // script: [
      //   { src: 'https://www.googletagmanager.com/gtag/js?id=G-7GDC05EZKE' }
      // ]
    }
  },

  runtimeConfig: {
    public: {
      environment: 'prod',
      gtagId: 'G-P2SSP7JDLC',
      // supabaseKey: 'sb_publishable_otwK3d25ys4EnLvnMmQCoQ_kvEEXS5u',
      // supabaseUrl: 'https://fghyfvvnbgipfkrxjwia.supabase.co',
    }
  }
})