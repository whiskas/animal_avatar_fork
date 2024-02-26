import { Shape } from './types'

export const brows: Shape[] = [
  (_color) => `
    <ellipse fill="#15212a" cx="348" cy="190.6" rx="8.3" ry="19.4" transform="rotate(-57.5 348 190.6)"/>
    <ellipse fill="#15212a" cx="152" cy="205.1" rx="19.4" ry="8.3" transform="rotate(-32.5 152 205)"/>
  `,
  (_color) => `
    <path fill="#15212a" d="M333 196.7h-.4l-27.6-2.1a5 5 0 01.8-10l27.5 2a5 5 0 01-.3 10zM166.6 196.7h.4l27.5-2.1a5 5 0 00-.7-10l-27.6 2a5 5 0 00.4 10z"/>
  `,
  (_color) => `
    <path fill="#15212a" d="M139.8 203c-1 0-2-.3-2.8-.9a5 5 0 01-1.3-7c10.5-15.5 25.8-20.4 45.7-14.5a5 5 0 11-2.9 9.6c-15.6-4.7-26.6-1.3-34.5 10.6a5 5 0 01-4.2 2.2zM361.4 203a5 5 0 01-4.2-2.2c-8-12-19-15.3-34.5-10.6a5 5 0 11-2.9-9.6c19.9-6 35.2-1 45.7 14.6a5 5 0 01-4.1 7.8z"/>
  `,
]
