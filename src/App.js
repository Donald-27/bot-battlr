import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);

  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    const alreadyInArmy = botArmy.find((b) => b.id === bot.id);
    if (!alreadyInArmy) {
      setBotArmy([...botArmy, bot]);
    }
  }

  // Remove a bot from the army
  function releaseBot(botId) {
    const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedArmy);
  }

  return (
    <div className="App">
      <YourBotArmy botArmy={botArmy} onReleaseBot={releaseBot} />
      <BotCollection bots={bots} onEnlistBot={enlistBot} />
    </div>
  );
}

export default App;
