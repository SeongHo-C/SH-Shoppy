import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
// import ProtectedRoute from './pages/ProtectedRoute';
import LikeProducts from 'pages/LikeProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />,
            },
            {
                path: '/products',
                element: <AllProducts />,
            },
            {
                path: '/products/new',
                element: (
                    // <ProtectedRoute requireAdmin>
                    <NewProduct />
                    // </ProtectedRoute>
                ),
            },
            {
                path: '/products/:id',
                element: <ProductDetail />,
            },
            {
                path: '/carts',
                element: (
                    // <ProtectedRoute>
                    <MyCart />
                    // </ProtectedRoute>
                ),
            },
            {
                path: '/products/like',
                element: <LikeProducts />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
