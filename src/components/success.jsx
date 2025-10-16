import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>☑ Message Sent Successfully!</h2>
      <p style={styles.text}>
        Thank you for reaching out. We’ll get back to you soon!
      </p>
      <button style={styles.button} onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

 const styles = {
  container: {
    backgroundColor: "black", // ✅ fixed key (was 'background color')
    textAlign: "center",
    padding: "30px 10px",
    minHeight: "30vh", //   height
    animation: "fadeIn 1s ease-in-out",
    margin:"8%",
    borderRadius: "20px",
  },
  heading: {
    color: "#2c98f0",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "0 0 10px rgba(44, 152, 240, 0.8)", // glowing blue effect
    letterSpacing: "1px",
  },
  text: {
    color: "#bbb", // lighter for contrast on black
    fontSize: "18px",
    marginBottom: "30px",
    opacity: "0.9",
  },
  button: {
    background: "linear-gradient(90deg,  #2c98f0,  #2c98f0)",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    borderRadius: "1px",
    cursor: "pointer",
    fontSize: "16px",
    
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(44, 152, 240, 0.6)",
  },
};

 

export default Success;
