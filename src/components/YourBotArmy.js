import React from "react";
import BotCard from "./BotCard"; 


function YourBotArmy({ botArmy, onReleaseBot }) {
 
  if (!botArmy) {
    return <p>Loading your bot army</p>;
  }

  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>

      
      <div className="bot-collection">
        {botArmy.map((bot) => {
          return (
            <BotCard
              key={bot.id} 
              bot={bot} 
              onClick={() => onReleaseBot(bot.id)} 
              actionText="Release" 
            />
          );
        })}
      </div>
    </div>
  );
}

export default YourBotArmy;
