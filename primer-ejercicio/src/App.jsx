import "./App.css";
import AboutUs from "./components/AboutUs";
import ExperienciaCards from "./components/ExperienciaCards";
import FormRedChecks from "./components/FormRedChecks";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="App">
      {/* Imagen de fondo */}
      <img
        src="Recursos/background.png"
        alt="background color image"
        className="ancho"
        id="bckimg"
      />
      {/* Header */}
      <header className="App-header">
        {/* Barra+logo */}
        <div className="container-fluid headerLogo" id="headerLogo">
          <img src="Recursos/LOGO 1.png" alt="logo grow pro" id="logoImg"></img>
          <button id="btnHeaderMobile" className="btnHeaderStyle">
            <p className="textMedio">QUIERO MÁS INFO</p>
          </button>
        </div>
        {/* Header+CTA */}
        <div className="container-fluid" id="headerText">
          <h1 id="headerTitle">
            Las mejores experiencias para estudiar y trabajar en{" "}
            <span id="titleSpecial">Australia</span>
          </h1>
          <button id="btnHeader" className="btnHeaderStyle">
            <p className="textMedio">QUIERO MÁS INFO</p>
          </button>
        </div>
        <svg width="0" height="0">
          <defs>
            <clipPath
              id="gp-header-default-mask"
              clipPathUnits="objectBoundingBox"
            >
              <path d="M0,0 V0.82 S0.214,0.999,0.391,1 C0.516,1,0.582,0.935,0.656,0.904 C0.746,0.867,0.767,0.867,0.809,0.862 C0.905,0.852,1,0.915,1,0.915 V0" />
            </clipPath>
          </defs>
        </svg>
        <div id="line" />
      </header>
      {/* Formulario + checks */}
      <div className="section mt-5" >
        <FormRedChecks />
      </div>
      {/* Sección experiencias */}
      <div className="section">
        <p className="textGrande textFino ancho" id="sectionExp">
          ¿Qué tipo de <strong>experiencia quieres vivir?</strong>
        </p>
        <p className="textFino textPequeño text-start container-fluid">
          Selecciona el tipo de curso que te gustaría hacer, rellena el
          formulario y nuestro equipo especialista se pondrá en contacto contigo
          tan pronto como sea posible.
        </p>
        {/* Fila de tarjetas */}
        <ExperienciaCards />
      </div>
      {/* Sección que hace diferente */}
      <AboutUs />

      {/* Sección video */}
      <div className="section" id="videoSection">
        <VideoSection />
      </div>
      {/* Sección CTA */}
      <div className="dividerText" id="lastCTA">
        <p id="titleYMás" className="textGrande textFino">
          ¿Te unes a nuestra <strong>comunidad grower?</strong>
        </p>
        <p className="textPequeño textFino">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,when an unknown printer took a galley of type and
          scrambled it to make a type pecimen book.
        </p>
        <button className="btnPrincipal">QUIERO MÁS INFO</button>
      </div>
      {/* Footer */}
      <footer className="row text-center " id="footer">
        <div className="footerText col-md-6 col-12 order-2 order-md-1">
          <p>©2021 GrowPro • Todos los derechos reservados</p>
        </div>
        <div className="footerText col order-1 order-md-2">
          <p>
            <a href="" className="textMuyPeque textFino">
              Aviso legal
            </a>{" "}
            |{" "}
            <a href="" className="textMuyPeque textFino">
              Política de cookies
            </a>{" "}
            |{" "}
            <a href="" className="textMuyPeque textFino">
              Política de privacidad
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// Aparece a y desaparece al hacer scroll hacia arriba o abajo
{
  addEventListener(
    "load",
    () => {
      var header = document.getElementById("headerLogo");
      var lastScrollPosition = 0;
      var btnHeader = document.getElementById("btnHeaderMobile");
      btnHeader.classList.add("headerLogoHidden");

      window.addEventListener("scroll", function () {
        var currentScrollPosition = window.scrollY;

        if (
          currentScrollPosition > lastScrollPosition &&
          window.innerWidth > 768
        ) {
          // Scrolling hacia abajo
          header.classList.add("headerLogoHidden");
          btnHeader.classList.add("headerLogoHidden");
        } else {
          // Scrolling hacia arriba
          header.classList.remove("headerLogoHidden");
          btnHeader.classList.remove("headerLogoHidden");
        }
        if (currentScrollPosition < 500) {
          btnHeader.classList.add("headerLogoHidden");
        }

        lastScrollPosition = currentScrollPosition;
      });
    },
    false
  );
}

addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    document.getElementById("bckimg").src = "../Recursos/background-mobile.png";
  } else {
    document.getElementById("bckimg").src = "../Recursos/background.png";
  }
});

export default App;
