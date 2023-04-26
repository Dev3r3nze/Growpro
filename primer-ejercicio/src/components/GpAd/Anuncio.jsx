import React from "react";
import "./Anuncio.css";

const Anuncio = () => {
  return (
    // <div className='row barra w-100 m-0'>
    //     <p className='anuncioText'>🔥 ¡GANA UNA BECA a donde tú elijas! 🔥</p>
    //     <p className='anuncioText'>Selecciona la experiencia, completa el formulario y entrarás el concurso 🌎</p>
    // </div>
    <div className="barra w-100 m-0">
      <div class="container">
        <div class="py-3 py-lg-2 text-center lh-1-5">
          <p class="mb-0">
            <strong>🔥 ¡GANA UNA BECA a donde tú elijas! 🔥</strong>
          </p>
          <p class="mb-0">
            Selecciona la experiencia, completa el formulario y entrarás el
            concurso 🌎
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anuncio;
