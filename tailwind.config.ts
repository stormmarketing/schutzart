import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#3f4f32',
        moss: '#64734a',
        cream: '#f7f2e9',
        linen: '#fbf8f1',
        bark: '#2b241f'
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
