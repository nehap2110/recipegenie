import React, { useState} from 'react'
import askai from '../utils/askai';


const Dashboard = () => {
    const[question,setQuestion] = useState("");
    const[recipe ,setRecipe] = useState("");

    const handleinput = (e)=>{
        setQuestion(e.target.value);
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        const res = askai(question);

        setRecipe(res);
    }

  return (<div
  style={{
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px"
  }}
>
  {/* Logo */}
  <h1
    style={{
      textAlign: "center",
      color: "#ff6b35",
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "30px"
    }}
  >
    🍳 RecipeGenie
  </h1>

  <div
    style={{
      backgroundColor: "white",
      padding: "30px",
      minHeight: "500px",
      maxWidth: "900px",
      margin: "auto",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "25px"
    }}
  >
    <form
      onSubmit={handlesubmit}
      style={{
        display: "flex",
        gap: "10px"
      }}
    >
      <input
        type="text"
        onChange={handleinput}
        placeholder="Ask recipe here..."
        style={{
          flex: 1,
          padding: "12px 15px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          outline: "none"
        }}
      />

      <button
        type="submit"
        style={{
          padding: "12px 25px",
          backgroundColor: "#ff6b35",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Ask Here
      </button>
    </form>

    <pre
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        whiteSpace: "pre-wrap",
        lineHeight: "1.6",
        fontSize: "16px",
        flex: 1
      }}
    >
      {recipe}
    </pre>
  </div>
</div>
  )
}

export default Dashboard;
