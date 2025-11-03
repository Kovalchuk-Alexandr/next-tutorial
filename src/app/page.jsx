import Image from "next/image";
import styles from "./page.module.css";
import Button from '@/components/Button';

export default function Home() {
  return (
		<section className="content">
			<h1>Изучаем Next JS</h1>
			<p>
				Next.js - это современный React-фреймворк, который позволяет
				создавать быстрые, масштабируемые и SEO-дружественные
				приложения.
			</p>
			{/* Тестирование error.jsx */}
			<Button />
		</section>
  );
}
