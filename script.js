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
var studentNames = [];
// // // // 2. Declare an empty array using JS object notation to store student names in future.
var studentNamesObj = new Array();
// // // // 3. Declare and initialize a strings array.
var stringArray = ["apple", "banana", "cherry"];
// // // // 4. Declare and initialize a numbers array.
var numbersArray = [1, 2, 3, 4, 5];
// // // // 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true];
// // // // 6. Declare and initialize a mixed array.
var mixedArray = [1, "apple", true, 3.14];
// // // // 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).Show the listed qualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.writeln("<h1>Qualifications in Pakistan:</h1>");
document.writeln("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.writeln("<li>" + qualifications[i] + "</li>");
}
document.writeln("</ul>");
// // // // 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentNames = ["Jamal", "Ahmed", "Sara"];
var studentScores = [400, 350, 450];
var totalMarks = 500;
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.writeln("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
}
// // // // 9. Initialize an array with color names. Display the array elements in your browser.
var colors = ["Red", "Green", "Blue", "Yellow"];
document.writeln("<h1>Colors:</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddBeginning);
document.writeln("<h1>Updated Colors (after adding to beginning):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.Display the updated array in your browser.
var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);
document.writeln("<h1>Updated Colors (after adding to end):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // c. Add two more colors to the beginning of the array.Display the updated array in your browser.
var color1 = prompt("Enter first color to add to the beginning of the array:");
var color2 = prompt("Enter second color to add to the beginning of the array:");
colors.unshift(color1, color2);
document.writeln("<h1>Updated Colors (after adding two to beginning):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // d. Delete the first color in the array.Display the updated array in your browser.
colors.shift();
document.writeln("<h1>Updated Colors (after deleting first color):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // e. Delete the last color in the array.Display the updated array in your browser.
colors.pop();
document.writeln("<h1>Updated Colors (after deleting last color):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // f. Ask the user at which index he/she wants to add a color & color name.Then add the color to desired position & display the updated array in your browser.
var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
var colorNameToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorNameToAdd);
document.writeln("<h1>Updated Colors (after adding at index " + indexToAdd + "):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.Then remove the same number of color(s) from user-defined position & display the updated array in your browser.
var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.writeln("<h1>Updated Colors (after deleting from index " + indexToDelete + "):</h1>");
for (var i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// // // // 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var studentScores = [320, 230, 480, 120];
document.writeln("<h1>Student Scores (Original):</h1>");
document.writeln(studentScores.join(", ") + "<br>");
studentScores.sort(function(a, b){
    return a-b
});
document.writeln("<h1>Student Scores (Sorted in Ascending Order):</h1>");
document.writeln(studentScores.join(", ") + "<br>");
// // // // 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 5);
document.writeln("<h1>Cities:</h1>");
document.writeln("All Cities: " + cities.join(", ") + "<br>");
document.writeln("Selected Cities: " + selectedCities.join(", ") + "<br>");
// // // // 12. Write a program to create a single string from the below mentioned array:
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.writeln("<h1>Array to String:</h1>");
document.writeln("Array: " + arr.join(", ") + "<br>");
document.writeln("String: " + singleString + "<br>");
// // // // 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
document.writeln("<h1>FIFO (First In First Out):</h1>");
document.writeln("Devices:<br>");
while (fifoArray.length > 0) {
    document.writeln(fifoArray.shift() + "<br>");
}
// // // // 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (LIFO-Last In First Out)
var lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
document.writeln("<h1>LIFO (Last In First Out):</h1>");
document.writeln("Devices:<br>");
while (lifoArray.length > 0) {
    document.writeln(lifoArray.pop() + "<br>");
}
// // // // 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.Write a program to display the following dropdown/select menu in your browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln("<h1>Phone Manufacturers:</h1>");
document.writeln("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.writeln("<option>" + phoneManufacturers[i] + "</option>");
}
document.writeln("</select>");
