import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get(`${API}/api/health`)
      .then((res) => {
        setMessage(res.data.backend);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Backend not reachable");
      });
  }, []);

  return (
    <div>
      <h1>Docker Pipeline Demo</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;