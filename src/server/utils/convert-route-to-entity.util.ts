const mapping: Record<string, string> = {
  menus: 'menu',
  orders: 'order',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
