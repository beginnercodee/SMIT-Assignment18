// Chapter 1

// // 1. Write a script to greet your website visitor using JS alert box.
// alert("Welcome to JavaScript Alerts!");

// // 2. Write a script to display following message on your web page:
// alert("Error! Please enter a valid password.");

// // 3. Write a script to display following message on your web page: (Hint : Use line break)
// alert("Welcome to JS Land...\nHappy Coding!");

// // 4. Write a script to display following messages in sequence:
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

// // 5. Generate the following message through browser’s developer console:
// console.log("Hello... I can run JS through my web browser's console");

// // 6. Make use of alerts in your new/existing HTML & CSS project.
// // (This instruction is implemented by including this script in the HTML file)

// // 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// // a. Head
// // b. Body (before your page’s HTML)
// // c. Body (inside your page’s HTML)
// // d. Body (after your page’s HTML)
// // (This instruction is implemented by placing the script tag in different sections of the HTML file)

// // Chapter 2

// // 1. Declare a variable called username.
// var username;

// // 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "Jamal Nadeem";

// // 3. Write script to
// // a) Declare a JS variable, titled message.
// // b) Assign “Hello World” to variable message
// // c) Display the message in alert box.
// var message = "Hello World";
// alert(message);

// // 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var studentName = "Jamal Nadeem";
// var studentAge = "21 years old";
// var studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// // 5. Write a script to display the following alert using one JS variable:
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// // 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// var email = "jamalnadeem2004@gmail.com";
// alert("My email address is " + email);

// // 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.Display the following message in an alert box:
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// // 8. Write a script to display this in browser through JS
// document.writeln("Yah! I can write HTML content through JavaScript");

// // 9. Store following string in a variable and show in alert and browser through JS
// "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// // Chapter 3

// // 1. Declare a variable called age & assign to it your age.Show your age in an alert box.
// var age = 21;
// alert("I am " + age + " years old");

// // 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.Show his/her number of visits on your web page.
// // For example: “You have visited this site N times”.
// var visitCount = 14;
// alert("You have visited this site " + visitCount + " times");

// // 3. Declare a variable called birthYear & assign to it your birth year.Show the following message in your browser:
// var birthYear = 2004;
// document.writeln("My birth year is " + birthYear + "<br>Data type of my declared variable is number");

// // 4. A visitor visits an online clothing store www.xyzClothing.com .Write a script to store in variables the following information about him/her:
// // a. Visitor’s name
// // b. Product title
// // c. Quantity i.e. how many products a visitor wants to order
// // Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// var visitorName = "Jamal Nadeem";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");

// // Chapter 4

// // // 1. Declare 3 variables in one statement.
// var var1, var2, var3;

// // // 2. Declare 5 legal & 5 illegal variable names.
// // // Legal variable names
// var legalName1;
// var legalName2;
// var legalName3;
// var legalName4;
// var legalName5;
// // // Illegal variable names
// // var 1illegalName;
// // var illegal-name;
// // var illegal name;
// // var illegal@name;
// // var illegal%name;

// // // 3. Display this in your browser:
// // // a) A heading stating “Rules for naming JS variables”
// document.writeln("<h1>Rules for naming JS variables</h1>");
// // // b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable
// document.writeln("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable<br>");
// // // c) Variables must begin with a ______, ______ or _____.For example $name, _name or name
// document.writeln("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
// // // d) Variable names are case _________
// document.writeln("Variable names are case sensitive<br>");
// // // e) Variable names should not be JS _________
// document.writeln("Variable names should not be JS keywords<br>");

// // // Chapter 5

// // // 1. Write a program that takes two numbers & adds them in a new variable.Then show the result in your browser.
// var num1 = 5;
// var num2 = 3;
// var sum = num1 + num2;
// document.writeln("The sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// // // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// var difference = num1 - num2;
// document.writeln("The difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
// var product = num1 * num2;
// document.writeln("The product of " + num1 + " and " + num2 + " is " + product + "<br>");
// var quotient = num1 / num2;
// document.writeln("The quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
// var modulus = num1 % num2;
// document.writeln("The modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>");

// // // 3. Do the following using JS Mathematic Expressions
// // // a. Declare a variable.
// // // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// var variable;
// document.writeln("Value after variable declaration is: " + variable + "<br>");
// // // c. Initialize the variable with some number.
// variable = 5;
// // // d. Show the value of variable in your browser like “Initial value: 5”.
// document.writeln("Initial value: " + variable + "<br>");
// // // e. Increment the variable.
// variable++;
// // // f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.writeln("Value after increment is: " + variable + "<br>");
// // // g. Add 7 to the variable.
// variable += 7;
// // // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.writeln("Value after addition is: " + variable + "<br>");
// // // i. Decrement the variable.
// variable--;
// // // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.writeln("Value after decrement is: " + variable + "<br>");
// // // k. Show the remainder after dividing the variable’s value by 3.
// var remainder = variable % 3;
// document.writeln("The remainder after dividing the variable's value by 3 is: " + remainder + "<br>");
// // // l. Output : “The remainder is : 0”.
// document.writeln("The remainder is : " + remainder + "<br>");

// // // 4. Cost of one movie ticket is 600 PKR.Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.writeln("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR<br>");

// // // 5. Write a script to display multiplication table of any number in your browser.
// var tableNumber = 4;
// document.writeln("Multiplication Table of " + tableNumber + ":<br>");
// for (var i = 1; i <= 10; i++) {
//     document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }
// // // 6. The Temperature Converter: Write a script to convert temperature from Celsius to Fahrenheit & Fahrenheit to Celsius.
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");
// fahrenheit = 70;
// celsius = (fahrenheit - 32) * 5/9;
// document.writeln(fahrenheit + "°F is " + celsius + "°C<br>");
// // // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.Store the following in variables:
// // // a. Price of item 1
// // // b. Price of item 2
// var priceItem1 = 650;
// var priceItem2 = 100;
// // // c. Ordered quantity of item 1
// var quantityItem1 = 3;
// // // d. Ordered Quantity of item 2
// var quantityItem2 = 7;
// // // e. Shipping charges
// var shippingCharges = 100;
// // // Compute the total cost & show the receipt in your browser.
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.writeln("<h1>Shopping Cart</h1>");
// document.writeln("Price of item 1 is " + priceItem1 + "<br>");
// document.writeln("Quantity of item 1 is " + quantityItem1 + "<br>");
// document.writeln("Price of item 2 is " + priceItem2 + "<br>");
// document.writeln("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.writeln("Shipping Charges " + shippingCharges + "<br><br>");
// document.writeln("Total cost of your order is " + totalCost + " PKR<br>");
// // // 8. Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser.
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage + "%<br>");
// // // 9. Assume we have 10 US dollars & 25 Saudi Riyals.Write a script to convert the total currency to Pakistani Rupees.PKR = (USD 1 = PKR 104.80) & (1 Saudi Riyal = PKR 28).
// var usdToPkr = 104.80;
// var sarToPkr = 28;
// var totalPkr = (10 * usdToPkr) + (25 * sarToPkr);
// document.writeln("<h1>Currency in PKR</h1>");
// document.writeln("Total Currency in PKR: " + totalPkr + " PKR<br>");
// // // 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// // // a. Add 5
// // // b. Multiply by 10
// var number = 5;
// number += 5;
// number *= 10;
// // // c. Divide the result by 2
// number /= 2;
// document.writeln("Final result after arithmetic operations is: " + number + "<br>");
// // // 11. The Age Calculator: Write a script to calculate your age based on your birth year.Current year - Birth year = Age
// var currentYear = 2024;
// var birthYear = 2004;
// var age = currentYear - birthYear;
// document.writeln("<h1>Age Calculator</h1>");
// document.writeln("Current Year: " + currentYear + "<br>");
// document.writeln("Birth Year: " + birthYear + "<br>");
// document.writeln("Your Age is: " + age + "<br>");
// // // 12. The Geometrizer: Write a script to calculate the properties of a circle.
// // // a. Store a radius into a variable.
// var radius = 20;
// // // b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// var circumference = 2 * Math.PI * radius;
// document.writeln("<h1>The Geometrizer</h1>");
// document.writeln("Radius of a circle: " + radius + "<br>");
// document.writeln("The circumference is: " + circumference.toFixed(2) + "<br>");
// // // c. Calculate the area based on the radius, and output “The area is NN”.
// var area = Math.PI * Math.pow(radius, 2);
// document.writeln("The area is: " + area.toFixed(2) + "<br>");
// // // 13. The Lifetime Supply Calculator: Write a script to calculate how many snickers a person would eat in their lifetime.
// // // a. Store your favorite snack into a variable
// var favoriteSnack = "Chocolate Chip";
// // // b. Store your current age into a variable.
// var currentAge = 21;
// // // c. Store a maximum age into a variable.
// var maxAge = 65;
// // // d. Store an estimated amount per day (as a number).
// var amountPerDay = 3;
// // // e. Calculate how many would you eat total for the rest of your life.
// var yearsRemaining = maxAge - currentAge;
// var totalSnacks = yearsRemaining * 365 * amountPerDay;
// document.writeln("<h1>The Lifetime Supply Calculator</h1>");
// document.writeln("Favorite Snack: " + favoriteSnack + "<br>");
// document.writeln("Current Age: " + currentAge + "<br>");
// document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
// document.writeln("Amount of snacks per day: " + amountPerDay + "<br>");
// document.writeln("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");

// // // Chapter 6-9

// // // 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var number = 10;
// document.writeln("The value of a is: " + number + "<br>");
// document.writeln("...........................................<br>");
// number++;
// document.writeln("The value of ++a is: " + number + "<br>");
// document.writeln("Now the value of a is: " + number + "<br><br>");
// number++;
// document.writeln("The value of a++ is: " + (number - 1) + "<br>");
// document.writeln("Now the value of a is: " + number + "<br><br>");
// number--;
// document.writeln("The value of --a is: " + number + "<br>");
// document.writeln("Now the value of a is: " + number + "<br><br>");
// number--;
// document.writeln("The value of a-- is: " + (number + 1) + "<br>");
// document.writeln("Now the value of a is: " + number + "<br>");
// // // 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // // Explain the output at each stage:
// // // --a;  // a is decremented to 1
// // // --a - --b;  // b is decremented to 0, so 1 - 0 = 1
// // // --a - --b + ++b;  // b is incremented to 1, so 1 + 1 = 2
// // // --a - --b + ++b + b--;  // b is used as 1 then decremented to 0, so 2 + 1 = 3
// document.writeln("<br>a is: " + a + "<br>");
// document.writeln("b is: " + b + "<br>");
// document.writeln("result is: " + result + "<br>");
// // // 3. Write a program that takes input a name from user & greet the user.
// var userName = prompt("Enter your name:");
// alert("Welcome " + userName + "!");
// // // 4. Write a program to take input a number from user & display its multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var tableNum = prompt("Enter a number to show its multiplication table:", 5);
// tableNum = parseInt(tableNum);
// document.writeln("<h1>Multiplication Table of " + tableNum + "</h1>");
// for (var i = 1; i <= 10; i++) {
//     document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
// }
// // Take
// // a) Take three subjects name from user and store them in 3 different variables.
// // b) Total marks for each subject is 100, store it in another variable.
// // c) Take obtained marks for first subject from user and stored it in different variable.
// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = 300;
// var marksObtained = subject1 + subject2 + subject3;
// var percentage = (marksObtained / totalMarks) * 100;
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage.toFixed(2) + "%<br>");


// // Class Task
// var subejct1 = prompt("Enter name of Subject 1:");
// var subejct2 = prompt("Enter name of Subject 2:");
// var subejct3 = prompt("Enter name of Subject 3:");
// var totalMarksPerSubject = 100;
// var totalMarks = totalMarksPerSubject * 3;
// var marks1 = parseFloat(prompt("Enter marks obtained in " + subejct1 + ":"));
// var marks2 = parseFloat(prompt("Enter marks obtained in " + subejct2 + ":"));
// var marks3 = parseFloat(prompt("Enter marks obtained in " + subejct3 + ":"));
// var marksObtained = marks1 + marks2 + marks3;
// var percentage = (marksObtained / totalMarks) * 100;
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
// document.writeln("<tr><td>" + subejct1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
// document.writeln("<tr><td>" + subejct2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
// document.writeln("<tr><td>" + subejct3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
// document.writeln("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + marksObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
// document.writeln("</table>");

// // // // Chapter 9-11
// // // // 1. Write a program to take “city” name as input from user.If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”
// var city = prompt("Enter city name:");
// if (city === "karachi") {
//     alert("Welcome to city of lights");
// }

// // // // 2. Write a program to take "gender" as input from user. If the user is male, show "Good Morning Sir" and if the user is female, show "Good Morning Ma'am".
// var gender = prompt("Enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am");
// }

// // // // 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// var signalColor = prompt("Enter traffic signal color (red, yellow, green):");
// if (signalColor === "red") {
//     alert("Must Stop");
// } else if (signalColor === "yellow") {
//     alert("Ready to move");
// } else if (signalColor === "green") {
//     alert("Move now");
// }

// // // // 4. Write a program to take input remaining fuel in car (in litres) from user.If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”.
// var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// // // // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// // // // a. 
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// // // // b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// // // // c.
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// // // // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // // // e.
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// // // // f.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// // // // 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// var marks1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// var marks2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// var marks3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// var marksObtained = marks1 + marks2 + marks3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage + "%<br>");
// document.writeln("Grade: " + grade + "<br>");
// document.writeln("Remarks: " + remarks + "<br>");

// // // // 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.Then ask user to guess the secret number.If user guesses the same number, show “Bingo! Correct answer”.If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// var secretNumber = 7;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1) {
//     alert("Close enough to the correct answer");
// }

// // // // 8. Write a program to check whether the given number is divisible by 3.If it is, show the message to the user “The number is divisible by 3”.Otherwise show “The number is not divisible by 3”.
// var number = parseInt(prompt("Enter a number to check divisibility by 3:"));
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }

// // // // 9. Write a program that checks whether the given input is an even number or an odd number.
// var num = parseInt(prompt("Enter a number to check if it is even or odd:"));
// if (num % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

// // // // 10. Write a program that takes temperature as input and shows a message based on following criteria:
// // // // a. T > 40 then “It is too hot outside.”
// // // // b. T > 30 then “The Weather today is Normal.”
// var temperature = parseFloat(prompt("Enter the temperature:"));
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }

// // // // 11. Write a program to create a calculator for +, -, *, / & % using if statements.Take the following input:
// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// var operator = prompt("Enter an operator (+, -, *, /, %):");
// var result;
// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// } else if (operator === "%") {
//     result = num1 % num2;
// }
// alert("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);

// // // // Chapter 12-13

// // // // 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lowercase letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122, 0=48, 9=57).
// var char = prompt("Enter a character (number or letter):");
// var asciiCode = char.charCodeAt(0);
// if (asciiCode >= 48 && asciiCode <= 57) {
//     alert("The input is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("The input is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("The input is a lowercase letter.");
// } else {
//     alert("The input is neither a number nor a letter.");
// }

// // // // // 2. Write a JavaScript program that accepts two integers and displays the larger.Also show if the two integers are equal.
// var int1 = parseInt(prompt("Enter first integer:"));
// var int2 = parseInt(prompt("Enter second integer:"));
// if (int1 > int2) {
//     alert(int1 + " is the larger integer.");
// } else if (int2 > int1) {
//     alert(int2 + " is the larger integer.");
// } else {
//     alert("Both integers are equal.");
// }

// // // // // 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// var number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

// // // // // 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
// var char = prompt("Enter a character:");
// var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// if (vowels.includes(char)) {
//     alert("True, it is a vowel.");
// } else {
//     alert("False, it is not a vowel.");
// }

// // // // // 5. Write a program that
// // // // // a. Store correct password in a JS variable.
// // var correctPassword = "mypassword123";
// // // // // b. Ask user to enter his/her password
// // var userPassword = prompt("Enter your password:");
// // // // // c. Validate the two passwords:
// if (userPassword === "") {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }

// // // // // 6. This if/else statement does not work. Try to fix it:
// // 

// // corrected code:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// // // // // 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.Then display the following message based on the time entered by user:
// var time = parseInt(prompt("Enter time in 24 hours format (e.g., 1900 for 7pm):"));

// if (time >= 0 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
// } else {
//     alert("Invalid time format. Please enter a valid time in 24-hour format.");
// }

// // // // Chapter 14-16
// // // // 1. Declare an empty array using JS literal notation to store student names in future.
// var studentNames = [];
// // // // // 2. Declare an empty array using JS object notation to store student names in future.
// var studentNamesObj = new Array();
// // // // // 3. Declare and initialize a strings array.
// var stringArray = ["apple", "banana", "cherry"];
// // // // // 4. Declare and initialize a numbers array.
// var numbersArray = [1, 2, 3, 4, 5];
// // // // // 5. Declare and initialize a boolean array.
// var booleanArray = [true, false, true];
// // // // // 6. Declare and initialize a mixed array.
// var mixedArray = [1, "apple", true, 3.14];
// // // // // 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).Show the listed qualifications in your browser like:
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.writeln("<h1>Qualifications in Pakistan:</h1>");
// document.writeln("<ul>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.writeln("<li>" + qualifications[i] + "</li>");
// }
// document.writeln("</ul>");
// // // // // 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var studentNames = ["Jamal", "Ahmed", "Sara"];
// var studentScores = [400, 350, 450];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;
//     document.writeln("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
// }
// // // // // 9. Initialize an array with color names. Display the array elements in your browser.
// var colors = ["Red", "Green", "Blue", "Yellow"];
// document.writeln("<h1>Colors:</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddBeginning);
// document.writeln("<h1>Updated Colors (after adding to beginning):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.Display the updated array in your browser.
// var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddEnd);
// document.writeln("<h1>Updated Colors (after adding to end):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // c. Add two more colors to the beginning of the array.Display the updated array in your browser.
// var color1 = prompt("Enter first color to add to the beginning of the array:");
// var color2 = prompt("Enter second color to add to the beginning of the array:");
// colors.unshift(color1, color2);
// document.writeln("<h1>Updated Colors (after adding two to beginning):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // d. Delete the first color in the array.Display the updated array in your browser.
// colors.shift();
// document.writeln("<h1>Updated Colors (after deleting first color):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // e. Delete the last color in the array.Display the updated array in your browser.
// colors.pop();
// document.writeln("<h1>Updated Colors (after deleting last color):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // f. Ask the user at which index he/she wants to add a color & color name.Then add the color to desired position & display the updated array in your browser.
// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorNameToAdd = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorNameToAdd);
// document.writeln("<h1>Updated Colors (after adding at index " + indexToAdd + "):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.Then remove the same number of color(s) from user-defined position & display the updated array in your browser.
// var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// document.writeln("<h1>Updated Colors (after deleting from index " + indexToDelete + "):</h1>");
// for (var i = 0; i < colors.length; i++) {
//     document.writeln(colors[i] + "<br>");
// }
// // // // // 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var studentScores = [320, 230, 480, 120];
// document.writeln("<h1>Student Scores (Original):</h1>");
// document.writeln(studentScores.join(", ") + "<br>");
// studentScores.sort(function(a, b){
//     return a-b
// });
// document.writeln("<h1>Student Scores (Sorted in Ascending Order):</h1>");
// document.writeln(studentScores.join(", ") + "<br>");
// // // // // 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 5);
// document.writeln("<h1>Cities:</h1>");
// document.writeln("All Cities: " + cities.join(", ") + "<br>");
// document.writeln("Selected Cities: " + selectedCities.join(", ") + "<br>");
// // // // // 12. Write a program to create a single string from the below mentioned array:
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.writeln("<h1>Array to String:</h1>");
// document.writeln("Array: " + arr.join(", ") + "<br>");
// document.writeln("String: " + singleString + "<br>");
// // // // // 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
// var fifoArray = [];
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Monitor");
// document.writeln("<h1>FIFO (First In First Out):</h1>");
// document.writeln("Devices:<br>");
// while (fifoArray.length > 0) {
//     document.writeln(fifoArray.shift() + "<br>");
// }
// // // // // 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (LIFO-Last In First Out)
// var lifoArray = [];
// lifoArray.push("Keyboard");
// lifoArray.push("Mouse");
// lifoArray.push("Printer");
// lifoArray.push("Monitor");
// document.writeln("<h1>LIFO (Last In First Out):</h1>");
// document.writeln("Devices:<br>");
// while (lifoArray.length > 0) {
//     document.writeln(lifoArray.pop() + "<br>");
// }
// // // // // 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.Write a program to display the following dropdown/select menu in your browser using document.write() method:
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.writeln("<h1>Phone Manufacturers:</h1>");
// document.writeln("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.writeln("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.writeln("</select>");

// // // // // Chapter 17-20
// // // // // 1. Declare and initialize an empty multidimensional array.
// var multiArray = [[]];
// // // // // 2. Declare and initialize a multidimensional array representing the following matrix:
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// // // // // 3. Write a program to print numeric counting from 1 to 10.
// document.writeln("<h1>Numeric Counting from 1 to 10:</h1>");
// for (var i = 1; i <= 10; i++) {
//     document.writeln(i + "<br>");
// }
// // // // // 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var tableNum = parseInt(prompt("Enter a number to show its multiplication table:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
// document.writeln("<h1>Multiplication Table of " + tableNum + ":</h1>");
// for (var i = 1; i <= tableLength; i++) {
//     document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
// }
// // // // // 5. Write a program to print items of the following array using for loop:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.writeln("<h1>Fruits:</h1>");
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln(fruits[i] + "<br>");
// }
// document.writeln("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln("Element at index " + i + " is " + fruits[i] + "<br>");
// }
// // // // // 6. Generate the following series in your browser. See example output.
// document.writeln("<h1>Counting:</h1>");
// for (var i = 1; i <= 15; i++) {
//     document.writeln(i + ", ");
// }
// document.writeln("<h1>Reverse Counting:</h1>");
// for (var i = 10; i >= 1; i--) {
//     document.writeln(i + ", ");
// }
// document.writeln("<h1>Even:</h1>");
// for (var i = 0; i <= 20; i += 2) {
//     document.writeln(i + ", ");
// }
// document.writeln("<h1>Odd:</h1>");
// for (var i = 1; i < 20; i += 2) {
//     document.writeln(i + ", ");
// }
// document.writeln("<h1>Series:</h1>");
// for (var i = 2; i <= 20; i += 2) {
//     document.writeln(i + "k, ");
// }
// // // // // 7. Write a program to enable “search by user input” in an array.
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var found = false;
// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i].toLowerCase() === userSearch.toLowerCase()) {
//         alert(userSearch + " is available at index " + i + " in our bakery.");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry. " + userSearch + " is not available in our bakery.");
// }
// // // // // 8. Write a program to identify the largest number in the given array.
// var numbers = [24, 53, 78, 91, 12];
// var largestNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];
//     }
// }
// document.writeln("<h1>Largest Number:</h1>");
// document.writeln("The largest number in the array is: " + largestNumber);
// // // // // 9. Write a program to identify the smallest number in the given array.
// var smallestNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
// }
// document.writeln("<h1>Smallest Number:</h1>");
// document.writeln("The smallest number in the array is: " + smallestNumber);
// // // // // 10. Write a program to print multiples of 5 ranging from 1 to 100.
// document.writeln("<h1>Multiples of 5 from 1 to 100:</h1>");
// for (var i = 5; i <= 100; i += 5) {
//     document.writeln(i + ", ");
// }

// // // // // Chapter 21-25
// // // // // 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome to our website.");

// // // // // 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhone.length;
// document.writeln("<h1>Favorite Mobile Phone Model:</h1>");
// document.writeln("Your favorite mobile phone model is: " + favoritePhone + "<br>");
// document.writeln("Length of your input: " + inputLength + " characters<br>");

// // // // // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
// var word = "Pakistani";
// var indexOfN = word.indexOf("n");
// document.writeln("<h1>Index of 'n' in 'Pakistani':</h1>");
// document.writeln("The index of letter 'n' in the word 'Pakistani' is: " + indexOfN + "<br>");

// // // // // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var phrase = "Hello World";
// var lastIndexOfL = phrase.lastIndexOf("l");
// document.writeln("<h1>Last Index of 'l' in 'Hello World':</h1>");
// document.writeln("The last index of letter 'l' in the phrase 'Hello World' is: " + lastIndexOfL + "<br>");

// // // // // 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var charAtIndex3 = word.charAt(3);
// document.writeln("<h1>Character at Index 3 in 'Pakistani':</h1>");
// document.writeln("The character at index 3 in the word 'Pakistani' is: " + charAtIndex3 + "<br>");

// // // // // 6. Repeat Q1 using string concat() method.
// var fullNameConcat = firstName.concat(" ", lastName);
// alert("Hello, " + fullNameConcat + "! Welcome to our website.");

// // // // // 7. Write a program to replace the “Hyder” with “Islam” in the word “Hyderabad” and display the result in your browser.
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.writeln("<h1>City Name Replacement:</h1>");
// document.writeln("Original city name: " + city + "<br>");
// document.writeln("New city name: " + newCity + "<br>");

// // // // // 8. Write a program to replace all occurrences of “and” with “&” in the string “Ali and Sami are best friends. They play cricket and football together.” Display the result in your browser.
// var sentence = "Ali and Sami are best friends. They play cricket and football together.";
// var newSentence = sentence.replace(/and/g, "&");
// document.writeln("<h1>String Replacement:</h1>");
// document.writeln("Original sentence: " + sentence + "<br>");
// document.writeln("New sentence: " + newSentence + "<br>");

// // // // // 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var strNumber = "472";
// var numNumber = parseInt(strNumber);
// document.writeln("<h1>String to Number Conversion:</h1>");
// document.writeln("String value: " + strNumber + " (type: " + typeof strNumber + ")<br>");
// document.writeln("Number value: " + numNumber + " (type: " + typeof numNumber + ")<br>");

// // // // // 10. Write a program that takes user input. Convert and show the input in capital letters.
// var userInput = prompt("Enter a string to convert to uppercase:");
// var upperCaseInput = userInput.toUpperCase();
// document.writeln("<h1>Uppercase Conversion:</h1>");
// document.writeln("Original input: " + userInput + "<br>");
// document.writeln("Uppercase input: " + upperCaseInput + "<br>");

// // // // // 11. Write a program that takes user input. Convert and show the input in title case.
// var titleCaseInput = userInput.toLowerCase().split(" ").map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(" ");
// document.writeln("<h1>Title Case Conversion:</h1>");
// document.writeln("Original input: " + userInput + "<br>");
// document.writeln("Title case input: " + titleCaseInput + "<br>");

// // // // // 12. Write a program that converts the variable num to string. var num = 35. Show the result in your browser.
// var num = 35;
// var strNum = num.toString();
// document.writeln("<h1>Number to String Conversion:</h1>");
// document.writeln("Number value: " + num + " (type: " + typeof num + ")<br>");
// document.writeln("String value: " + strNum + " (type: " + typeof strNum + ")<br>");

// // // // // 13. Write a program that takes user input and stores username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . , !] - refer to ASCII table at the end of this document.
// var username = prompt("Enter a username:");
// var specialSymbols = /[@.,!]/;
// if (specialSymbols.test(username)) {
//     alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//     alert("Username is valid.");
// }

// // // // // 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userSearchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var itemFound = false;
// for (var i = 0; i < items.length; i++) {
//     if (items[i].toLowerCase() === userSearchItem.toLowerCase()) {
//         alert(userSearchItem + " is available at index " + i + " in our bakery.");
//         itemFound = true;
//         break;
//     }
// }
// if (!itemFound) {
//     alert("We are sorry. " + userSearchItem + " is not available in our bakery.");
// }

// // // // // 15. Write a program to take password as input from user. The password must qualify these requirements:
// // a. It should contain at least 6 characters.
// // b. It should contain both alphabets and numbers.
// // c. It should not start with a number.
// var password = prompt("Enter a password:");
// var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
// if (!passwordPattern.test(password)) {
//     alert("Password must be at least 6 characters long and contain both letters and numbers.");
// } else if (/^\d/.test(password)) {
//     alert("Password should not start with a number.");
// } else {
//     alert("Password is valid.");
// }

// // // // // 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.writeln("<h1>University Array:</h1>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.writeln(universityArray[i] + "<br>");
// }

// // // // // 17. Write a program to display the last character of a user input.
// var userInputLastChar = prompt("Enter a string to find its last character:");
// var lastCharacter = userInputLastChar.charAt(userInputLastChar.length - 1);
// document.writeln("<h1>Last Character:</h1>");
// document.writeln("The last character of your input is: " + lastCharacter + "<br>");

// // // // // 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var text = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var regex = new RegExp(wordToCount, "gi");
// var matches = text.match(regex);
// var count = matches ? matches.length : 0;
// document.writeln("<h1>Word Occurrence Count:</h1>");
// document.writeln("The word '" + wordToCount + "' occurs " + count + " times in the given string.<br>"); 

// // // // // // Chapter 26-30
// // // // // // 1. Write a program that takes a positive integer from user & display the following in your browser:
// var positiveInteger = parseInt(prompt("Enter a positive integer:"));
// document.writeln("<h1>Number Analysis:</h1>");
// document.writeln("Number: " + positiveInteger + "<br>");
// document.writeln("Round off value: " + Math.round(positiveInteger) + "<br>");
// document.writeln("Floor value: " + Math.floor(positiveInteger) + "<br>");
// document.writeln("Ceil value: " + Math.ceil(positiveInteger) + "<br>");

// // // // // // 2. Write a program that takes a negative floating point number from user & display the following in your browser:
// var negativeFloat = parseFloat(prompt("Enter a negative floating point number:"));
// document.writeln("<h1>Number Analysis:</h1>");
// document.writeln("Number: " + negativeFloat + "<br>");
// document.writeln("Round off value: " + Math.round(negativeFloat) + "<br>");
// document.writeln("Floor value: " + Math.floor(negativeFloat) + "<br>");
// document.writeln("Ceil value: " + Math.ceil(negativeFloat) + "<br>");

// // // // // // 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5.
// var numberToAbs = parseFloat(prompt("Enter a number to find its absolute value:"));
// var absoluteValue = Math.abs(numberToAbs);
// document.writeln("<h1>Absolute Value:</h1>");
// document.writeln("The absolute value of " + numberToAbs + " is: " + absoluteValue + "<br>");

// // // // // // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.writeln("<h1>Dice Simulation:</h1>");
// document.writeln("You rolled a " + diceValue + "<br>");

// // // // // // 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
// var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
// document.writeln("<h1>Coin Toss Simulation:</h1>");
// document.writeln("You got: " + coinToss + "<br>");

// // // // // // 6. Write a program that shows a random number between 1 and 100 in your browser.
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.writeln("<h1>Random Number:</h1>");
// document.writeln("Random number between 1 and 100: " + randomNumber + "<br>");

// // // // // // 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// // // a. 50
// // // b. 50kgs
// // // c. 50.2kgs
// // // d. 50.2kilograms
// var weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(weightInput);
// document.writeln("<h1>Weight Display:</h1>");
// document.writeln("Your weight is: " + weight + " kilograms<br>");

// // // // // // 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     alert("Congratulations! You guessed the secret number.");
// } else {
//     alert("Sorry, the secret number was " + secretNumber + ". Try again!");
// }

// // // // // // Chapter 31-34
// // // // // // 1. Write a program that displays current date and time in your browser.
// var currentDate = new Date();
// document.writeln("<h1>Current Date and Time:</h1>");
// document.writeln(currentDate.toString() + "<br>");

// // // // // // 2. Write a program that alerts the current month in words. For example December.
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = months[currentDate.getMonth()];
// alert("Current month: " + currentMonth);

// // // // // // 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = days[currentDate.getDay()];
// alert("Today is: " + currentDay);

// // // // // // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// if (currentDay === "Sat" || currentDay === "Sun") {
//     alert("It's Fun day!");
// }

// // // // // // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
// var currentDateOfMonth = currentDate.getDate();
// if (currentDateOfMonth < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// // // // // // 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
// var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));
// document.writeln("<h1>Minutes Since Epoch:</h1>");
// document.writeln("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch + "<br>");

// // // // // // 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var hours = currentDate.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// // // // // // 8. Write a program that creates a Date object for the last day of the month and assigns it to variable named laterDate. Show the value of laterDate in your browser.
// var laterDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
// document.writeln("<h1>Later Date:</h1>");
// document.writeln("Last day of the month: " + laterDate.toString() + "<br>");

// // // // // // 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// var ramadanStartDate = new Date("April 13, 2021");
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();
// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(daysPast + " days have passed since the start of Ramadan.");

// // // // // // 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var referenceDate = new Date("January 1, 2015");
// var currentDate = new Date();
// var timeDifferenceSeconds = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000);
// document.writeln("<h1>Seconds Elapsed Since January 1, 2015:</h1>");
// document.writeln("Seconds elapsed: " + timeDifferenceSeconds + " seconds<br>");

// // // // // // 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
// var currentDateTime = new Date();
// var currentHours = currentDateTime.getHours();
// currentDateTime.setHours(currentHours + 1);
// document.writeln("<h1>Date Object One Hour Ahead:</h1>");
// document.writeln("Current date and time: " + new Date() + "<br>");
// document.writeln("Date and time one hour ahead: " + currentDateTime + "<br>");

// // // // // // 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate.toString());

// // // // // // 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// var userAge = parseInt(prompt("Enter your age:"));
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;
// document.writeln("<h1>Birth Year Calculation:</h1>");
// document.writeln("Your age: " + userAge + "<br>");
// document.writeln("Your birth year is: " + birthYear + "<br>");


// // // // // // 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// // a. Customer Name
// // b. Current Month
// // c. Number of units
// // d. Charges per unit
// // e. Net Amount Payable (within Due Date)
// // f. Late Payment Surcharge
// // g. Gross Amount Payable (after Due Date)
// var customerName = prompt("Enter customer name:");
// var currentMonth = months[new Date().getMonth()];
// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = 16;
// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var latePaymentSurcharge = 350;
// var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
// document.writeln("<h1>K-Electric Bill:</h1>");
// document.writeln("Customer Name: " + customerName + "<br>");
// document.writeln("Current Month: " + currentMonth + "<br>");
// document.writeln("Number of Units: " + numberOfUnits + "<br>");
// document.writeln("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
// document.writeln("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
// document.writeln("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.writeln("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br>");

// // // // // // Chapter 35-38
// // // // // // 1. Write a function that displays current date & time in your browser.
// function displayCurrentDateTime() {
//     var currentDateTime = new Date();
//     document.writeln("<h1>Current Date and Time:</h1>");
//     document.writeln(currentDateTime.toString() + "<br>");
// }

// // // // // // // 2. Write a function that takes first & last name and then it greets the user using his full name.
// function greetUser() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "! Welcome to our website.");
// }

// // // // // // // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function addTwoNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var sum = num1 + num2;
//     return sum;
// }

// // // // // // // 4. Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {        case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         case "%":
//             result = num1 % num2;
//             break;
//         default:
//             alert("Invalid operator. Please use +, -, *, /, or %.");
//             return null;
//     }
//     return result;
// }

// // // // // // // 5. Write a function that squares its argument.
// function square(num) {
//     return num * num;
// }

// // // // // // // 6. Write a function that computes factorial of a number.
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         var fact = 1;
//         for (var i = 2; i <= n; i++) {
//             fact *= i;
//         }
//         return fact;
//     }
// }

// // // // // // // 7. Write a function that take start and end number as inputs & display counting in your browser.
// function displayCounting(start, end) {
//     document.writeln("<h1>Counting from " + start + " to " + end + ":</h1>");
//     for (var i = start; i <= end; i++) {
//         document.writeln(i + "<br>");
//     }
// }

// // // // // // // 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
// function calculateHypotenuse(base, perpendicular) {
//     function square(num) {
//         return num * num;
//     }
//     var hypotenuseSquared = square(base) + square(perpendicular);
//     var hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
// }

// // // // // // // 9. Write a function that calculates the area of a rectangle. A = width * height
// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// // // // // // // 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//     var reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }

// // // // // // // 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function toTitleCase(str) {
//     return str.toLowerCase().split(" ").map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }

// // // // // // // 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// // // // // // // 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// // // // // // // 14. The Geometrizer
// // // Create 2 functions that calculate properties of a circle, using the definitions here.
// // // Create a function called calcCircumference:
// function calcCircumference(radius) {
//     return 2 * Math.PI * radius;
// }

// // // Create a function called calcArea:
// function calcArea(radius) {
//     return Math.PI * radius * radius;
// }

// // // // // // // Chapter 38-42
// // // // // // // 1. Write a custom function power(a, b), to calculate the value of a raised to b.
function power(a, b) {
    return Math.pow(a, b);
}
// // // // // // // 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
// // // // // // // 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S-a)(S-b)(S-c) where S = (a+b+c)/2 Calculate area of triangle using 2 functions
function calculateArea(a, b, c) {
    var S = (a + b + c) / 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}
// // // // // // // 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. There should be 3 functions one is the mainFunction and other are for average and percentage.
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calculatePercentage(marks1, marks2, marks3) {
    var totalMarks = 300;
    var obtainedMarks = marks1 + marks2 + marks3;
    return (obtainedMarks / totalMarks) * 100;
}
function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);
    return {
        average: average,
        percentage: percentage
    };
}
// // // // // // // 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            return i;
        }
    }
    return -1; // Return -1 if character is not found
}
// // // // // // // 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}
// // // // // // // 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” such occurrences are ea, ea, ui.
function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text.charAt(i);
        var nextChar = text.charAt(i + 1);
        if (vowels.indexOf(currentChar) !== -1 && vowels.indexOf(nextChar) !== -1) {
            count++;
        }
    }
    return count;
}
// // // // // // // 8. The distance between the two cities (in km.) is input through the keyboard. Write four functions to convert and display this distance in meters, feet, inches and centimeters.
function convertToMeters(km) {
    return km * 1000;
}
function convertToFeet(km) {
    return km * 3280.84;
}
function convertToInches(km) {
    return km * 39370.1;
}
function convertToCentimeters(km) {
    return km * 100000;
}
// // // // // // // 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12.00;
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        return overtimeHours * overtimeRate;
    } else {
        return 0; // No overtime pay if hours worked is 40 or less
    }
}
// // // // // // // 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
function calculateCurrencyNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    var remainingAmount = amount % 100;
    var notes50 = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;
    var notes10 = Math.floor(remainingAmount / 10);
    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}
// // // // // // // Chapter 43-48
// // // // // // // 1. Show an alert box on click on a link.
function showAlert() {
    alert("You clicked the link!");
}
// // // // // // // 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
function showImageAlert() {
    alert("You clicked the image!");
}
// // // // // // // 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// // // // // // // 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
function changeImageOnMouseOver(image) {
    image.src = "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_user_personalization&w=740&q=80";
}
function resetImageOnMouseOut(image) {
    image.src = "https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg";
}
// // // // // // // 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
var counterValue = 0;
function increaseCounter() {
    counterValue++;
    document.getElementById("counter").innerText = counterValue;
}
function decreaseCounter() {
    counterValue--;
    document.getElementById("counter").innerText = counterValue;
}
