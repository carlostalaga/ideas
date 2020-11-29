"use strict",

console.log("hello");

// c# example
// for (int bottleNumber = 100; 1 <= bottleNumber; bottleNumber--)
// {
// 	Console.WriteLine("{0} bottles of beer on the wall, {0} bottles of beer", bottleNumber);
// 	Console.WriteLine($"Take one down and pass it around, {bottleNumber - 1} bottles of beer on the wall");		   
// }


// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall... 

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall... 

for (var bottles = 99 ; bottles >= 1; bottles--) {
	
	var minusBottles = bottles - 1;

	if (bottles > 1 ) {

		var msg = bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.' + '\n' + ' Take one down, pass it around, ' + minusBottles + ' bottles of beer on the wall... ';

	} else if (bottles === 1 ) {

		var msg = 'No more bottles of beer on the wall, no more bottles of beer.  ' + '\n' + ' Go to the store and buy some more, ' + bottles + ' bottles of beer on the wall... ';
	} else {
		//nah
	}



  var x = document.createElement("LI");
  var t = document.createTextNode(msg);
  x.appendChild(t);
  document.getElementById("mySong").appendChild(x);
  
  }