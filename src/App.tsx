import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import Jokes from './Pages/Jokes';
import JokeDetails from './Pages/JokeDetails';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Categories />}>
        <Route index element={<Navigate to="Categories" />} />
        <Route path="Categories" />
        <Route path="Categories/:category" element={<Jokes />} />
        <Route path="Categories/:category/:type/:id" element={<JokeDetails />} />
      </Route>
    </Routes>
  </div>

);

export default App;
