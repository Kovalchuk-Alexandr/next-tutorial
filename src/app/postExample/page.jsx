import { createHelloGreeting } from '@/lib/hello';

// async function makePostRequest(params) {
// 	const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
// 		method: "POST",
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({name: 'Alex'})
// 	});

// 	const data = await res.json();
// 	return data;
// }

const PostExample = () => {
	const { message } = createHelloGreeting('Alex');

	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>
			{/* <code>
				<pre>
					{`const res = await fetch(\`${process.env.NEXT_URL}/api/hello\`, {
	method: "POST",
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({name: 'Alex'})
});`}
				</pre>
			</code> */}
			{message && <p>{message}</p>}

			{/* <ButtonGetRequest /> */}
		</section>
	);
};

export default PostExample;
