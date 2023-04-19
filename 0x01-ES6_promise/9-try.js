export default function guardrail(mathFunction){
	const queue = [];
	try {
		queue.push(mathFunction());
	}catch (err) {
		queue.push("Error: cannot divide by 0");
	}
	queue.push("Guardrail was processed");
	return queue;
}
