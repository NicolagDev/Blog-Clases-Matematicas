import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C2B39',
        paper: '#FAFAF8',
        rule: '#D8DCE1',
        accent: '#2F6F6D',
        beginner: '#3F7D4F',
        intermediate: '#B4791F',
        advanced: '#B23A48',
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-quotes': theme('colors.ink'),
            maxWidth: 'none',
            a: { textDecoration: 'underline', fontWeight: '500' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
