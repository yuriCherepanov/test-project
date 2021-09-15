import users from './img/users.svg';
import watch from './img/watch.svg';
import sliders from './img/sliders.svg';

export const client_id: string = 'M2ZlNzk3ZDYzM2ZhOWQ1Mjg3YTZlNzk1';

export const client_secret: string = 'YTA3Njg3OGM2MzRkYmFlNzk0YmEwNDZmM2I1MzFkY2VjMzhk';

export const AUTH_API_URL: string = `https://api.personio.de/v1/auth?client_id=${client_id}&client_secret=${client_secret}`;

export const EMPLOYEES_API_URL: string = 'https://api.personio.de/v1/company/employees';

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

export const fakeEmployeesData = [
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  },
  {
    id: 4805056,
    isClosed: false,
    name: 'Александров Иван Иванович',
    login: 'aleksandrovii',
    role: 'Старший аналитик',
    access: 'Визуализация данных, Просмотр аналитической информации'
  }
];
