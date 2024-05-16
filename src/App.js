import React from "react";

// components

import Header from "./components/Header";
import Contact from "./components/Contact";
import Button from "./components/Button";
const App = () => {
	return (
		<div className="bg-site bg-no-repeat bg-cover overflow-hidden">
			<Header />
			<Contact />
			<Button />
		</div>
	);
};

export default App;
