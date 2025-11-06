export function getHelloMessage(params) {
	// Здесь м/б любая логика: запрос с БД, внешнему API
	return { message: 'Hello from shared module!' };
}

export function createHelloGreeting(name) {
	return { message: `Hello, ${name} from shared module!` };
}
