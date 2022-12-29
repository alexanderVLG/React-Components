import React from "react";
import './index.scss';
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
import Users  from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="counter" element={<Counter />}/>
      <Route path="modal" element={<Modal />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
}

export default App;
