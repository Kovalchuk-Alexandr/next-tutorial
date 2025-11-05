import Image from 'next/image';

export const metadata = {
	title: 'About page | Next JS tutorial',
	description: 'Info about our company',
	keywords: 'business, next js, react',
};

const AboutPage = () => {
	return (
		<section className="content">
			<h2 className="section-title">About</h2>
			<p>
				Next.js - это мощный фреймворк поверх React, используемый
				ведущими компаниями для разработки производительных и
				масштабируемых приложений.
			</p>

			{/* Image можно вставить, как обычный тэг <img>
			<img src="./dodge-400-200.jpg" alt="Dodge" />*/}

			{/* Или через компонент <Image>. Обязательно указать 'width, height' */}
			<Image
				src="/dodge-400-200.jpg"
				alt="Dodge"
				width="400"
				height="200"
				priority
			/>
			<br />
			<Image
				src="https://webcademy.ru/blog/wp-content/uploads/2023/07/Travel-X-Cover-870x400.jpg"
				alt="Norway"
				width="435"
				height="200"
				priority
			/>
			<br />
			<Image
				src="https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1467"
				alt="Country"
				width="500"
				height="333"
				priority
			/>
		</section>
	);
};

export default AboutPage;
