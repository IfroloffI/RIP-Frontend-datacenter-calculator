import type { CartSummary, Device } from '../lib/types';
import { MOCK_CART, MOCK_DEVICES } from './mock';
import placeholder from '../assets/placeholder.jpeg';

export function resolveImageUrl(relativePath: string | null | undefined): string {
  if (!relativePath) return placeholder;
  return `${relativePath}`;
}

export async function getDevices(q = ''): Promise<Device[]> {
  try {
    const url = q ? `/api/devices?q=${encodeURIComponent(q)}` : '/api/devices';
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    return (await res.json()) as Device[];
  } catch {
    return MOCK_DEVICES.filter(d =>
      d.name.toLowerCase().includes(q.toLowerCase()) ||
      d.category.toLowerCase().includes(q.toLowerCase())
    );
  }
}

export async function getDeviceById(id: number): Promise<Device> {
  try {
    const res = await fetch(`/api/devices/${id}`);
    if (!res.ok) throw new Error();
    return (await res.json()) as Device;
  } catch {
    const mock = MOCK_DEVICES.find(d => d.id === id);
    if (mock) return mock;
    throw new Error('Not found');
  }
}

export async function getCart(): Promise<CartSummary> {
  try {
    const res = await fetch('/api/cart', {
      headers: {},
    });

    if (!res.ok) {
      throw new Error(`Cart request failed with status ${res.status}`);
    }

    const data = (await res.json()) as CartSummary;
    console.log('cart response', data);
    return data;
  } catch (e) {
    console.error('cart fallback to mock', e);
    return MOCK_CART;
  }
}