import { Container, Spinner, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ROUTE_LABELS } from "../lib/routes";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DeviceCard } from "../components/DeviceCard";
import type { Device } from "../lib/types";
import { getCart, getDevices } from "../modules/api";
import basketIcon from "../assets/basket.png";
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, clearQuery } from '../features/filter/filterSlice';
import type { RootState } from '../store';

export function DevicesPage() {
    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.filter.query);
    const [devices, setDevices] = useState<Device[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadDevices(query);
    }, []);

    const loadDevices = async (searchQuery = '') => {
        setLoading(true);
        try {
            const data = await getDevices(searchQuery.trim());
            setDevices(data);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e?: React.FormEvent) => {
        e?.preventDefault();
        loadDevices(query);
    };

    const handleClear = () => {
        dispatch(clearQuery());
        loadDevices('');
    };

    const handleChange = (val: string) => {
        dispatch(setQuery(val));
    };

    const handleCartClick = async () => {
        try {
            const data = await getCart();
            console.log('cart data in DevicesPage', data);
        } catch (e) {
            console.error('failed to load cart', e);
        }
    };

    return (
        <Container>
            <Breadcrumbs crumbs={[{ label: ROUTE_LABELS.DEVICES }]} />

            <Row className="align-items-center justify-content-center mb-4">
                <Col xs={12} md="auto" className="mb-2 mb-md-0">
                    <h1 className="page-title mb-4">Список оборудования</h1>
                </Col>
            </Row>

            <Form
                className="search-form mb-4"
                onSubmit={handleSearch}
            >
                <div className="d-grid gap-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <Form.Control
                        type="text"
                        value={query}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Поиск по названию или категории..."
                    />
                    <Button type="submit" variant="primary">
                        Найти
                    </Button>
                    {query && (
                        <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={handleClear}
                        >
                            Очистить
                        </Button>
                    )}
                </div>
            </Form>

            <div
                className="position-fixed"
                style={{
                    bottom: '16px',
                    right: '16px',
                    zIndex: 1030,
                }}
            >
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                        width: '128px',
                        height: '128px',
                        borderRadius: '50%',
                        backgroundColor: '#0072ce',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                    onClick={handleCartClick}
                >
                    <Image
                        src={basketIcon}
                        alt="Корзина"
                        width={64}
                        height={64}
                        className="text-white"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: '1.5rem', padding: '4px 6px' }}
                    >
                        0
                    </span>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : devices.length > 0 ? (
                <div className="devices-grid">
                    {devices.map((device) => (
                        <DeviceCard
                            key={device.id}
                            device={device}
                            onDetailsClick={() => navigate(`/devices/${device.id}`)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-5">
                    <p>Оборудование не найдено</p>
                    <Button variant="outline-primary" onClick={handleClear}>
                        Сбросить фильтры
                    </Button>
                </div>
            )}
        </Container>
    );
}