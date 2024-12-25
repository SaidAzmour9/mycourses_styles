/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
    }
    },
    extend: {
      backgroundImage: {
        'right-content': "url('/src/imags/icons/Right-Content.png')",
        'left-content': "url('/src/imags/icons/VectorHeader.png')",
      },    
      colors: {
        primary70: '#3DCBB1',
        secondary: '#FFD130',
        primary40: '#EC9792',
        primary60: '#E56D67',
        primary80: '#C42A22',
        primary100: '#98211A5',
        black90 : '#1B1B1BE5',
        black60 : '#1B1B1B99',
        black30 : '#1B1B1B1A',
        white90: '#F9F9F9E5',
        white60: '#F9F9F999',
        white30: '#F9F9F94D',
        error: '#FE416D',
        warning: '#A04AE3',
        success: '#00DDC0',
        primary: '#00DDC0',

        },
      fontSize: {
        xs: ['6px',{lineHeight: '9px'}],
        sm: ['8px',{lineHeight: '12px'}],
        base: ['10px',{lineHeight: '15px'}],
        md: ['14px',{lineHeight: '18px'}],
        lg: ['16px',{lineHeight: '24px'}],
        xl: ['20px',{lineHeight: '30px'}],
        '2xl': ['24px',{lineHeight: '36px'}],
        '3xl': ['32px',{lineHeight: '48px'}],
        '4xl': ['40px',{lineHeight: '60px'}],
        '5xl': ['48px',{lineHeight: '72px'}],
        '6xl': ['61px',{lineHeight: '92px'}],
      },
      fontFamily: {
        gilroy: ['gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  
]
}

