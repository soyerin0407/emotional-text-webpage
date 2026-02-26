import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/transform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>감성 글귀 변환기 ✨</h1>

      <textarea
        rows="4"
        cols="50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="문장을 입력하세요..."
      />

      <br />
      <button onClick={handleSubmit}>변환하기</button>

      <h2>결과</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;