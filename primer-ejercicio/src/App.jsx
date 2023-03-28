import './App.css'

// Obtener el botón y la posición de la ventana
var boton = document.querySelector('#btnHeader');
var posicionDesplazar = 20;

// Escuchar el evento de scroll
window.addEventListener('scroll', function() {
  // Obtener la posición actual del scroll
  var posicionActual = window.pageYOffset;

  // Mostrar el botón si la posición actual es mayor que la posición de la ventana
  if (posicionActual > posicionDesplazar) {
    boton.style.display = 'flex';
    boton.classList.add('mostrar');
  } else {
    boton.style.display = 'none';
    boton.classList.remove('mostrar');
  }
})

function App () {
    return (
        <div className='App'>
            {/* Imagen de fondo */}
            <img src="Recursos/background.png" alt="background color image" id='bckimg'/>
            {/* Header */}
            <header className='App-header'>
                {/* Barra+logo */}
                <div className="container-fluid" id='headerLogo'> 
                    <img src="Recursos/LOGO 1.png" alt="logo grow pro" id='logoImg'></img>
                </div>
                {/* Header+CTA */}
                <div className="container-fluid" id='headerText'>
                    <h1 id='headerTitle'>Las mejores experiencias para estudiar y trabajar <span id='titleSpecial'>en Australia</span></h1>
                    <button id='btnHeader'><p>QUIERO MÁS INFO</p></button>
                    {}
                </div>
            </header>
            {/* Formulario + checks */}
            <div className='container-fluid section'>
              <div className='row container-fluid' id='firstSectionRow'>
                {/* Columna formulario */}
                <div className='col-md-6' id='form'>
                  <form action="" className='container-fluid'>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Nombre</label>
                        <input type="text" required/>
                      </div>
                      <div className='col'>
                        <label htmlFor="">Apellidos</label>
                        <input type="text" required/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Correo</label>
                        <input type="text" id='inputCorreo' required/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Número de teléfono</label>
                        <input type="text" value="Spain (España)" disabled required/>
                      </div>
                      <div className='col'>
                        <label htmlFor="">‎</label>
                        <input type="text" value="+34" required/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Nacionalidad</label>
                        <select>
                          <option value="Spn">España</option>
                          <option value="Mex">México</option>
                          <option value="Arg">Argentina</option>
                        </select>
                      </div>
                      <div className='col'>
                        <label htmlFor="">¿Qué quieres estudiar?</label>
                        <select>
                          <option value="S">Seleccione</option>
                          <option value="Mex">Inglés</option>
                          <option value="Arg">Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col' id='colTerms'>
                      <input type="checkbox" id='checkTerms' required/>
                      <p id='termsText'>He leído y acepto el <a href="">aviso legal</a> y la <a href="">política de privacidad.</a></p>
                    
                      </div>
                    </div>
                    <div className='row' id='rowSend'>
                      <button id='btnForm' className='btnPrincipal'><p>ENVIAR</p></button>
                    </div>
                  </form>
                </div>
                {/* Columna textos */}
                <div className='col-md-5' >
                  <h1 className='textGrande textFino'>Lorem Ipsum es simplemente el texto de relleno de <strong>las imprentas</strong></h1>
                  <div className='checksForm'>
                    <p className='textPequeño'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p className='textPequeño'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p className='textPequeño'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p className='textPequeño'><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Sección experiencias */}
            <div className='container-fluid section' id='sectionExp'>
            <p className='textGrande textFino'>¿Qué tipo de <strong>experiencia quieres vivir?</strong></p>
            <p className='textFino textPequeño'>Selecciona el tipo de curso que te gustaría hacer, rellena el formulario y nuestro equipo especialista se pondrá en contacto contigo tan pronto como sea posible.</p>
            {/* Primera fila de tarjetas */}
            <div className='row container-fluid te'>
              {/* Primera tarjeta */}
              <div className='col-md-4'>
                <div className='card'>
                  <div className='topVentas'><p className='textTiny'>Top ventas de GrowPro Experience</p></div>
                  <img src="Recursos\card1.png" alt="" className='card-img-top'/>
                  <p className='cardOff textTiny'>🔥70% off</p>
                  <div className='cardFondo'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard textMedio'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard textMedio'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <p className='verMasCard textTiny'>VER MÁS</p>
                        <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
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
              <div className='col-md-4'>
                <div className='card'>
                  <img src="Recursos\card2.png" alt="" className='card-img-top'/>
                  <div className='cardFondo'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <p className='verMasCard textTiny'>VER MÁS</p>
                        <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
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
              <div className='col-md-4'>
                <div className='card'>
                  <img src="Recursos\card3.png" alt="" className='card-img-top'/>
                  <div className='cardFondo'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <p className='verMasCard textTiny'>VER MÁS</p>
                        <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
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
            <div className='row mt-5 container-fluid' >
              {/* Cuarta tarjeta */}
              <div className='col-md-4 offset-md-2'>
                <div className='card'>
                  <div className='topVentas'><p>Top ventas de GrowPro Experience</p></div>
                  <img src="Recursos\card1.png" alt="" className='card-img-top'/>
                  <p className='cardOff'>🔥70% off</p>
                  <div className='cardFondo'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <p className='verMasCard textTiny'>VER MÁS</p>
                        <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
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
              <div className='col-md-4'>
                <div className='card'>
                  <img src="Recursos\card3.png" alt="" className='card-img-top'/>
                  <div className='cardFondo'>
                    <div className='cardBody'>
                      <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                      <p className='precioCard'><del>8800 AUD</del> | <strong>2640 AUD</strong></p>
                      <button className='btnCard'><p className='textTiny'>SELECCIONAR</p></button>
                      <div className='verMasDiv'>
                        <p className='verMasCard textTiny'>VER MÁS</p>
                        <img src="Recursos/verMásIcon.png" alt="" className='verMasIcon'/>
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
            <div className='section'>
              <p className='textGrande textFino'>¿Qué hace diferente GrowPro?</p>
              <strong className='textGrande'>Te acompaña en destino, pero de verdad</strong> 
              {/* Tarjetas */}
              <div className='row mt-5 cardRow'>
                {/* Primera */}
                <div className='col-5 infoCard offset-md-1'>
                  <img src="Recursos/iconInfo1.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Kick-off Meeting</p>
                  <p className='textInfo'>Es una sesión online que se realiza antes de tu viaje, en la que conocerás a tu equipo en destino y a otros estudiantes. ¡Aterrizarás con la seguridad de conocer a quién te espera en destino.</p>
                </div>
                <div className='col-5 infoCard offset-md-1'>
                <img src="Recursos/iconInfo2.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Welcome Session y Welcome Night</p>
                  <p className='textInfo'>Nada más llegar, te recibimos en nuestras oficinas, junto a otros estudiantes, para contarte todo sobre tu nueva ciudad. Después, te invitaremos a un ¡buen evento!</p>
                {/* Segunda */}
                </div>
              </div>
              <div className='row mt-5 cardRow'>
                <div className='col-5 infoCard offset-md-1'>
                  <img src="Recursos/iconInfo3.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Workshops</p>
                  <p className='textInfo'>Tenemos las claves para que encuentres trabajo y las compartimos en diferentes workshops. ¡Te lo ponemos más fácil!</p>
                {/* Tercera */}
                </div>
                <div className='col-5 infoCard offset-md-1'>
                  <img src="Recursos/iconInfo4.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Eventazos</p>
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
              <iframe width="1518" height="864" src="https://www.youtube.com/embed/kF0OtEH8Lo0" title="Sidney Australia - Maria Jose - Testimonio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='video'></iframe>
              {/* Siguiente / Anterior */}
              <div>
                <img src="Recursos/prevVideo.png" alt="" />
                <img src="Recursos/nextVideo.png" alt="" />
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
            <footer>
              <div className='footerText'><p>©2021 GrowPro • Todos los derechos reservados</p></div>
              <div><p><a href="" className='textMuyPeque textFino'>Aviso legal</a>  |  <a href="" className='textMuyPeque textFino'>Política de cookies</a>  |  <a href="" className='textMuyPeque textFino'>Política de privacidad</a></p></div>
            </footer>
        </div>
    )
}

export default App
