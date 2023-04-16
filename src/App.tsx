import './App.css';
import { Route, Routes } from "react-router-dom";
import { Header } from './ui/header/organoids/Header';
import { Footer } from './ui/footer/organoids/Footer';
import { Registration } from './pages/registration/organoids/Registration';
import { Authorization } from './pages/authorization/organoids/Authorization';
import { Profile } from './pages/profile/organoids/Profile';
import { useEffect } from 'react';
import { accessTokenName } from './common/axiosInstance';
import {  setAccessToken } from './common/accessToken';
import { ProfileСhange } from './pages/profileСhange/organoids/ProfileСhange';
import { PasswordChange } from './pages/passwordChange/organoids/PasswordChange';
import { Blog } from './pages/blog/organoids/Blog';
import { Article } from './pages/article/organoids/Article';
import { ArticleWriting } from './pages/articlewriting/organoids/ArticleWriting';
import { AnotherProfile } from './pages/anotherProfile/organoids/AnotherProfile';
function App() {
  useEffect(() => {
    if (localStorage.getItem(accessTokenName)?.length) {
      setAccessToken(localStorage.getItem(accessTokenName) || "")
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Authorization />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Authorization" element={<Authorization />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/ProfileСhange" element={<ProfileСhange />}></Route>
          <Route path="/PasswordChange" element={<PasswordChange />}></Route>
          <Route path="/ArticleWriting" element={<ArticleWriting />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Article/:id" element={<Article />}></Route>
          <Route path="/AnotherProfile/:id" element={<AnotherProfile />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
