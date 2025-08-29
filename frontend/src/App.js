import React, { useState } from "react";
import "./index.css";

function App() {
  const [rawInput, setRawInput] = useState('["a","1","334","4","R","$"]');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      let parsed;
      try {
        parsed = JSON.parse(rawInput);
      } catch (e) {
        throw new Error('Invalid JSON! Example: ["a","1","334"]');
      }

      const payload = Array.isArray(parsed) ? { data: parsed } : parsed;

      const res = await fetch("https://BFHL-Project-Yashwant.onrender.com/bfhl", { ... }), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>REST API</h1>

      <div>
        <h4>REST API (Method: POST) that takes in an array and returns the following:<br></br></h4>
            <p>1. Status<br></br>
            2. User ID<br></br>
            3. Email ID<br></br>
            4. College Roll Number<br></br>
            5. Array for even numbers<br></br>
            6. Array for odd numbers<br></br>
            7. Array for alphabets, converted to uppercase<br></br>
            8. Array for special characters<br></br>
            9. Sum of numbers<br></br>
            10. Concatenation of all alphabetical characters present in the input in the reverse order in alternating caps</p>
      </div>

      <p>Enter your array (JSON format). Example: <code>["a","1","334","4","R","$"]</code></p>

      <textarea
        value={rawInput}
        onChange={(e) => setRawInput(e.target.value)}
        rows={6}
      />


      <div>
        <button onClick={callApi} disabled={loading}>
          {loading ? "Running..." : "Run"}
        </button>
        <button
          className="secondary"
          onClick={() => setRawInput('["a","1","334","4","R","$"]')}
        >
          Example A
        </button>
        <button
          className="secondary"
          onClick={() => setRawInput('["2","a","y","4","&","-","*","5","92","b"]')}
        >
          Example B
        </button>
        <button
          className="secondary"
          onClick={() => setRawInput('["A","ABcD","DOE"]')}
        >
          Example C
        </button>
      </div>
      <h4>Result:</h4>
      {error && <pre className="error">{error}</pre>}
      {result && <pre className="result">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;
