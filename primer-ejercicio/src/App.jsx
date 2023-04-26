import "./App.css";
import AboutUs from "./components/GpAboutUs/AboutUs";
import ExperienciaCards from "./components/GpExperienciacards/ExperienciaCards";
import FormRedChecks from "./components/GpFormRedChecks/FormRedChecks";
import VideoSection from "./components/GpVideoSlider/VideoSection";
import Header from "./components/GpHeader/Header";
import Footer from "./components/GpFooter/Footer";
import StatsChecks from "./components/GpStatsChecks/StatsChecks";
import Dividier from "./components/GpDivider/Dividier";
import HeaderAlto from "./components/GpHeaderAlto/HeaderAlto";

function App() {

  const headerAlto = true;

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
      {headerAlto ? <HeaderAlto /> : <Header />}
      {/* Formulario + checks */}
      <div className="section mt-5" id="formSection">
        <FormRedChecks />
      </div>
      {/* Sección experiencias */}
      <ExperienciaCards />
      
      {/* Sección que hace diferente */}
      <AboutUs />
      <Dividier 
      title={<strong className="textGrande">¡Y mucho más!</strong>} 
      text={"Dinos en qué quieres formarte y te ayudamos a dar un salto en tu carrera. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 ."}
      />

      {/* Sección video */}
      <div className="section" id="videoSection">
        <VideoSection />
      </div>
      {/* Sección CTA */}
      <Dividier 
      title={<p>¿Te unes a nuestra <strong>comunidad grower?</strong></p>} 
      text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type pecimen book."}
      />
      {/* Section nueva */}
      <StatsChecks/>
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
