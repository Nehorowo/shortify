import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LinksPage from './pages/LinksPage';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';
import AuthPage from './pages/AuthPage';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/links" exact element={<LinksPage />} />
        <Route path="/create" exact element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailsPage />} />
        {/* <Route path="*" element={<Navigate to="/create" />} /> */}
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" exact element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
