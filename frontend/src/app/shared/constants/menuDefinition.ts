export const menuDefinitions = [
  {
    title: 'Logowanie',
    order: 3,
    authorized: false,
    url: '#',
    authMenu: true,
  },
  {
    title: 'Rejestracja',
    order: 3,
    authorized: true,
    url: '#',
    authMenu: true,
  },
  {
    title: 'Wyloguj',
    order: 3,
    authorized: true,
    url: '#',
    authMenu: true,
  },
  {
    title: 'Aktualne Nawyki',
    order: 1,
    authorized: true,
    url: 'current-habits',
    authMenu: false,
  },
  {
    title: 'Galeria Zwycięstw',
    order: 2,
    authorized: true,
    url: '#',
    authMenu: false,
  },
];

export const getMenuDefinitions = (): any => {
  return menuDefinitions.sort((a, b) => {
    return a.order - b.order;
  });
};
