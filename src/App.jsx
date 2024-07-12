import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import PagWeb from './componentes/PagWeb';
import LoginForm from './componentes/formularios/LoginForm';
import RegisterForm from './componentes/formularios/RegisterForm';
import InterfazApp from './componentes/InterfazApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Encabezado />
                <PagWeb />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Encabezado />
                <LoginForm />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Encabezado />
                <RegisterForm />
              </>
            }
          />
          <Route path="/interfaz" element={<InterfazApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

