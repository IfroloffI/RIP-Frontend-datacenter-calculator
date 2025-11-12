import { Form, Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

interface SearchInputProps {
    value: string;
    onChange: (val: string) => void;
    onSubmit: () => void;
    onClear?: () => void;
}

export function SearchInput({ value, onChange, onSubmit, onClear }: SearchInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const clearButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (value && inputRef.current) {
            inputRef.current.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e")`;
            inputRef.current.style.backgroundRepeat = 'no-repeat';
            inputRef.current.style.backgroundPosition = 'right 0.75rem center';
            inputRef.current.style.backgroundSize = '16px 16px';
            inputRef.current.style.paddingRight = '2.5rem';
        } else if (inputRef.current) {
            inputRef.current.style.backgroundImage = 'none';
            inputRef.current.style.paddingRight = '';
        }
    }, [value]);

    const handleClear = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onChange('');
        if (onClear) onClear();

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <Form
            className="d-flex position-relative"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <div className="position-relative">
                <Form.Control
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Поиск по названию или категории..."
                    className="search-input me-2"
                    style={{ minWidth: '300px', paddingRight: value ? '2.5rem' : '' }}
                    onFocus={(e) => e.target.select()}
                />
                {value && (
                    <Button
                        ref={clearButtonRef}
                        type="button"
                        variant="outline-secondary"
                        size="sm"
                        onClick={handleClear}
                        className="position-absolute border-0 bg-transparent p-0 text-decoration-none"
                        style={{
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '16px',
                            height: '16px',
                            minWidth: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <span
                            style={{
                                fontSize: '14px',
                                lineHeight: 1,
                                color: '#6c757d',
                                opacity: 0.7
                            }}
                        >
                            ✕
                        </span>
                    </Button>
                )}
            </div>
            <Button type="submit" variant="primary">
                Найти
            </Button>
        </Form>
    );
}