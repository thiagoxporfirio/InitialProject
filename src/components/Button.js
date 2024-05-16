import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Button = () => {
	const handleWhatsAppClick = () => {
		const phoneNumber = "5515997999797";
		const message = "Olá, tenho interesse em saber mais sobre a franquia";
		const encodedMessage = encodeURIComponent(message);
		const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

		window.location.href = whatsappLink;
	};

	return (
		<button
			href="https://wa.me/5515997999797?text=Olá%20tenho%20interesse%20em%20saber%20mais%20sobre%20a%20franquia"
			className="fixed  bottom-4 right-4 bg-green-500 text-white rounded-full w-[60px] h-[60px] flex items-center justify-center"
			onClick={handleWhatsAppClick}
		>
			<FaWhatsapp size={30} />
		</button>
	);
};

export default Button;
