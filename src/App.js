import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  const get = async () => {
    const res = await axios.get(`http://localhost:5000/sam`);
    setUser(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="App">
      What is the point of having the result
      <div>
        <h2>{user}</h2>
      </div>
    </div>
  );
}

export default App;
