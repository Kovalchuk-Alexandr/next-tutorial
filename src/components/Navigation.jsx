'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
	const [activeItem, setActiveItem] = useState('Main');

	const menuItems = [
		{ name: 'Main', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Users', href: '/users' },
		{ name: 'Get', href: '/getExample' },
		{ name: 'Post', href: '/postExample' },
		{ name: 'Contacts', href: '/contacts' },
	];

	const handleItemClick = (itemName) => {
		// console.log('Item Name: ', itemName);
		setActiveItem(itemName);
	};

	return (
		<nav className="navigation">
			{menuItems.map((item) => (
				<Link
					key={item.name}
					className={`nav-link ${
						activeItem === item.name ? 'active' : ''
					}`}
					href={item.href}
					onClick={(e) => {
						// e.preventDefault();
						handleItemClick(item.name);
					}}
				>
					{item.name}
				</Link>
			))}

			{/* <Link className="nav-link" href="/">
				Main
			</Link>
			<Link className="nav-link" href="/about">
				About
			</Link>
			<Link className="nav-link" href="/users">
				Users
			</Link>
			<Link className="nav-link" href="/contacts">
				Contacts
			</Link> */}
		</nav>
	);
};

export default Navigation;
