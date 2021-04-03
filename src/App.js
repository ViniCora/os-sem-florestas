import './App.css';
import './TelaAcesso/TelaAcesso.js'
import LuisGarcia from './Personagens/LuisGarcia.jpg';
import AalikMattaaq from './Personagens/AalikMattaaq.png'
import Violetta from './Personagens/Violetta.png'
import Ewan from './Personagens/Ewan.png'
import { Link } from 'react-router-dom';
import Danyel from './Personagens/Danyel.png';
import Aaron from './Personagens/AaronBaudelaire.png'
import Morgana from './Personagens/MorganaHela.png'
import Ibrahim from './Personagens/Ibrahim.png'
import Header from './Header/Header.js';
import React, {useState, useEffect} from 'react';
import AtributesDataService from './Services/AtributesService.js';


function App() {
  const [atributesLuis, setAtributesLuis] = useState(null);
  const [atributesDanyel, setAtributesDanyel] = useState(null);
  const [atributesEwan, setAtributesEwan] = useState(null);
  const [atributesAaron, setAtributesAaron] = useState(null);
  const [atributesVioletta, setAtributesVioletta] = useState(null);
  const [atributesMorgana, setAtributesMorgana] = useState(null);
  const [atributesAalik, setAtributesAalik] = useState(null);
  const [atributesIbrahim, setAtributesIbrahim] = useState(null);
  
  useEffect(() => {
    retrieveAtributes();
  }, []);

const retrieveAtributes = () => {
    AtributesDataService.getAtributes("Luis Garcia Do Nascimento")
    .then((response) => {
    setAtributesLuis(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Violetta")
    .then((response) => {
    setAtributesVioletta(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Aaron Baudelaire")
    .then((response) => {
    setAtributesAaron(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Aalik Mattaaq")
    .then((response) => {
    setAtributesAalik(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Danyel de Lucca")
    .then((response) => {
    setAtributesDanyel(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Ewan Butcher")
    .then((response) => {
    setAtributesEwan(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Ibrahim Nursultan Al-Fahi")
    .then((response) => {
    setAtributesIbrahim(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
    AtributesDataService.getAtributes("Morgana Hela")
    .then((response) => {
    setAtributesMorgana(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });

};

  return (
    <div className="App">
      <Header></Header>
      <body>
        <div>
          <h1 style ={{paddingTop:'50px', color: '#fff'}}>Escolha o pesonagem</h1>
        </div>
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', paddingTop: '30px'}}>
          {atributesLuis == null ? '' : atributesLuis.mostrar_tela ? 
            <div>
              <Link to="/personagens/LuisGarcia">
                <img style={{maxWidth: '200px', paddingLeft: '0px'}} src={LuisGarcia} alt="Luis Garcia Do Nascimento" />
              </Link>
            </div>
            :
            ''
          }
          {atributesAalik == null ? '' : atributesAalik.mostrar_tela ? 
            <div>
              <Link to="/personagens/AalikMattaaq">
                <img style={{maxWidth: '225px', paddingLeft: '25px'}} src={AalikMattaaq} alt="AalikMattaaq" />
              </Link>
            </div>
            :
            ''
          }
          {atributesVioletta == null ? '' : atributesVioletta.mostrar_tela ? 
            <div>
              <Link to="/personagens/Violetta">
                <img style={{maxWidth: '256px', paddingLeft: '25px'}} src={Violetta} alt="Violetta" />
              </Link>
            </div>
            :
            ''
          }
          {atributesAaron == null ? '' : atributesAaron.mostrar_tela ? 
            <div>
              <Link to="/personagens/Aaron">
                <img style={{maxWidth: '256px', paddingLeft: '25px'}} src={Aaron} alt="Aaron" />
              </Link>
            </div>
            :
            ''
          }
          {atributesEwan == null ? '' : atributesEwan.mostrar_tela ? 
            <div>
              <Link to="/personagens/Ewan">
                <img style={{maxWidth: '210px', paddingLeft: '25px'}} src={Ewan} alt="Ewan" />
              </Link>
            </div>
           :
           ''
         }
          {atributesDanyel == null ? '' : atributesDanyel.mostrar_tela ? 
            <div>
              <Link to="/personagens/Danyel">
                <img style={{maxWidth: '195px', paddingLeft: '25px'}} src={Danyel} alt="Danyel" />
              </Link>
            </div>
           :
           ''
         }
          {atributesIbrahim == null ? '' : atributesIbrahim.mostrar_tela ? 
              <div>
                <Link to="/personagens/Ibrahim">
                  <img style={{maxWidth: '208px', paddingLeft: '25px'}} src={Ibrahim} alt="Ibrahim" />
                </Link>
              </div>
            :
              ''
          }
          {atributesMorgana == null ? '' : atributesMorgana.mostrar_tela ? 
            <div>
              <Link to="/personagens/MorganaHela">
                <img style={{maxWidth: '212px', paddingLeft: '25px'}} src={Morgana} alt="MorganaHela" />
              </Link>
            </div>
          :
            ''
          }
        </div>
      </body>
    </div>
  );
}

export default App;
