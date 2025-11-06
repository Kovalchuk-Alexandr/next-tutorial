'use client';

import { getHelloMessage } from "@/lib/hello";

// async function getMessageFromAPI() {
// 	/* При запросе из клиентской части можно хост не указывать
// 	const res = await fetch('http://localhost:3000/api/hello');*/
// 	const res = await fetch('api/hello');

// 	return res.json();
// }

const ButtonGetRequest = () => {
	const clickHandler = () => {
		const { message } = getHelloMessage();

		alert(message);
	};

	return (
		<button className="btn btn-ghost" onClick={clickHandler}>
			Make Get request (client )
		</button>
	);
};

export default ButtonGetRequest;
