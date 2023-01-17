export const menuDefinitions = [
  { title: 'Zaloguj', order: 3, authorized: false, url: '#' },
  { title: 'Wyloguj', order: 3, authorized: true, url: '#' },
  { title: 'Aktualne Nawyki', order: 1, authorized: true, url: '#' },
  { title: 'Galeria Zwycięstw', order: 2, authorized: true, url: '#' },
];

export const getMenuDefinitions = (): any => {
  return menuDefinitions.sort((a, b) => {
    return a.order - b.order;
  });
};
