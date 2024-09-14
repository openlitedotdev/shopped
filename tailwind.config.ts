import type { Config } from 'tailwindcss'
import { openui } from '@openlite/ui/tailwind'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@openlite/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [openui()],
} satisfies Config
