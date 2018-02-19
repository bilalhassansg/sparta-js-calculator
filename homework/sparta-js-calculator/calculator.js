// bring out the calculator
alert("Please select which calculation you choose to use.")

// Choice of calculator
var calc_choice = prompt("Please select your type of calculator. Basic(1) or Advanced(2)")

if (calc_choice == 1) {
	alert("You have selected Basic. Thank you!");
	var basicinput1 = prompt("Please type in the first digit");
	var operation = prompt("Please select the operation: 1(+), 2(-), 3(*) or 4(/)");
	var basicinput2 = prompt ("Please input the second digit");
	var answerplus = basicinput1 + basicinput2;
	var answerminus = basicinput1 - basicinput2;
	var answermultiply = basicinput1 * basicinput2;
	var answerdivide = basicinput1 / basicinput2;

	if (operation == 1) 
	{
		alert(answerplus);
	}
	else if (operation == 2)
	{	
		alert(answerminus)
	}
	else if (operation == 3)
	{
		alert(answermultiply)
	}
	else if (operation == 4)
	{
		alert (answerdivide)
	}
	else 
	{
		alert("I do not understand what you are trying to do.")
	}
}
else
{
	alert("You have selected advanced. Lets see how advanced you want to go...");
}