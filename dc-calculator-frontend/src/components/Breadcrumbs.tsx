import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import './Breadcrumbs.css';
import React from 'react';

interface Crumb {
    label: string;
    path?: string;
}

interface BreadcrumbsProps {
    crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
    return (
        <nav aria-label="breadcrumb" className="text-center">
            <ul className="breadcrumbs d-inline-flex align-items-center">
                <li>
                    <Link to={ROUTES.HOME}>Главная</Link>
                </li>
                {crumbs.map((crumb, i) => (
                    <React.Fragment key={i}>
                        <li className="separator">-</li>
                        <li>
                            {i === crumbs.length - 1 ? (
                                crumb.label
                            ) : (
                                <Link to={crumb.path || '#'}>{crumb.label}</Link>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </nav>
    );
}