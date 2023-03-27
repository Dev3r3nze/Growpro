import './App.css'

function App () {
    return (
        <div className='App'>
            {/* Imagen de fondo */}
            <img src="Recursos/background.png" alt="background color image" id='bckimg'/>
            {/* Header */}
            <header className='App-header'>
                <div className="container-fluid" id='headerLogo'> 
                    <img src="Recursos/LOGO 1.png" alt="logo grow pro" id='logoImg'></img>
                </div>
                <div className="container-fluid" id='headerText'>
                    <h1 id='headerTitle'>Las mejores experiencias para estudiar y trabajar <span id='titleSpecial'>en Australia</span></h1>
                    <button id='btnHeader'><p>QUIERO MÁS INFO</p></button>
                </div>
            </header>
            {/* Formulario + checks */}
            <div className='container-fluid section'>
              <div className='row container-fluid' id='firstSectionRow'>
                <div className='col-md-6' id='form'>
                  <form action="" className='container-fluid'>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Nombre</label>
                        <input type="text"/>
                      </div>
                      <div className='col'>
                        <label htmlFor="">Apellidos</label>
                        <input type="text"/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Correo</label>
                        <input type="text" id='inputCorreo'/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <label htmlFor="">Número de teléfono</label>
                        <input type="text" value="Spain (España)" disabled/>
                      </div>
                      <div className='col'>
                        <label htmlFor="">‎</label>
                        <input type="text" value="+34"/>
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
                      <input type="checkbox" id='checkTerms'/>
                      <p id='termsText'>He leído y acepto el <a href="">aviso legal</a> y la <a href="">política de privacidad.</a></p>
                    
                      </div>
                    </div>
                    <div className='row' id='rowSend'>
                      <button id='btnForm'><p>ENVIAR</p></button>
                    </div>
                  </form>
                </div>
                <div className='col-md-5' >
                  <h1 id='titleForm'>Lorem Ipsum es simplemente el texto de relleno de <strong>las imprentas</strong></h1>
                  <div className='checksForm'>
                    <p><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                    <p><img src="Recursos\icons-check.png" alt="" />Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Sección experiencias */}
            <div className='container-fluid section' id='sectionExp'>
            <p id='titleSectionExp'>¿Qué tipo de <span>experiencia quieres vivir?</span></p>
            <p id='descSectionExp'>Selecciona el tipo de curso que te gustaría hacer, rellena el formulario y nuestro equipo especialista se pondrá en contacto contigo tan pronto como sea posible.</p>
            <div className='row container-fluid te'>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='topVentas'><p>Top ventas de GrowPro Experience</p></div>
                  <img src="Recursos\card1.png" alt="" className='card-img-top'/>
                  <p className='cardOff'>🔥70% off</p>
                  <div className='cardBody'>
                    <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                    <p className='precioCard'><del>8800 AUD</del> | <span>2640 AUD</span></p>
                    <button className='btnCard'><p>SELECCIONAR</p></button>
                    <div className='verMasDiv'>
                      <p className='verMasCard'>VER MÁS</p>
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
              <div className='col-md-4'>
                <div className='card'>
                  <img src="Recursos\card2.png" alt="" className='card-img-top'/>
                  <div className='cardBody'>
                    <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                    <p className='precioCard'><del>8800 AUD</del> | <span>2640 AUD</span></p>
                    <button className='btnCard'><p>SELECCIONAR</p></button>
                    <div className='verMasDiv'>
                      <p className='verMasCard'>VER MÁS</p>
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
              <div className='col-md-4'>
                <div className='card'>
                  <img src="Recursos\card3.png" alt="" className='card-img-top'/>
                  <div className='cardBody'>
                    <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                    <p className='precioCard'><del>8800 AUD</del> | <span>2640 AUD</span></p>
                    <button className='btnCard'><p>SELECCIONAR</p></button>
                    <div className='verMasDiv'>
                      <p className='verMasCard'>VER MÁS</p>
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
            <div className='row mt-5 container-fluid' >
              <div className='col-md-4 offset-md-2'>
                <div className='card'>
                  <div className='topVentas'><p>Top ventas de GrowPro Experience</p></div>
                  <img src="Recursos\card1.png" alt="" className='card-img-top'/>
                  <p className='cardOff'>🔥70% off</p>
                  <div className='cardBody'>
                    <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                    <p className='precioCard'><del>8800 AUD</del> | <span>2640 AUD</span></p>
                    <button className='btnCard'><p>SELECCIONAR</p></button>
                    <div className='verMasDiv'>
                      <p className='verMasCard'>VER MÁS</p>
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
                
              <div className='col-md-4'>
                <div className='card'>
                  <img src="Recursos\card3.png" alt="" className='card-img-top'/>
                  <div className='cardBody'>
                    <h5 className='cardTitle'>Estudia Medio Ambiente en Sidney</h5>
                    <p className='precioCard'><del>8800 AUD</del> | <span>2640 AUD</span></p>
                    <button className='btnCard'><p>SELECCIONAR</p></button>
                    <div className='verMasDiv'>
                      <p className='verMasCard'>VER MÁS</p>
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
            {/* Sección más info */}
            <div className='section'>
              <p id='titleInfo'>¿Qué hace diferente GrowPro?</p>
              <p id='titleInfoStrong'>Te acompaña en destino, pero de verdad</p> 

              <div className='row mt-5'>
                <div className='col-5 infoCard offset-md-1'>
                  <img src="Recursos/iconInfo1.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Kick-off Meeting</p>
                  <p className='textInfo'>Es una sesión online que se realiza antes de tu viaje, en la que conocerás a tu equipo en destino y a otros estudiantes. ¡Aterrizarás con la seguridad de conocer a quién te espera en destino.</p>
                </div>
                <div className='col-5 infoCard offset-md-1'>
                <img src="Recursos/iconInfo2.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Welcome Session y Welcome Night</p>
                  <p className='textInfo'>Nada más llegar, te recibimos en nuestras oficinas, junto a otros estudiantes, para contarte todo sobre tu nueva ciudad. Después, te invitaremos a un ¡buen evento!</p>
                
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-5 infoCard offset-md-1'>
                  <img src="Recursos/iconInfo3.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Workshops</p>
                  <p className='textInfo'>Tenemos las claves para que encuentres trabajo y las compartimos en diferentes workshops. ¡Te lo ponemos más fácil!</p>
                
                </div>
                <div className='col-5 infoCard offset-md-1'>
                  <img src="Recursos/iconInfo4.png" alt="" className='iconInfo'/>
                  <p className='titleInfo'>Eventazos</p>
                  <p className='textInfo'>Eventos todas las semanas. Cada uno es una excusa para juntar a la comunidad grower y pasar un buen rato juntos. ¡Las buenas vibes que no falten!</p>
                
                </div>
              </div>
                <p id='titleYMás'>¡Y mucho más!</p> 
                <p id='ymasDesc'>Dinos en qué quieres formarte y te ayudamos a dar un salto en tu carrera. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 .</p>
                <button id='btnForm'>QUIERO MÁS INFO</button>
              <div>
              </div>
            </div>
            
            {/* Sección video */}
            <div>
              
            </div>
            {/* Sección CTA */}
            <div></div>
            {/* Footer */}
            <footer></footer>
        </div>
    )
}

export default App
