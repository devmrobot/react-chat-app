import './App.css';
const { io } = require("socket.io-client");
const socket = io.connect("http://localhost/3001");

function App() {

  const sendMessage = () => {
    // socket.emit()
  }

  return (
    <>
      <div className="App">
      React x socket.io app
      </div>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" placeholder="Type a message..." /><button onClick={sendMessage}>Send</button>
      </form>
    </>
  );
}

export default App;
