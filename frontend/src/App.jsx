import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const response = await fetch("http://localhost:8080/hello");
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to connect to backend");
    }
  };

  return (
    <div>
      <h1>AI Interview Platform</h1>

      <button onClick={getMessage}>
        Get Message
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;