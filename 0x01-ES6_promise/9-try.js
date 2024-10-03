function guardrail(mathFunction) {
    // Create an array named queue
    const queue = [];

    try {
        // Execute the mathFunction and append the result to the queue
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        // If an error is thrown, append the error message to the queue
        queue.push(error.message);
    } finally {
        // In every case, add the message to the queue
        queue.push('Guardrail was processed');
    }

    // Return the queue
    return queue;
}
