import React from 'react';
import './App.css';
import {
  RecoilRoot
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './Layouts/Header';
import { Footer } from './Layouts/Footer';
import { MainPage } from './Pages/Main/Main';
import { LoginPage } from './Pages/Auth/LoginPage/Login';
import { RegisterPage } from './Pages/Auth/RegisterPage/Register';
import { SearchPage } from './Pages/Search/Search';
import { SearchDetailPage } from './Pages/Search/SearchDetail';
const App  = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SearchPage" element={<SearchPage/>} />
            <Route path="/SearchDetailPage" element={<SearchDetailPage/>} />
            <Route path="/RegisterPage" element={<RegisterPage/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <Footer />
    </>
  );
};

export default App;


