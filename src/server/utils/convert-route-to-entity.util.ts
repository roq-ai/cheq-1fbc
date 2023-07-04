const mapping: Record<string, string> = {
  brands: 'brand',
  networks: 'network',
  retailers: 'retailer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
