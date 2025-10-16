 
import { FaWhatsapp } from "react-icons/fa"; 
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "923195776141"; // 👉 Replace with your WhatsApp number (without +)
  const message = "Hello Noshaba, I want to know more about your services."; 

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-btn" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
