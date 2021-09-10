import users from './img/users.svg';
import watch from './img/watch.svg';
import sliders from './img/sliders.svg';

export const client_id: string = 'M2ZlNzk3ZDYzM2ZhOWQ1Mjg3YTZlNzk1';

export const client_secret: string = 'YTA3Njg3OGM2MzRkYmFlNzk0YmEwNDZmM2I1MzFkY2VjMzhk';

export const AUTH_API: string = 'https://next-mouse.dev.with-datafire.io/test_auth';

export const MENU_ITEMS: {name: string, path: string, img: string}[] = [
  {
    name: 'Пользователи',
    path: '/users',
    img: users
  },
  {
    name: 'Учёт времени',
    path: '/worktime',
    img: watch
  },
  {
    name: 'Настройки',
    path: '/settings',
    img: sliders
  }
];
