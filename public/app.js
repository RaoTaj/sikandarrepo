                                    // Changing Case:

// QNO-1:
// var inp_A = prompt("Enter word here: ")
// var b = inp_A.toUpperCase();
// document.write(b);

// QNO-2:
// var inp_A = prompt("Enter word here: ")
// var b = inp_A.toLowerCase();
// document.write(b);

                                    // Strings: Measuring Length & Extracting Parts:
// QNO-1:
// var e_mobile = prompt("Enter Mobile Model here: ");
// var l = e_mobile.length;
// document.write("The length of word is: ", l);

                                    // Strings: finding segments:
// QNO-1:
// var country = ("Pakistani");
// var c = country.indexOf("n");
// document.write("The index of n in Pakistani is:  ", c);

// QNO-2:
// var inp_A = prompt("Enter your name here: ");
// var a = /[$\d|^$\d]^^\d[[a-zA-Z]{2}|\{3,}]/;
// if(inp_A == a){
//     alert("Enter a valid username");
// }else{
//     alert("Congratulations")
// }

// QNO-3:
// const count_a = (str, searchValue) => {
//         let count = 0,
//           i = 0;
//         while (true) {
//           const r = str.indexOf(searchValue, i);
//           if (r !== -1) [count, i] = [count + 1, r + 1];
//           else return count;
//         }
//       }; 
//       console.log(count_a("The quick brown fox jumps over the lazy dog", 'the'));
//       console.log(count_a("The quick brown fox jumps over the lazy dog", 'fox'));
        
                            //Strings: finding a character at a location

// QNO-1:
// var country = ("Pakistani");
// var c = country.charAt("3");
// document.write("The index of n in Pakistani is:  ", c);

                            //Strings: replacing characters
// QNO-1:
// var a="hyderabad"
// var b = a.replace("hyder","Islam")
// document.write(b)

// QNO-2
// var string="Ali and Sami are best friends. They play cricket and football together."
// var replace=string.replace(/and/g,"&")
// document.write(replace)

                            // Rounding Numbers:
// QNO-1:
    // Part b:
    // var inp_A = prompt("Enter number here: ");
    // var meth = Math.round(inp_A);
    // document.write(meth);

    // Part c:
    // var inp_A = prompt("Enter number here: ");
    // var meth = Math.floor(inp_A);
    // document.write(meth);
    
    // Part d:
    // var inp_A = prompt("Enter number here: ");
    // var meth = Math.ceil(inp_A);
    // document.write(meth);

    // QNO-2:

    // Part b:
    // var inp_A = prompt("Enter number here: ");
    // var meth = Math.round(inp_A);
    // document.write(meth);
    
    // Part c:
    // var inp_A = prompt("Enter number here: ");
    // var meth = Math.floor(inp_A);
    // document.write(meth);

    // Part d:
    // var inp_A = prompt("Enter number here: ");
    // var meth = Math.ceil(inp_A);
    // document.write(meth);

                                // Generating Random Numbers:
    // QNO-1:
    // var dice = Math.floor(Math.random()*6+1);
    // console.log(dice);
    
    // QNO-2:
    // var toss = Math.floor(Math.random()*2+1);
    // if(toss == 2){
    //     console.log("Heads");
    // }else{
    //     console.log("Tails");
    // }

    // QNO-3:
    // var inp_A = prompt("Enter Number here: ");
    // var sec = Math.floor(Math.random()*10+1)
    // if(inp_A == sec){
    //     console.log("Congratulations Sir !!!");
    // }else{
    //     console.log("Better luck next time")
    // }
                           // Converting strings to integers and decimals
    // QNO-1:
    // var inp_A = parseInt(prompt("Enter your weight here: "));
    // document.write("Your weight is ",Math.round(inp_A));
    // document.write("</br>");
    // document.write("Your weight is ",Math.round(inp_A), "kgs");
    // document.write("</br>");
    // document.write("Your weight is ",inp_A.toFixed(1), "kgs");
    // document.write("</br>");
    // document.write("Your weight is ",inp_A.toFixed(1), "kilograms");

                            // Converting strings to numbers, numbers to strings
    // QNO-1:
    // var suppose= "472"
    // var c = typeof(472)
    // document.write(c);
    
    // QNO-2:
    // var suppose = 35.36;
    // var dot = suppose.toString().replace(".", "")
    // document.write(dot);

                           // Controlling the length of decimals
    // QNO-1:
    // var percent = 30/45 * 100;
    // var meth = percent.toFixed(2);
    // document.write(meth);

                                // Chapter 31-34:
// QNO-1:
// var todayDate = new Date();
// document.write(todayDate);


// QNO-2:
// var mon = ["January","February","March","April","May","June","July","August","September","Octoer","November","December"]
// var todayDate = new Date();
// var mon_A = todayDate.getMonth();
// document.write(mon[mon_A]);

// QNO-3:
// var todayDate = new Date();
// var d = todayDate.toString();
// var arr = d.slice(0, 4);
// document.write("Today is ",arr);

// QNO-4:
// var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var todayDate = new Date();
// var day_S = todayDate.getDay();
// if(day == "Sunday"){
//     document.write("It's fun day.")
// }else if(day == "Saturday"){
//     document.write("It's fun day")
// }else{
//     document.write("Today is not sunday or saturday")
// }

// QNO-5:
// var todayDate = new Date();
// var day_d = todayDate.getDate();
// if(day_d < 16){
//     document.write("First fifteen days of month")
// }
// else{
//     document.write("Last days of month")
// }

// QNO-6:
// var todayDate = new Date();
// document.write("Current Date: ",todayDate); 
// document.write("</br>");
// document.write("Elapsed milliseconds since 1st January 1970: ",todayDate.getTime());  
// document.write("</br>");
  
// QNO-7:
// var todayDate = new Date();
// var st = todayDate.toString();
// var PMAM = st.slice(16,19);
// if (PMAM === "12:"){
//     document.write("It's PM")
// }else if(PMAM === "13:"){
//     document.write("It's PM")
// }else if(PMAM === "14:"){
//     document.write("It's PM")
// }else if(PMAM === "15:"){
//     document.write("It's PM")
// }else if(PMAM === "16:"){
//     document.write("It's PM")
// }else if(PMAM === "17:"){
//     document.write("It's PM")
// }else if(PMAM === "18:"){
//     document.write("It's PM")
// }else if(PMAM === "19:"){
//     document.write("It's PM")
// }else if(PMAM === "20:"){
//     document.write("It's PM")
// }else if(PMAM === "21:"){
//     document.write("It's PM")
// }else if(PMAM === "22:"){
//     document.write("It's PM")
// }else if(PMAM === "23:"){
//     document.write("It's PM")
// }else if(PMAM === "24:"){
//     document.write("It's AM")
// }else if(PMAM === "01:"){
//     document.write("It's AM")
// }else if(PMAM === "02:"){
//     document.write("It's AM")
// }else if(PMAM === "03:"){
//     document.write("It's AM")
// }else if(PMAM === "04:"){
//     document.write("It's AM")
// }else if(PMAM === "05:"){
//     document.write("It's AM")
// }else if(PMAM === "06:"){
//     document.write("It's AM")
// }else if(PMAM === "07:"){
//     document.write("It's AM")
// }else if(PMAM === "08:"){
//     document.write("It's AM")
// }else if(PMAM === "09:"){
//     document.write("It's AM")
// }else if(PMAM === "10:"){
//     document.write("It's AM")
// }else if(PMAM === "11:"){
//     document.write("It's AM")
// }

// QNO-8:
// var laterDate = new Date("12-31-2020");
// document.write(laterDate);

// QNO 10:
// var cDate=new Date("12-05-2015");
// document.write(cDate);
// document.write("</br>");
// var sDate=new Date();
// var s=sDate.getSeconds();
// var s_A=cDate.getSeconds();
// var ts=sDate-cDate;
// document.write(ts);

// QNO-11:
// var todayDate = new Date();
// document.write(todayDate);
// document.write("</br>");
// var h = todayDate.getHours();
// document.write(h);
// document.write("</br>");
// todayDate.setHours(14);
// document.write(todayDate)

// QNO-12:
// var todayDate = new Date();
// document.write(todayDate);
// document.write("</br>");
// var f = todayDate.getFullYear();
// document.write(f);
// document.write("</br>");
// todayDate.setFullYear(1922);
// document.write(todayDate)

// QNO-13:
// var a = prompt("Enter your birth date:") // imput method of date: MM/DD/YY
// var specDate = new Date(a);
// var todayDate = new Date();
// var b = (todayDate - specDate);
// var age = Math.floor(b/31536000000);
// document.write("Your age is: ", age);
// var f = todayDate.getFullYear() - age;
// document.write("</br>")
// document.write("Your birth year is: ",f);

// QNO-14:
// var a = prompt("Enter Customer Name: ");
// var m = prompt("Enter month: ");
// var Number_of_units = prompt("Enter units here: ");
// var charge_per_unit = (16);
// var Late_Payment_Surcharge = (500);
// document.write("Customer Name: ", a);
// document.write("</br>");
// document.write("Month: ",m);
// document.write("</br>");
// document.write("Number of Units: ", Number_of_units);
// document.write("</br>");
// document.write("Charge per Unit: ", charge_per_unit);
// document.write("</br>");
// document.write("</br>");
// var net = Number_of_units * charge_per_unit;
// var gross = net + Late_Payment_Surcharge
// document.write("Net Amount Payable (within Due Date): ", net);
// document.write("</br>");
// document.write("Gross Amount Payable (after Due Date: ", gross);


                    // Chapter 35-38:

// QNO-1:
// function time(){
//         var todayDate = new Date();
//         document.write(todayDate);
// }
// time();

// QNO-2:
// function greet(){
//     var show_1 = prompt("Enter your first name: ");
//     var show_2 = prompt("Enter your last name: ");
//     document.write("Hello ", show_1, show_2, " welcome to our website");
// }
// greet();

// QNO-3: 
// function s(){
//     var a = +prompt("Enter number_1: ")
//     var b = +prompt("Enter number_2: ")
//     var c = a+b;
//     document.write(c);
//     return(c)
// }
// s();

// QNO-4:
// function cal(){
//     var num1 = +prompt("Enter first integer: ");
//     var num2 = +prompt("Enter second ineger: ");
//     var a = (num1+num2);
//     var s = (num1-num2);
//     var m = (num1*num2);
//     var d = (num1/num2);
//     var modulus = num1%num2;
//     document.write("Add: ", a);
//     document.write("</br>");
//     document.write("Substract: ", s);
//     document.write("</br>");
//     document.write("Multiply: ", m);
//     document.write("</br>");
//     document.write("Divide: ", d);    
//     document.write("</br>");
//     document.write("Modulus: ", modulus);
//     return(a,bs,m,d,modulus);
// }
// cal();

// QNO-5:
// function square(){
//     var inp_A = prompt("Enter integer here: ");
//     var a = inp_A * inp_A;
//     document.write(a);
// }
// square()

// QNO-6:
// var inp_A = +prompt("Enter a positive integer: ");
// if (inp_A === 0) {
//     document.write("The factorial of "+inp_A+" is 1.");
// }
// else {
//     var f = 1;
//     for (i = 1; i <= inp_A; i++) {
//        f *= i;
//     }
//     document.write("The factorial of "+inp_A+" is "+f);
// }

// QNO-7:
//     function abc(){
//     var inp_A = +prompt("Enter starting value: ");
//     var inp_B = +prompt("Enter ending value: ")
//     for(var i=inp_A; i<=inp_B; i++){
//         console.log(i);
//     }
// }
// abc()

// QNO-8:
    // function calculate_hypotenuse(){
    //     var base = +prompt("Enter integer here: ");
    //     var perpendicular = +prompt("Enter integer here: ");
        
    //     function calculate_square(){
    //         var a = base * base;
    //            var b = perpendicular * perpendicular;
    //         var hypo = a + b;
    //         document.write(hypo)
    //     }
    // calculate_square()
    // }  
    // calculate_hypotenuse();

// QNO-9:
    // function area(){
    //     var width = +prompt("Enter width here: ")
    //     var height = +prompt("Enter height here: ")
    //     var Area = width * height;
    //     document.write("A = width * height")
    //     document.write("</br>")
    //     document.write("Area = ",Area);
    // }
    // area();
    
// QNO-10:
    // function palin(w){
    // var splitString = w.split("")
    // console.log(splitString)
    // var reverseSplit = splitString.reverse("")
    // console.log(reverseSplit);
    // var joinString = reverseSplit.join("");
    // console.log(joinString)
    // if(w == joinString){
    //     console.log("Palindrome !!!");
    // }else{
    //     console.log("It is not palindrome !!!")
    // }
    // }
    // palin("rao");

// QNO-14:
// var radius = prompt("Enter radius here: ");
//     function calcCircumference(){
//         var cir = (2*3.142*radius);
//         document.write("Radius = ", radius);
//         document.write("</br>");
//         document.write("π = 3.142");
//         document.write("</br>");
//         document.write("Circumference = ",cir);
//     }
//     calcCircumference();
    
//     document.write("</br>");

//     function calArea(){
//         var r_2 = radius*radius;
//         var A = (3.142*r_2);      
//         document.write("</br>");
//         document.write("Area = ",A);
//     }
//     calArea();
    