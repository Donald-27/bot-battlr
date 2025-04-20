import React from "react";
import BotCard from "./BotCard"; 

function BotCollection({ bots, onEnlistBot }) {

  if (!bots) {
    return <p>Loading bots</p>;
  }

  return (
    <div className="bot-collection">
      <h2>All Bots</h2>

      {}
      <div className="bot-list">
        {bots.map((bot) => {
          return (
            <BotCard
              key={bot.id}          
              bot={bot}            
              onClick={() => onEnlistBot(bot)}
              actionText="Enlist"   
            />
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
