import { Container, Row, Col, Card } from 'react-bootstrap';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaDollarSign, FaSeedling, FaBolt } from 'react-icons/fa';

export function HomePage() {
    return (
        <Container>
            <Breadcrumbs crumbs={[]} />

            <section className="text-center py-5 mb-5">
                <h1 className="display-4 fw-bold text-primary">Калькулятор мощности дата-центра</h1>
                <p className="lead text-muted mt-3">
                    Точный расчёт энергопотребления современного ЦОД с учётом IT-оборудования и инфраструктуры
                </p>
            </section>

            <section className="mb-5 py-4 rounded-3">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="h3 mb-4">Что такое дата-центр?</h2>
                            <p className="mb-3">
                                Дата-центр (ЦОД) — это специализированное помещение, оснащённое серверами, системами хранения данных,
                                сетевым оборудованием и инфраструктурой для их бесперебойной работы: охлаждением, электропитанием,
                                системами безопасности и мониторинга.
                            </p>
                            <p className="mb-3">
                                Энергопотребление ЦОД продолжает стремительно расти: по прогнозам BloombergNEF, к 2025 году
                                дата-центры будут потреблять ~2.5–3% мирового электричества.
                            </p>
                            <p className="mb-3">
                                Рост искусственного интеллекта и облачных вычислений увеличение энергозатрат на 20–30% ежегодно.
                            </p>
                            <p className="mb-0">
                                <strong>Эффективное проектирование — ключ к устойчивому развитию.</strong>
                            </p>
                        </Col>
                        <Col lg={6} className="text-center mt-4 mt-lg-0">
                            <img
                                src="/src/assets/dc-hero.avif"
                                alt="Серверная стойка в дата-центре"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mb-5">
                <h2 className="h3 text-center mb-4">PUE — главный показатель эффективности</h2>
                <Card className="bg-light p-4 mb-4">
                    <Card.Body>
                        <Card.Title className="h5">Power Usage Effectiveness (PUE)</Card.Title>
                        <p>
                            PUE = <strong>Общая мощность ЦОД</strong> / <strong>Мощность IT-оборудования</strong>
                        </p>
                        <ul>
                            <li><strong>PUE = 1.0</strong> — идеал (все 100% энергии — на серверы)</li>
                            <li><strong>PUE 1.1–1.3</strong> — передовые ЦОД (Google, Amazon)</li>
                            <li><strong>PUE 1.4–1.8</strong> — средний уровень</li>
                            <li><strong>PUE {'>'} 2.0</strong> — устаревшие объекты</li>
                        </ul>
                        <p className="mb-0">
                            Пример: если серверы потребляют 100 кВт, а вентиляция и ИБП — ещё 40 кВт, то PUE = 140 / 100 = <strong>1.4</strong>.
                        </p>
                    </Card.Body>
                </Card>
            </section>

            <section className="mb-5">
                <h2 className="h3 text-center mb-4">Зачем считать мощность?</h2>
                <Row>
                    <Col md={4} className="text-center">
                        <Card className="h-100 p-3">
                            <div className="mb-3">
                                <FaDollarSign size={48} color="#0072ce" />
                            </div>
                            <Card.Title className="h5">Экономия</Card.Title>
                            <Card.Text>
                                Точное прогнозирование нагрузки помогает оптимизировать закупку ИБП, кондиционеров, кабелей —
                                сократить CapEx на 15–30%.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="text-center">
                        <Card className="h-100 p-3">
                            <div className="mb-3">
                                <FaSeedling size={48} color="#198754" />
                            </div>
                            <Card.Title className="h5">Экология</Card.Title>
                            <Card.Text>
                                1% снижения PUE в крупном ЦОД даёт экономию до 5 000 МВт·ч/год — это питание 1 200 домов.
                                Углеродный след — наша ответственность.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="text-center">
                        <Card className="h-100 p-3">
                            <div className="mb-3">
                                <FaBolt size={48} color="#ffc107" />
                            </div>
                            <Card.Title className="h5">Надёжность</Card.Title>
                            <Card.Text>
                                Перегрузка электросетей — главная причина простоев. Расчёт позволяет избежать «узких мест»
                                на этапе проектирования.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="mb-5 text-center">
                <h2 className="h3 mb-4">Как работает калькулятор?</h2>
                <div className="d-inline-block text-start">
                    <ol className="fs-5">
                        <li>Выберите оборудование из каталога</li>
                        <li>Укажите количество единиц каждого типа</li>
                        <li>Задайте параметры ЦОД (PUE, название)</li>
                        <li>Модератор выполняет расчёт и завершает заявку</li>
                    </ol>
                </div>
            </section>

            <section className="text-center py-4 mb-5">
                <p className="lead">Готовы начать расчёт?</p>
                <a href="/devices" className="btn btn-primary btn-lg">
                    Перейти к каталогу оборудования →
                </a>
            </section>

            <hr className="my-5" />
            <h2 className="h4 text-muted text-center mb-4">Интерфейс расчёта (пример)</h2>
            <section className="calculation-section mb-5">
                <h3 className="page-title text-center">Текущий расчёт</h3>

                <div className="top-thirds">
                    <div className="third">
                        <h4 className="section-label">Параметры дата-центра</h4>
                        <div className="input-group">
                            <label htmlFor="dc-name">Название дата-центра</label>
                            <input type="text" id="dc-name" defaultValue="Мой ЦОД" disabled />
                        </div>
                        <div className="input-group">
                            <label htmlFor="dc-description">Описание</label>
                            <textarea id="dc-description" defaultValue="Тестовый дата-центр" disabled />
                        </div>
                        <div className="input-group">
                            <label htmlFor="dc-pue">Коэффициент PUE*</label>
                            <input type="number" id="dc-pue" step="0.01" defaultValue="1.6" min="1.0" disabled />
                        </div>
                        <p className="text-muted small mt-2">
                            *PUE вводится после добавления оборудования в заявку
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div className="third">
                        <h4 className="section-label">Итоговые показатели</h4>
                        <div className="result-item">
                            <span className="result-label">Итоговая мощность дата-центра:</span>
                            <span className="result-value">[Расчёт отключен]</span>
                        </div>
                        <div className="result-item">
                            <span className="result-label">Годовое потребление:</span>
                            <span className="result-value">[Расчёт отключен]</span>
                        </div>
                        <p className="text-muted small mt-2">
                            E<sub>год</sub> = P<sub>итог</sub> × 8760 ч. Экологичный ЦОД начинается с точного расчёта.
                        </p>
                    </div>
                </div>

                <div className="devices-list-section">
                    <h4 className="text-center">Устройства в расчёте:</h4>
                    <p className="no-devices text-center">Нет устройств в расчёте</p>
                </div>
            </section>
        </Container>
    );
}