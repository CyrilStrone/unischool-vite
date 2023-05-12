import './App.css';
import { Route, Routes } from "react-router-dom";
import { Header } from './ui/header/organoids/Header';
import { Footer } from './ui/footer/organoids/Footer';
import { Registration } from './pages/registration/organoids/Registration';
import { Authorization } from './pages/authorization/organoids/Authorization';
import { Profile } from './pages/profile/organoids/Profile';
import { useEffect, useState } from 'react';
import { accessTokenName } from './common/axiosInstance';
import { $accessToken, setAccessToken } from './common/accessToken';
import { ProfileСhange } from './pages/profileСhange/organoids/ProfileСhange';
import { PasswordChange } from './pages/passwordChange/organoids/PasswordChange';
import { Blog } from './pages/blog/organoids/Blog';
import { Article } from './pages/article/organoids/Article';
import { ArticleWriting } from './pages/articlewriting/organoids/ArticleWriting';
import { AnotherProfile } from './pages/anotherProfile/organoids/AnotherProfile';
import { useStore } from 'effector-react';
import { CustomValidity } from './ui/customValidity/organoids/CustomValidity';
import { Games } from './pages/games/organoids/Games';
import { CardMemory } from './pages/games/list/CardMemory';
import { CardSearch } from './pages/games/list/CardSearch';
import { ArithmeticCall } from './pages/games/list/ArithmeticCall';
import { GamesBar } from './pages/games/molecules/GamesBar';
import { InProfile } from './pages/profile/logics/InProfile';
import { $user } from './common/UserHooks';
import { ArithmeticScale } from './pages/games/list/ArithmeticScale';

function App() {
  const accessToken = useStore($accessToken);
  useEffect(() => {
    if (localStorage.getItem(accessTokenName)?.length) {
      setAccessToken(localStorage.getItem(accessTokenName) || "")
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <div className="App__Actual">
        <CustomValidity />
        <Routes>
          <Route path="/AnotherProfile/:id" element={<AnotherProfile />} />
          <Route path="/Article/:id" element={<Article />} />
          {accessToken ?
            <>
              <Route path="/" element={<Blog />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/ProfileСhange" element={<ProfileСhange />} />
              <Route path="/PasswordChange" element={<PasswordChange />} />
              <Route path="/ArticleWriting" element={<ArticleWriting />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Games" element={<Games />} />
              <Route path="/Games/Bar/:id" element={<GamesBar/>} />
              <Route path="/Games/Bar/CardMemory" element={<CardMemory />} />
              <Route path="/Games/Bar/ArithmeticScale" element={<ArithmeticScale />} />
              <Route path="/Games/Bar/ArithmeticCall" element={<ArithmeticCall />} />
              <Route path='*' element={<Profile />} />
            </> :
            <>
              <Route path="/" element={<Authorization />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Authorization" element={<Authorization />} />
              <Route path='*' element={<Authorization />} />
            </>}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
