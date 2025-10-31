async function getUser(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch user');

	return res.json();
}

const UserPage = async ({ params }) => {
	/* В Next 15 'params' передается, как промис, потому его нужно
	 получить через await params или React.use(params)
	 https://nextjs.org/docs/messages/sync-dynamic-apis */
	// const param = await params;
	const { id } = await params;
	console.log('ID: ', id);

	const user = await getUser(id);
	// console.log('User: ', user);

	return (
		<div>
			<section className="">
				<h2 className="section-title">User #{user.id}</h2>
				<div className="card card--user-details">
					<span className="muted">Name</span>
					<span>{user.name}</span>
					<span className="muted">Username</span>
					<span>{user.username}</span>
					<span className="muted">Email</span>
					<span>{user.email}</span>
					<span className="muted">Phone</span>
					<span>{user.phone}</span>
					<span className="muted">Website</span>
					<span>{user.website}</span>
					<span className="muted">Company</span>
					<span>{user.company?.name}</span>
					<span className="muted">Address</span>
					<span>
						{user.address?.zipcode}, {user.address?.city},{' '}
						{user.address?.street}, {user.address?.suite}
					</span>
				</div>
			</section>
		</div>
	);
};

export default UserPage;
