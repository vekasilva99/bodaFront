import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import "./App.css";
import { useParams } from "react-router-dom";
import axios from "axios";


const App = (props) => {
  let { id } = useParams();
  const [invitado, setInvitado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [asistencia, setAsistencia] = useState(0);

  const getInvitado = async () => {
    const options = {
      url: `https://bodabackend.herokuapp.com/invitaciones/${id}`,
      method: "GET",
      headers: {},
    };
    let res = await axios(options)
      .then((resp) => {
        console.log(resp);
        setAsistencia(resp.data.data.rsvp)
        setInvitado(resp.data.data);
        
        return { status: 200 };
      })
      .catch((error) => {
        return { status: error.response.status };
      });
      setLoading(false)
    return res;
  };

  const rsvp = async (valor)=>{
    let aux
    if(valor){
      if(invitado.invites>1){
        aux=asistencia
      }
   aux=1
    }else{
      aux=0
    }
    const options = {
      url: `https://bodabackend.herokuapp.com/invitaciones/rsvp/${id}`,
      method: "POST",
      data: {
        rsvp:aux
      },
    };
    let res = await axios(options)
      .then((resp) => {
        console.log("esta es la respuesta",resp);
        setAsistencia(resp.data.data.rsvp)
        setInvitado(resp.data.data);
        return { status: 200 };
      })
      .catch((error) => {
        return { status: error.response.status };
      });

    return res;

  }
  useEffect(() => {
    setTimeout(() => {
      getInvitado();
    }, 3000);
  
  }, []);
  return (
    <>
    <div className={loading ? "loader-container visible":"loader-container"}>
      
    <img src={logo} className="logo" alt="logo" />
    <div className="overlay"></div>
    </div>
    <div className="App">
      <div className="invite-container">
        <div className="frame">
          <div className="shape-outer bevel">
            <div class="shape-inner bevel"></div>
          </div>
          <div className="rectangle"></div>
        </div>
        {/* <div className="title">
       <h2 className="name left">Isabella</h2>
       <img src={logo} className="logo" alt="logo" />
       <h2 className="name right">Vicente Emilio</h2>
     </div> */}
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
          <div className="invitar">
            <h3>Se complacen en invitarles al matrimonio de sus hijos</h3>
          </div>
          <div className="novios">
            <h1>Isabella y Vicente Emilio</h1>
          </div>
          <div className="invitar sin-margen">
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
      </div>
      {!loading && invitado != null ? (
        <div className="section2">
          <div className="rsvp-container">
            <div className="rsvp">
              <div className="frame">
                <div className="shape-outer-small bevel">
                  <div class="shape-inner-small bevel"></div>
                </div>
                <div className="rectangle-small"></div>
              </div>
              <div className="invitado-contenedor">
                <div className="invitado">
                  <h1>{invitado.titulo}</h1>
                </div>
                <div className="invitar">
                  {invitado.invites >1 ?
                  <h3>¡Esperamos poder celebrar este día con ustedes!</h3>
                  :    <h3>¡Esperamos poder celebrar este día contigo!</h3>}
                </div>
                {invitado.invites > 1 && (
                  <>
                    <div className="invitar pequeno">
                      <h3>¿Cuántas personas asistirán en total?</h3>
                    </div>
                    <select value={asistencia} onChange={(e)=>{setAsistencia(e.target.value)}}>
                      {[...Array(invitado.invites + 1)].map(
                        (elemento, index) => {
                          return <option value={index}>{index}</option>;
                        }
                      )}
                    </select>
                  </>
                )}
                <div className="button-container">
                  <button className={invitado.respondido && invitado.rsvp==0 ? "button active" :"button"} onClick={()=>{rsvp(false)}} >
                    <h2>No asistiré</h2>
                  </button>
                  <button className={invitado.respondido && invitado.rsvp>0 ? "button active" :"button"} onClick={()=>{rsvp(true)}} disabled={invitado.invites>1 && asistencia==0}>
                    <h2>Asistiré</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mitad">
            <button className="button2">
              <h2>LISTA DE BODAS</h2>
            </button>
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
};

export default App;
