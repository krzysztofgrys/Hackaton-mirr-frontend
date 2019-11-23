import React from 'react';
import {useLocation, Link} from "react-router-dom";
import routes from '../routing/routes';

export default function Breadcrumbs() {
    let location = useLocation();
    const breadcrumbsMap = {
        'login': routes.find(route => route.path === '/login'),
        'posts': routes.find(route => route.path === '/posts'),
        'add': routes.find(route => route.path === '/posts/add'),
        'map': routes.find(route => route.path === '/posts/map'),
        ':postId': routes.find(route => route.path === '/posts/:postId'),
    };
    const locationElements = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [routes.find(route => route.path === '/')];
    locationElements.forEach(route => {
        breadcrumbsMap[route] && breadcrumbs.push(breadcrumbsMap[route]);
    });
    const breadcrumbsRenderedElements = breadcrumbs
        .map((breadcrumb, index) =>
            <li key={index}>
                <Link className='text-dark breadcrumb-item' to={breadcrumb.path}>{breadcrumb.description}</Link>
            </li>)
        .reduce((prev, curr) => [prev, ' > ', curr]);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">{breadcrumbsRenderedElements}</ol>
        </nav>);
}
