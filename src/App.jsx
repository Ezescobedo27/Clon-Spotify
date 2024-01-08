import React from 'react';
// Base
import Header from './pages/base/Header/Header.jsx';
import AsideIzquierdo from './pages/base/AsideIzquierdo/AsideIzquierdo.jsx';
import AsideDerecho from './pages/base/AsideDerecho/AsideDerecho.jsx';
import Footer from './pages/base/Footer/Footer.jsx';
import Error404 from './pages/base/Error404/Error404.jsx';

// Auth
import Register from './pages/auth/register/Register.jsx'
import Login from './pages/auth/Login/Login.jsx'
import Restore from './pages/auth/Restore/Restore.jsx'
import Success from './pages/auth/Success/Success.jsx'

// Dashboard
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Playlist from './pages/dashboard/playlist/Playlist.jsx'

// Profile
import Profile from './pages/profile/Profile.jsx'
import Settings from './pages/profile/settings/Settings.jsx'
import Likes from './pages/profile/Likes/Likes.jsx'
import Notifications from './pages/profile/notifications/Notifications.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* PRIVATE ROUTES */}
      <Header />
      <div className="grid gap-2 " style={{gridTemplateColumns: '1fr 2fr 1fr'}}>
        <AsideIzquierdo />
        <main className="right-0 bg-blue-500 h-[100%]">
          <Routes>
            {/* Auth */}
            <Route element={<Register/>} path="/auth/register"></Route>
            <Route element={<Login/>} path="/auth/login"></Route>
            <Route element={<Restore/>} path="/auth/restore"></Route>
            <Route element={<Success/>} path="/auth/success"></Route>

            {/* Profile  */}
            <Route element={<Profile/>} path="/profile"></Route>
            <Route element={<Settings/>} path="/profile/settings"></Route>
            <Route element={<Likes/>} path="/profile/likes"></Route>
            <Route element={<Notifications/>} path="/profile/notifications"></Route>

           {/* Dashboard */}
           <Route element={<Dashboard/>} path="/dashboard"></Route>
           <Route element={<Playlist/>} path="/dashboard/playlist"></Route>
           <Route element={<Error404/>} path="*"></Route>

          </Routes>
        </main> 
        <AsideDerecho />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
