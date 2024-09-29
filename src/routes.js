import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';

import Spinner from './components/Spinner';

import PublicRoute from './layouts/PublicRoute';

import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Company from './pages/Company';
import BlogPage from './pages/BlogPage';
import Product from './pages/product/Product';

export default function Router() {
  const { loading } = useSelector((state) => state.alerts);
  const data1 = [
    { id: 1, imgSrc: '/assets/indoNepali/1.jpg' },
    { id: 2, imgSrc: '/assets/indoNepali/2.jpg' },
    { id: 3, imgSrc: '/assets/indoNepali/3.jpg' },
    { id: 4, imgSrc: '/assets/indoNepali/5.jpg' },
    { id: 5, imgSrc: '/assets/indoNepali/6.jpg' },
    { id: 6, imgSrc: '/assets/indoNepali/7.jpg' },
    { id: 7, imgSrc: '/assets/indoNepali/8.jpg' },
    { id: 8, imgSrc: '/assets/indoNepali/9.jpg' },
    { id: 9, imgSrc: '/assets/indoNepali/10.jpg' },
    { id: 10, imgSrc: '/assets/indoNepali/11.jpg' },
    { id: 11, imgSrc: '/assets/indoNepali/12.jpg' },
  ];

  const data2 = [
    { id: 1, imgSrc: '/assets/handKnotted/1.jpg' },
    { id: 2, imgSrc: '/assets/handKnotted/2.jpg' },
    { id: 3, imgSrc: '/assets/handKnotted/3.jpg' },
    { id: 4, imgSrc: '/assets/handKnotted/5.jpg' },
    { id: 5, imgSrc: '/assets/handKnotted/6.jpg' },
    { id: 6, imgSrc: '/assets/handKnotted/7.jpg' },
    { id: 7, imgSrc: '/assets/handKnotted/8.jpg' },
    { id: 8, imgSrc: '/assets/handKnotted/9.jpg' },
    { id: 9, imgSrc: '/assets/handKnotted/10.jpg' },
    { id: 10, imgSrc: '/assets/handKnotted/11.jpg' },
    { id: 11, imgSrc: '/assets/handKnotted/12.jpg' },
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/"
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicRoute>
                <Contact />
              </PublicRoute>
            }
          />
          <Route
            path="/company"
            element={
              <PublicRoute>
                <Company />
              </PublicRoute>
            }
          />
          <Route
            path="/indo-nepali-product"
            element={
              <PublicRoute>
                {/* <BlogPage /> */}
                <Product data={data1} title="Indo Nepali Product" />
              </PublicRoute>
            }
          />
          <Route
            path="/hand-knotted-product"
            element={
              <PublicRoute>
                {/* <BlogPage /> */}
                <Product data={data2} title="Hand Knotted Product" />
              </PublicRoute>
            }
          />

          <Route
            path="/blog"
            element={
              <PublicRoute>
                <BlogPage />
              </PublicRoute>
            }
          />

          <Route path="*" element={<Navigate to="/error/404" />} />
        </Routes>
      )}
    </>
  );
}
