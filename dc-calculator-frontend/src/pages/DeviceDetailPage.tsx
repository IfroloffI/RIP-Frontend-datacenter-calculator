import { useState, useEffect } from 'react';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getDeviceById, resolveImageUrl } from '../modules/api';
import type { Device } from '../lib/types';
import { ROUTES, ROUTE_LABELS } from '../lib/routes';
import { useNavigate, useParams } from 'react-router-dom';
import placeholder from '../assets/placeholder.jpeg';

export function DeviceDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [device, setDevice] = useState<Device | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const load = async () => {
            setLoading(true);
            try {
                const dev = await getDeviceById(Number(id));
                setDevice(dev);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center my-5">
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    if (!device) {
        return (
            <Container>
                <Alert variant="danger">Устройство не найдено</Alert>
                <Button variant="secondary" onClick={() => navigate(ROUTES.DEVICES)}>
                    ← Назад
                </Button>
            </Container>
        );
    }

    const imgUrl = resolveImageUrl(device.image_url);

    return (
        <Container>
            <Breadcrumbs
                crumbs={[
                    { label: ROUTE_LABELS.DEVICES, path: ROUTES.DEVICES },
                    { label: device.name },
                ]}
            />

            <div className="device-detail">
                <div className="device-detail-image">
                    <img
                        src={imgUrl}
                        alt={device.name}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = placeholder;
                        }}
                    />
                </div>
                <div className="device-detail-info">
                    <h1>{device.name}</h1>
                    <p className="device-detail-category">Категория: {device.category}</p>
                    <p className="device-detail-power">Мощность: {device.power_watt} Вт</p>
                    <p className="device-detail-description">{device.description}</p>
                    <Button variant="outline-secondary" onClick={() => navigate(-1)}>
                        ← Назад
                    </Button>
                </div>
            </div>
        </Container>
    );
}