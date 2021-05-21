function recur(x, array) {
     if(x < 0) {

        } else {
             if(array[x] < array[x - 1]) {                 // If the current iteration of the loop is LESS then the number before
                let temp = [array[x], array[x - 1]];       // Swap the two numbers so the smallest of the two will appear first
                array[x] = temp[1];                        // This is done by creating a two-element array that will contain the same two numbers
                array[x - 1] = temp[0];                    // Make the original array elements equel the new ones, ie. swap
                recur(x - 1, array);                       // Once this is done, call the function again but with one less than the current iteration
                }                                          // This process will repeat until wo reach less than 0
            }
       }


function arrangeNum(string) {
	let array = string.split(",");   // User input data is string-type, so need to change it to an array
	let nurmericArray = [];
	for(let i = 0; i < array.length; i++) {
		nurmericArray.push(Number(array[i]));    // convert the array elements from strings to numbers
	}
	for(let x = 0; x < nurmericArray.length; x++) {    // loop through the array of numbers
        recur(x, nurmericArray);                       // and execute this recursive function for each iteration
    }
    document.getElementById("arrangeResult").innerHTML = `Your numbers have been arranged from lowest to higest: <br/> ${ nurmericArray}`;
}



document.getElementById("arrBtn").addEventListener("click", function() {
	arrangeNum(document.getElementById("userInput").value)
})