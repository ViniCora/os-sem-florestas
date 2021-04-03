import './App.css';
import './TelaAcesso/TelaAcesso.js'
import LuisGarcia from './Personagens/LuisGarcia.jpg';
import AalikMattaaq from './Personagens/AalikMattaaq.png'
import Violetta from './Personagens/Violetta.png'
import Ewan from './Personagens/Ewan.png'
import { Link } from 'react-router-dom';
import Danyel from './Personagens/Danyel.png';
import Aaron from './Personagens/AaronBaudelaire.png'
import Header from './Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <div>
          <h1 style ={{paddingTop:'50px', color: '#fff'}}>Escolha o pesonagem</h1>
        </div>
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', paddingTop: '30px'}}>
          <div>
            <Link to="/personagens/LuisGarcia">
              <img style={{maxWidth: '200px', paddingLeft: '0px'}} src={LuisGarcia} alt="Luis Garcia Do Nascimento" />
            </Link>
          </div>
          <div>
            <Link to="/personagens/AalikMattaaq">
              <img style={{maxWidth: '225px', paddingLeft: '25px'}} src={AalikMattaaq} alt="AalikMattaaq" />
            </Link>
          </div>
          <div>
            <Link to="/personagens/Violetta">
              <img style={{maxWidth: '256px', paddingLeft: '25px'}} src={Violetta} alt="Violetta" />
            </Link>
          </div>
          <div>
            <Link to="/personagens/Aaron">
              <img style={{maxWidth: '256px', paddingLeft: '25px'}} src={Aaron} alt="Aaron" />
            </Link>
          </div>
          <div>
            <Link to="/personagens/Ewan">
              <img style={{maxWidth: '210px', paddingLeft: '25px'}} src={Ewan} alt="Ewan" />
            </Link>
          </div>
          <div>
            <Link to="/personagens/Danyel">
              <img style={{maxWidth: '195px', paddingLeft: '25px'}} src={Danyel} alt="Danyel" />
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
