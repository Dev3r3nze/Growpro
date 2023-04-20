import "./App.css";
import AboutUs from "./components/GpAboutUs/AboutUs";
import ExperienciaCards from "./components/GpExperienciacards/ExperienciaCards";
import FormRedChecks from "./components/GpFormRedChecks/FormRedChecks";
import VideoSection from "./components/GpVideoSlider/VideoSection";
import Header from "./components/GpHeader/Header";
import Footer from "./components/GpFooter/Footer";

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
      <Header />
      {/* Formulario + checks */}
      <div className="section mt-5" id="formSection">
        <FormRedChecks />
      </div>
      {/* Sección experiencias */}
      <ExperienciaCards />
      
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
      <Footer />
    </div>
  );
}

// Función para cambiar el fondo en pantallas pequeñas
addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    document.getElementById("bckimg").src = "../Recursos/background-mobile.png";
  } else {
    document.getElementById("bckimg").src = "../Recursos/background.png";
  }
});

export default App;
