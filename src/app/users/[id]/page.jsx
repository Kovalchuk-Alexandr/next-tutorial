async function getUser(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch user');

	return res.json();
}

const UserPage = async ({ params }) => {
	// console.log('ID: ', params.id);

	const user = await getUser(params.id);
	console.log('User: ', user);

	return (
		<div>
			<h1>Users Page</h1>
		</div>
	);
};

export default UserPage;
