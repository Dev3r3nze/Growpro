import './App.css'


function App () {
    return (
        <div className='App'>
            {/* Imagen de fondo */}
            <img src="Recursos/background.png" alt="background color image" className="ancho" id='bckimg'/>
            {/* Header */}
            <header className='App-header'>
                {/* Barra+logo */}
                <div className="container-fluid headerLogo" id='headerLogo'> 
                    <img src="Recursos/LOGO 1.png" alt="logo grow pro" id='logoImg'></img>
                    <button id='btnHeaderMobile' className='btnHeaderStyle'><p className='textMedio'>QUIERO MÁS INFO</p></button>
                </div>
                {/* Header+CTA */}
                <div className="container-fluid" id='headerText'>
                    <h1 id='headerTitle'>Las mejores experiencias para estudiar <br /> y trabajar <span id='titleSpecial'>en Australia</span></h1>
                    <button id='btnHeader' className='btnHeaderStyle'><p className='textMedio'>QUIERO MÁS INFO</p></button>
                    
                </div>
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="gp-header-default-mask" clipPathUnits="objectBoundingBox">
                      <path d="M0,0 V0.82 S0.214,0.999,0.391,1 C0.516,1,0.582,0.935,0.656,0.904 C0.746,0.867,0.767,0.867,0.809,0.862 C0.905,0.852,1,0.915,1,0.915 V0" />
                    </clipPath>
                  </defs>
                </svg>
              <div id='line'/>
            </header>
            {/* Formulario + checks */}
            <div className='container-fluid section'>
              <div className='row container-fluid g-5' id='firstSectionRow'>
                {/* Columna formulario */}
                <div className='col-lg-6 order-lg-1 order-2' id='form'>
                  <form action="" className='container-fluid'>
                    <div className='row'>
                      <div className='col-sm-12 col-lg-6'>
                        <label htmlFor="">Nombre</label>
                        <input type="text" required/>
                      </div>
                      <div className='col-sm-12 col-lg-6 mt-4 mt-lg-0 '>
                        <label htmlFor="">Apellidos</label>
                        <input type="text" required/>
                      </div>
                    </div>
                    <div className='row  mt-4'>
                      <div className='col'>
                        <label htmlFor="">Correo</label>
                        <input type="email" className='ancho' required/>
                      </div>
                    </div>
                      <div className='row mt-4'>
                        <label htmlFor="">Número de teléfono</label>
                      </div>
                      <div className='row '>
                        <div className='col-sm-4  col-lg-6'>
                          <select>
                            <option value="Spn">Spain</option>
                            <option value="Mex">México</option>
                            <option value="Arg">Argentina</option>
                          </select>
                        </div>
                        <div className='col-sm-8 mt-xs-4 col-lg-6'>
                          <input type="tel" id="telefono" name="telefono" pattern="^\+34\d{9}$" required/>
                        </div>
                      </div>
                      
                    <div className='row  mt-4'>
                      <div className='col-sm-12 col-lg-6'>
                        <label htmlFor="">Nacionalidad</label>
                        <select>
                          <option value="Spn">España</option>
                          <option value="Mex">México</option>
                          <option value="Arg">Argentina</option>
                        </select>
                      </div>
                      <div className='col-sm-12 col-lg-6 mt-4 mt-lg-0 '>
                        <label htmlFor="">¿Qué quieres estudiar?</label>
                        <select>
                          <option value="S">Seleccione</option>
                          <option value="Mex">Inglés</option>
                          <option value="Arg">Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className='row  mt-4'>
                      <div className='col' id='colTerms'>
                      <input type="checkbox" id='checkTerms' required/>
                      <p id='termsText'>He leído y acepto el <a href="">aviso legal</a> y la <a href="">política de privacidad.</a></p>
                    
                      </div>
                    </div>
                    <div className='row ancho' id='rowSend'>
                      <button id='btnForm' className='btnPrincipal'><p>ENVIAR</p></button>
                    </div>
                  </form>
                </div>
                {/* Columna textos */}
                <div className='col-lg-6 order-lg-2 order-1' >
                  <h1 className='textGrande textFino'>Lorem Ipsum es simplemente el texto de relleno de <strong>las imprentas</strong></h1>
                  <div className='checksForm'>
                    <p className='textPequeño textFino'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p className='textPequeño textFino'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p className='textPequeño textFino'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p className='textPequeño textFino'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Sección experiencias */}
            <div className='container-fluid section'>
            <p className='textGrande textFino ancho' id='sectionExp'>¿Qué tipo de <strong>experiencia quieres vivir?</strong></p>
            <p className='textFino textPequeño text-start container-fluid'>Selecciona el tipo de curso que te gustaría hacer, rellena el formulario y nuestro equipo especialista se pondrá en contacto contigo tan pronto como sea posible.</p>
            {/* Primera fila de tarjetas */}
            <div className='row g-5 ancho'>
              {/* Primera tarjeta */}
              <div className='col-lg-4 p-0 p-lg-4'>
                <div className='card'>
                  <div className='topVentas ancho'><p className='textTiny'>Top ventas de GrowPro Experience</p></div>
                  <img src="Recursos\card1.png" alt="" className='card-img-top'/>
                  <p className='cardOff textTiny'>🔥70% off</p>
                  <div className='cardFondo ancho'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard textMedio'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard textMedio'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <div className='verMasController' onClick={() => MostrarMas(0)}>
                          <p className='verMasCard textTiny'>VER MÁS</p>
                          <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
                        </div>
                        <div className='textVer'>
                          <p className='text-start textPequeño'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dignissimos, vel temporibus nihil est dicta culpa 
                          </p>
                        </div>
                      </div>
                      <div className='divider'></div>
                      <div className='validezDiv'>
                        <img src="Recursos/validezicon.png" alt="" className='validezIcon'/>
                        <p className='validezText'>Válido hasta 25/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Segunda tarjeta */}
              <div className='col-lg-4 p-0 p-lg-4'>
                <div className='card'>
                  <img src="Recursos\card2.png" alt="" className='card-img-top'/>
                  <p className='cardOff textTiny'>🔥70% off</p>
                  <div className='cardFondo ancho'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <div className='verMasController' onClick={() => MostrarMas(1)}>
                          <p className='verMasCard textTiny'>VER MÁS</p>
                          <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
                        </div>
                        <div className='textVer'>
                          <p className='text-start  textPequeño'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dignissimos, vel temporibus nihil est dicta culpa 
                          </p>
                        </div>
                      </div>
                      <div className='divider'></div>
                      <div className='validezDiv'>
                        <img src="Recursos/validezicon.png" alt="" className='validezIcon'/>
                        <p className='validezText'>Válido hasta 25/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tercera tarjeta */}
              <div className='col-lg-4 p-0 p-lg-4'>
                <div className='card'>
                  <img src="Recursos\card3.png" alt="" className='card-img-top'/>
                  <div className='cardFondo ancho'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Inglés general mientras disfrutas de las playas de Australia</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <div className='verMasController' onClick={() => MostrarMas(2)}>
                          <p className='verMasCard textTiny'>VER MÁS</p>
                          <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
                        </div>
                        <div className='textVer'>
                          <p className='text-start  textPequeño'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dignissimos, vel temporibus nihil est dicta culpa 
                          </p>
                        </div>
                      </div>
                      <div className='divider'></div>
                      <div className='validezDiv'>
                        <img src="Recursos/validezicon.png" alt="" className='validezIcon'/>
                        <p className='validezText'>Válido hasta 25/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Segunda fila de tarjetas */}
            <div className='row g-5 mt-0 ancho' >
              {/* Cuarta tarjeta */}
              <div className='col-lg-4 offset-lg-2 p-0 p-lg-4'>
                <div className='card'>
                  <div className='topVentas ancho'><p className='textTiny'>Top ventas de GrowPro Experience</p></div>
                  <img src="Recursos\card1.png" alt="" className='card-img-top'/>
                  <p className='cardOff textTiny'>🔥70% off</p>
                  <div className='cardFondo ancho'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <div className='verMasController' onClick={() => MostrarMas(3)}>
                          <p className='verMasCard textTiny'>VER MÁS</p>
                          <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
                        </div>
                        <div className='textVer'>
                          <p className='text-start  textPequeño'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dignissimos, vel temporibus nihil est dicta culpa 
                          </p>
                        </div>
                      </div>
                      <div className='divider'></div>
                      <div className='validezDiv'>
                        <img src="Recursos/validezicon.png" alt="" className='validezIcon'/>
                        <p className='validezText'>Válido hasta 25/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quinta tarjeta */}
              <div className='col-lg-4 p-0 p-lg-4'>
                <div className='card'>
                  <img src="Recursos\card3.png" alt="" className='card-img-top'/>
                  <div className='cardFondo ancho'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Inglés general mientras disfrutas de las playas de Australia</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <div className='verMasController' onClick={() => MostrarMas(4)}>
                          <p className='verMasCard textTiny'>VER MÁS</p>
                          <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
                        </div>
                        <div className='textVer'>
                          <p className='text-start  textPequeño'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dignissimos, vel temporibus nihil est dicta culpa 
                          </p>
                        </div>
                      </div>
                      <div className='divider'></div>
                      <div className='validezDiv'>
                        <img src="Recursos/validezicon.png" alt="" className='validezIcon'/>
                        <p className='validezText'>Válido hasta 25/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            
            </div>
            {/* Sección que hace diferente */}
            <div className='section' id='sectionDiff'>
              <p className='textGrande textFino text-center'>¿Qué hace diferente GrowPro?</p>
              <strong className='textGrande text-center'>Te acompaña en destino, pero de verdad</strong> 
              {/* Tarjetas */}
              <div className='row mt-5 g-5 cardRow ancho justify-content-evenly'>
                {/* Primera */}
                <div className='col-lg-5 infoCard'>
                  <img src="Recursos/iconInfo1.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>KICK-OFF MEETING</p>
                  <p className='textInfo'>Es una sesión online que se realiza antes de tu viaje, en la que conocerás a tu equipo en destino y a otros estudiantes. ¡Aterrizarás con la seguridad de conocer a quién te espera en destino.</p>
                </div>
                <div className='col-lg-5 infoCard'>
                <img src="Recursos/iconInfo2.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>WELCOME SESSION Y WELCOME NIGHT</p>
                  <p className='textInfo'>Nada más llegar, te recibimos en nuestras oficinas, junto a otros estudiantes, para contarte todo sobre tu nueva ciudad. Después, te invitaremos a un ¡buen evento!</p>
                {/* Segunda */}
                </div>
              </div>
              <div className='row mt-0 g-5 cardRow ancho justify-content-evenly'>
                <div className='col-lg-5 infoCard '>
                  <img src="Recursos/iconInfo3.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>WORKSHOPS</p>
                  <p className='textInfo'>Tenemos las claves para que encuentres trabajo y las compartimos en diferentes workshops. ¡Te lo ponemos más fácil!</p>
                {/* Tercera */}
                </div>
                <div className='col-lg-5 infoCard '>
                  <img src="Recursos/iconInfo4.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>EVENTAZOS</p>
                  <p className='textInfo'>Eventos todas las semanas. Cada uno es una excusa para juntar a la comunidad grower y pasar un buen rato juntos. ¡Las buenas vibes que no falten!</p>
                {/* Cuarta */}
                </div>
              </div>
              <div className='dividerText'>
                <strong className='textGrande'>¡Y mucho más!</strong> 
                <p className='textPequeño textFino'>Dinos en qué quieres formarte y te ayudamos a dar un salto en tu carrera. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 .</p>
                <button className='btnPrincipal'>QUIERO MÁS INFO</button>
              </div>
            </div>
            
            {/* Sección video */}
            <div className='section'>
              {/* Text */}
              <div id='videoText'>
                <p id='titleVideo' className='textGrande textFino'>Conoce más opiniones de los <strong>grower por el mundo</strong></p> 
                <p id='descVideo' className='textMediano textFino'>¿Aún tienes dudas? Deja que los que ya han pasado por esta experiencia te cuenten lo que han vivido</p> 
            </div> 
             {/*Video  */}
            <div id='videoDiv'>
              <img src="Recursos/VideoPreview.png" onClick={() => MostrarVideo()} alt="" className='ancho' />
              {/* Siguiente / Anterior */}
              <div>
                <img src="Recursos/prevVideo.png" alt="" />
                <img src="Recursos/nextVideo.png" alt="" />
              </div>
            </div>
            <div id='videoFullScreen' className='ancho'>
              <div id='videoContainer' className='ancho'>
                <div id="videoClose"  onClick={() => OcultarVideo()}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
                </div>
                  <iframe width="1518" height="864" src="https://www.youtube.com/embed/kF0OtEH8Lo0" title="Sidney Australia - Maria Jose - Testimonio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='video' className='ancho'></iframe>
                </div>
              </div>
            </div>
            {/* Sección CTA */}
            <div className='dividerText'>
            <p id='titleYMás' className='textGrande textFino'>¿Te unes a nuestra <strong>comunidad grower?</strong></p> 
                <p  className='textPequeño textFino'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type pecimen book.</p>
                <button className='btnPrincipal'>QUIERO MÁS INFO</button>
            </div>
            {/* Footer */}
            <footer className='row text-center container-fluid' id='footer'>
              <div className='footerText col-md-6 col-12 order-2 order-md-1'><p>©2021 GrowPro • Todos los derechos reservados</p></div>
              <div className='footerText col order-1 order-md-2'><p><a href="" className='textMuyPeque textFino'>Aviso legal</a>  |  <a href="" className='textMuyPeque textFino'>Política de cookies</a>  |  <a href="" className='textMuyPeque textFino'>Política de privacidad</a></p></div>
            </footer>
        </div>
    )
}

// Aparece a partir de cierto punto y se queda fijo
{/*
addEventListener('load', () => {  
  var header = document.getElementById('headerLogo');
  var posicionDesplazar = window.innerHeight;

  window.addEventListener('scroll', function() {
    var posicionActual = window.pageYOffset;

    if (posicionActual > posicionDesplazar) {
      header.style.transition = 'all 0.3s ease'; // agregamos una transición suave de 0.5 segundos
      header.style.top = '0px';
      header.style.position = 'fixed';

    } else {
      header.style.top = '-100px';
      header.style.position = 'initial';
    }
  })
}, false); */}

// Aparece a y desaparece al hacer scroll hacia arriba o abajo
{
addEventListener('load', () => {  
  var header = document.getElementById('headerLogo');
  var lastScrollPosition = 0;

  window.addEventListener('scroll', function() {
    var currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling hacia abajo
      header.classList.add('headerLogoHidden');

    } else {
      // Scrolling hacia arriba
      header.classList.remove('headerLogoHidden');
    }

    lastScrollPosition = currentScrollPosition;
  })
}, false);
}


function MostrarVideo(){
  var video = document.getElementById('videoFullScreen');
  video.style.display = 'flex';
} 
function OcultarVideo(){
  var video = document.getElementById('videoFullScreen');
  video.style.display = 'none';
}

function MostrarMas(num){
  var text = document.getElementsByClassName('textVer')[num];
  if(text.style.display == 'flex'){
    text.style.display = 'none';
  }else{
    text.style.display = 'flex';
  }

}


export default App
