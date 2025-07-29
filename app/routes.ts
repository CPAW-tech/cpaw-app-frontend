import {
    type RouteConfig,
    index,
    layout,
    route,
} from '@react-router/dev/routes'

export default [
    //TODO: default index page that redirects to login or dashboard

    layout('layouts/SecureBoundary.tsx', [
        index('routes/dashboard/dashboard.jsx'),
    ]),
    route('/signup', 'routes/authentication/signup.tsx'),
    route('/login', 'routes/authentication/login.tsx'),
] satisfies RouteConfig
