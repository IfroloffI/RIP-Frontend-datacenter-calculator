export const ROUTES = {
  HOME: '/',
  DEVICES: '/devices',
  DEVICE_DETAIL: '/devices/:id',
} as const;

export type RouteKey = keyof typeof ROUTES;

export const ROUTE_LABELS: Record<RouteKey, string> = {
  HOME: 'Главная',
  DEVICES: 'Оборудование',
  DEVICE_DETAIL: 'Устройство',
};