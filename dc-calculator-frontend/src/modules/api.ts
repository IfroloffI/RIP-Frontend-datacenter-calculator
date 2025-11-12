import type { Device } from '../lib/types';
import { MOCK_DEVICES } from './mock';
import placeholder from '../assets/placeholder.jpeg';

export const MINIO_URL = 'http://localhost:8050';

export function resolveImageUrl(relativePath: string | null | undefined): string {
  if (!relativePath) return placeholder;
  return `${MINIO_URL}/${relativePath}`;
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