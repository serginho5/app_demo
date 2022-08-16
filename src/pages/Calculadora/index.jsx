import React from "react";
import { Link } from "react-router-dom";

const Calculadora = () => {
  return (
    <div>
      <h1>Página Calculadora</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Calculadora;
