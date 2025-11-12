import { Button, Container, Spinner, Row, Col, Card } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ROUTE_LABELS } from "../lib/routes";
import { SearchInput } from "../components/SearchInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DeviceCard } from "../components/DeviceCard";
import type { Device } from "../lib/types";
import { getDevices } from "../modules/api";

export function DevicesPage() {
    const [query, setQuery] = useState('');
    const [devices, setDevices] = useState<Device[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loadDevices = async (searchQuery = '') => {
        setLoading(true);
        try {
            const data = await getDevices(searchQuery.trim());
            setDevices(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadDevices();
    }, []);

    const handleSearch = () => {
        loadDevices(query);
    };

    const handleClear = () => {
        setQuery('');
        loadDevices('');
    };

    return (
        <Container>
            <Breadcrumbs crumbs={[{ label: ROUTE_LABELS.DEVICES }]} />

            <Row className="mb-4">
                <Col>
                    <h1 className="page-title">Список оборудования</h1>
                </Col>
                <Col xs={12}>
                    <SearchInput
                        value={query}
                        onChange={setQuery}
                        onSubmit={handleSearch}
                        onClear={handleClear}
                    />
                </Col>
            </Row>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : devices.length > 0 ? (
                <Row className="g-3">
                    {devices.map((device) => (
                        <Col key={device.id} xs={18} sm={9} lg={6} xl={4} className="mb-4">
                            <DeviceCard
                                device={device}
                                onDetailsClick={() => navigate(`/devices/${device.id}`)}
                            />
                        </Col>
                    ))}
                </Row>
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