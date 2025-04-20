Bot Battlr
Welcome to Bot Battlr, a React app where you can build your ultimate bot army by selecting and managing powerful battle bots.

  Features
View a collection of bots fetched from a backend.

Enlist bots into your personal army.

Release bots from your army at any time.

Clean, modern UI with responsive design.

 Project Structure

Folders:

public/: contains index.html

src/: main source code

components/: React components

BotCard.jsx

BotCollection.jsx

YourBotArmy.jsx

styles/: CSS files

App.css

BotCard.css

index.css

App.jsx: Main app component

index.jsx: Entry point

Other files:

db.json: JSON server data (must be at project root)

README.md: Project documentation


 Getting Started
1. Clone the Repository
bash

git clone
cd bot-battlr
2. Install Dependencies

npm install
3. Start the Backend (JSON Server)

json-server --watch db.json --port 8001
Ensure you have json-server installed globally. If not, run:

npm install -g json-server
4. Start the React App
In a separate terminal tab:
 npm start
 Backend Route
Once the server is running, you can access the bot data at:

http://localhost:8001/bots

Technologies
React

JavaScript (ES6+)

CSS

JSON Server

 Acknowledgments
Moringa School (Phase 2 Project challenge)

Original Bot Data from [Google Drive source]

 Author
GitHub: Donald-27

Email: kipropdonald27.com

