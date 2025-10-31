import Link from 'next/link';

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch users');

	return res.json();
}

const UserItem = ({ user }) => {
	// console.log('User Item: ', user);
	return (
		<Link href={`/users/${user.id}`} key={user.id} className="item">
			<div>
				<div className="item-title">{`${user.id}. ${user.name}`}</div>
				<div className="item-sub">{`${user.email}`}</div>
			</div>
			<span aria-hidden>&gt;</span>
		</Link>
	);
};

const UsersPage = async () => {
	const users = await getUsers();

	// console.log('Users: ', users);

	return (
		<section className="content">
			<h2 className="section-title">Users</h2>
			<ul className="users-list">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</ul>

			{/* {users.map((user) => {
				return <div key={user.id}>{user.name}</div>;
			})} */}
		</section>
	);
};

export default UsersPage;
