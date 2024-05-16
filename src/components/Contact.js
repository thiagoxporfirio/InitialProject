import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [message, setMessage] = useState("");
// 	const [buttonText, setButtonText] = useState("Enviar mensagem");
// 	const [buttonColor, setButtonColor] = useState("");
// 	const [isSending, setIsSending] = useState(false);

// 	const removeAccents = text => {
// 		return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// 	};

// 	const handleSendMessage = e => {
// 		setIsSending(true);
// 		e.preventDefault();
// 		const apiURL = "https://tiny-tan-shrimp-hat.cyclic.app/";

// 		const data = {
// 			nome: removeAccents(name),
// 			email: removeAccents(email),
// 			mensagem: removeAccents(message)
// 		};

// 		fetch(apiURL, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify(data)
// 		})
// 			.then(response => {
// 				if (response.status === 200) {
// 					setIsSending(false);
// 					toast.success(
// 						`Obrigado, ${name}. Enviaremos um email com mais informações`,
// 						{
// 							position: "bottom-center",
// 							autoClose: 5000,
// 							hideProgressBar: false,
// 							closeOnClick: true,
// 							pauseOnHover: true,
// 							draggable: true
// 						}
// 					);
// 					setButtonColor("bg-green-500");
// 					setButtonText("Enviou!");
// 				} else {
// 					setButtonText("Algo deu errado =(");

// 					// Aqui você pode adicionar algum feedback visual ou ação após o envio da mensagem
// 					toast.error(`Erro inesperado! ${name}. Tente novamente`, {
// 						position: "bottom-center",
// 						autoClose: 5000,
// 						hideProgressBar: false,
// 						closeOnClick: true,
// 						pauseOnHover: true,
// 						draggable: true
// 					});
// 				}

// 				return response.json();
// 			})
// 			.then(responseData => {
// 				console.log("API response:", responseData);

// 				// Aqui você pode adicionar algum feedback visual ou ação após o envio da mensagem
// 			})
// 			.catch(error => {
// 				console.error("Error sending message:", error);
// 				return error;
// 			});
// 	};

// 	return (
// 		<section id="Contact" className="section py-16 lg:selection">
// 			<div className="container mx-auto">
// 				<div className="flex flex-col lg:flex-row">
// 					{/*text */}
// 					<motion.div
// 						variants={fadeIn("right", 0.3)}
// 						initial="hidden"
// 						whileInView={"show"}
// 						viewport={{ once: false, amount: 0.3 }}
// 						className="flex-1 flex justify-start items-center"
// 					>
// 						<div>
// 							<h4 className="text-x1 text-[20px] uppercase text-red-600 font-secondary font-bold mb-2 tracking-wide">
// 								Entrar em contato
// 							</h4>
// 							<h2 className=" text-[45px] lg:text-[90px] leading-none mb-12">
// 								Vamos trabalhar
// 								<br />
// 								juntos!
// 							</h2>
// 						</div>
// 					</motion.div>
// 					{/*form */}
// 					<motion.form
// 						variants={fadeIn("left", 0.3)}
// 						initial="hidden"
// 						whileInView={"show"}
// 						viewport={{ once: false, amount: 0.3 }}
// 						className="flex-1 border rounded-md flex flex-col gap-y-6 pb-24 p-6 items-start"
// 					>
// 						<input
// 							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-red-600 transition-all"
// 							type="text"
// 							placeholder="Seu nome"
// 							value={name}
// 							onChange={e => setName(e.target.value)}
// 						/>
// 						<input
// 							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-red-600 transition-all"
// 							type="text"
// 							placeholder="Seu email"
// 							value={email}
// 							onChange={e => setEmail(e.target.value)}
// 						/>

// 						<textarea
// 							className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-red-600 transition-all resize-none mb-12"
// 							placeholder="Sua menssagem:"
// 							value={message}
// 							onChange={e => setMessage(e.target.value)}
// 						></textarea>
// 						<button
// 							className={`btn btn-lg ${buttonColor}`}
// 							onClick={handleSendMessage}
// 							disabled={isSending} // Desativa o botão enquanto a mensagem está sendo enviada
// 						>
// 							{isSending ? "Enviando..." : buttonText}
// 						</button>
// 					</motion.form>
// 				</div>
// 			</div>
// 		</section>
// 	);
};

export default Contact;
