export interface Device {
  id: number;
  name: string;
  category: string;
  description: string;
  power_watt: number;
  image_url: string;
}

export interface CartSummary {
  calculation_id: number;
  total_items: number;
}