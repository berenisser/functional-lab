/*forma antigua 
function lowercaser(input){
	return input.toLowerCase()
} */

//const lowercaser = (input) => input.toLowerCase()

//esto hace la funcion mas pura pq asi no tenemos que mutar los inputs
const lowercaser = (input) => {
	if (typeof input !== 'string'){
		throw('input is not a valid string')
	}

	return input.toLowerCase()
} 

/*
const lowercaser = (input) => {
	return input.toLowerCase()
}*/

module.exports = lowercaser