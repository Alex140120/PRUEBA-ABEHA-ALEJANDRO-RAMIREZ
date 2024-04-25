import React, { useState } from "react";
import car1 from "./assets/images/car1/auto1.png";
import car2 from "./assets/images/car2/auto2.png";

function App() {
  const [valorDivisor, setValorDivisor] = useState(0);

  const handleDeslizar = (e) => {
    const valor = e.target.value;
    setValorDivisor(valor);

    const beforeImage = document.querySelector(".cuadro-comparacion .imagen-1");
    const divisor = document.querySelector(".cuadro-comparacion .divisor");
    const divisorIcon = document.querySelector(
      ".cuadro-comparacion .divisor-icon"
    );

    let sliderValor = valor + "%";

    beforeImage.style.width = sliderValor;
    divisor.style.left = sliderValor;
    divisorIcon.style.left = sliderValor;
  };

  return (
    <>
      <div className="cuadro-comparacion">
        <div className="container">
          <img className="imagen-1" src={car1} alt="Car 1" />
          <img className="imagen-2" src={car2} alt="Car 2" />

          <div className="divisor"></div>
          <div className="divisor-icon">
            <span className="material-symbols-outlined">unfold_more</span>
          </div>

          <input
            type="range"
            className="slider"
            min="0"
            max="100"
            value={valorDivisor}
            onChange={handleDeslizar}
          />
        </div>
      </div>
    </>
  );
}

export default App;
