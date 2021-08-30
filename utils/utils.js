const getNumbersOrMessages = (init, final) => {

	let numbersOrMessages = [];

	do{
		numbersOrMessages.push( getNumberOrMessage( init ) || init);
	}while( init++ < final );

	return numbersOrMessages;
}

const getNumberOrMessage = (currentNumber) => {

	let currentMessage = '';

	while (!(currentNumber % 3)) { currentMessage = 'Linio'; break; }
	while (!(currentNumber % 5)) { currentMessage = 'IT'; break; }
	while (!(currentNumber % 3) && !(currentNumber % 5)) { currentMessage = 'Linianos'; break; }

	return currentMessage;
}

module.exports = {
    getNumbersOrMessages,
	getNumberOrMessage
}