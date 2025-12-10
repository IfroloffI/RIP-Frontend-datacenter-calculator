import type { CartSummary, Device } from '../lib/types';

export const MOCK_DEVICES: Device[] = [
  {
    id: 1,
    name: "Сервер Dell PowerEdge R750",
    category: "Сервер",
    description: "2U сервер, 2x Intel Xeon Silver 4310, 64GB RAM",
    power_watt: 850,
    image_url: "dell-r760.png",
  },
  {
    id: 2,
    name: "Коммутатор Dell Nexus 93180YC-EX",
    category: "Сеть",
    description: "48 портов 10/25GbE, 6 портов 40/100GbE",
    power_watt: 420,
    image_url: "dell-n2024.png",
  },
  {
    id: 3,
    name: "СХД Dell EMC PowerStore 500T",
    category: "СХД",
    description: "Гибридное хранилище до 2PB",
    power_watt: 1200,
    image_url: "dell-me5024.png",
  },
];

export const MOCK_CART: CartSummary = {
  calculation_id: -1,
  total_items: 0,
};