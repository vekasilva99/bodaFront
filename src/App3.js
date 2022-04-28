import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="invite-container">
        <div className="frame">
          <div className="shape-outer bevel">
            <div class="shape-inner bevel"></div>
          </div>
          <div className="rectangle">    
          <div className="rectangle-inside"></div>
          </div>
        </div>
        {/* <div className="title">
       <h2 className="name left">Isabella</h2>
       <img src={logo} className="logo" alt="logo" />
       <h2 className="name right">Vicente Emilio</h2>
     </div> */}
        <div className="cont">
          <div className="invite">
            <img src={logo} className="logo-big" alt="logo" />
            <div className="papas-container">
              <div className="papas">
                <h3>Juan Carlos Antillano Monagas</h3>
                <h3>Ysabel Vetancourt De Antillano</h3>
              </div>
              <div className="papas">
                <h3>Vicente Rosa Muñoz</h3>
                <h3>Andreina Uzcátegui De Rosa</h3>
              </div>
            </div>
            <div className="invitar small">
              <h3>Se complacen en invitarles al matrimonio de sus hijos</h3>
            </div>
            <div className="novios">
              <h1>Isabella y Vicente Emilio</h1>
            </div>
            <div className="invitar sin-margen small">
              <h3>
                Ceremonia que se efectuará el sábado dos de julio de dos mil
                veintidós
              </h3>
              <h3>
                a las cuatro de la tarde en los jardines de la casa Samambaya,
                Caracas
              </h3>
            </div>
            <div className="papas-container con-margen">
              <div className="papas">
                <h4>Recepción: Casa Samambaya</h4>
                <h4>Los Guayabitos, Caracas</h4>
              </div>
              <div className="papas">
                <h4>Cinco y treinta de la tarde</h4>
                <h4>Traje Formal</h4>
              </div>
            </div>
          </div>
          <div className="rsvp-container">
       <div className="rsvp">
       
     <div className="invitado-contenedor">
         <div className="invitado"><h1>Valeska Silva</h1></div>
         <div className="invitar"><h3>¡Esperamos poder celebrar este día contigo!</h3></div>
         <div className="invitar pequeno"><h3>¿Cuántas personas asistirán en total?</h3></div>
         <select>
           <option>0</option>
           <option>1</option>
         </select>
         <div className="button-container">
     
           <button className="button"><h2>No asistiré</h2></button>
           <button className="button"><h2>Asistiré</h2></button>
         </div>
       </div>
     </div>
     </div>
        </div>
      </div>

    <div className='fondo'>
      <div className="fondo1"></div>
      <div className="fondo2"></div>
    </div>
    </div>
  );
}

export default App;
