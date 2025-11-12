import { Card, Button } from 'react-bootstrap';
import { resolveImageUrl } from '../modules/api';
import type { Device } from '../lib/types';
import placeholder from '../assets/placeholder.jpeg';

interface DeviceCardProps {
    device: Device;
    onDetailsClick: () => void;
}

export function DeviceCard({ device, onDetailsClick }: DeviceCardProps) {
    const imgUrl = resolveImageUrl(device.image_url);

    return (
        <Card className="h-100 shadow-sm">
            <div className="d-flex justify-content-center align-items-center p-4" style={{ height: '250px' }}>
                <Card.Img
                    variant="top"
                    src={imgUrl}
                    alt={device.name}
                    style={{
                        objectFit: 'contain',
                        height: '100%',
                        width: '100%',
                        maxHeight: '300px'
                    }}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = placeholder;
                    }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5 fw-bold">{device.name}</Card.Title>
                <Card.Text className="text-muted mb-3 fs-6">
                    Мощность: <strong>{device.power_watt} Вт</strong>
                </Card.Text>
                <Button
                    variant="outline-primary"
                    className="mt-auto"
                    onClick={onDetailsClick}
                    size="lg"
                >
                    Подробнее
                </Button>
            </Card.Body>
        </Card>
    );
}