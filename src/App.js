import logo from './logo.svg';
import './App.css';
import playerData from './Components/Data/Data.json';
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Club from './Components/Club/Club';


function App() {
     const [player, setPlayer] = useState([]);
     const [club,setClub] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  },[])

  const handleAddToClub = (play) =>{
  const newClub = [...club,play];
  setClub(newClub);
  }
  return (
    <div className="App">
       <Club club={club}></Club>
      <ul>
       {
         player.map(play => <Player play={play} handleAddToClub={handleAddToClub} key={play.id}></Player>)
       }
     </ul>



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
