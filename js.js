    var myBtn = document.getElementsByClassName("btn");
    myBtn[0].innerHTML = "NEW BUTTON";
    console.dir(myBtn[0]);

    var myBtn = document.getElementsByClassName("btn");
    myBtn[1].innerText = "BUTTON BR CONTENT";
    console.dir(myBtn[1]);

    console.dir(document);
    console.log(document.URL + " " + document.title);

    var myOutput = document.getElementById("output");
    console.dir(myOutput);
    myOutput.innerHTML = "NEW CONTENT";
    myOutput.style.backgroundColor = "green";

    myImg = document.getElementById("myImage");

    document.getElementById("btn1").addEventListener("click",function(){
    myImg.src = "../NETFLIX/netflixlogo.png";
    this.innerHTML = "PROCEED";
    this.style.color = "red";
    this.style.border = "1px solid red";
  })

    var myBtn3 = document.getElementById("btn3"); 
    var myOutput2 = document.getElementById("output2");
    //myBtn3.onclick = myFunc; //option 2(not recommended)
    myBtn3.addEventListener("click", myFunc);
    //myBtn3.addEventListener("mouseover", myFunc);

    function myFunc(){
        myOutput2.innerHTML = "welcome";
        myOutput2.style.backgroundColor = "blue";
    }

  
//   var myPrompt = prompt("hello, enter your name");
      
//       alert("hello " +myPrompt);

// document.getElementById("myButton2").addEventListener("click",function(){
//  alert("hello again again");
// })

var myVar1 = "string"; //Characters
var myVar2 = 10 //Number
var myVar3 = true //Boolean
var a="a",b="b", c="c";
console.log(myVar2);

var myVar4 = ["string", 5,true,"man","Strong","tea",false,9];
var myVar6 = [10,11,12,13,14,15,16];
console.log(myVar4);
console.log(myVar4[0]); //array index starts with 0

myVar4.push("woman"); //to add at the last of array
console.log(myVar4);
console.log(myVar4.length);//to count how many items in array from 1-5 not 0-4

console.log(myVar4[myVar4.length-1]); 
console.log(myVar4.length-1); //different from above

var myVar5 = [myVar4[myVar4.length-2], 7];
console.log(myVar5);

myVar4.pop(); //remove last item in array
console.log(myVar4);

myVar4.shift(); //remove first item in array
console.log(myVar4);

console.log(myVar4.indexOf(5));

console.log(myVar5.indexOf(7)); //position of man in array. (2 items before man so 0,1,2)

myVar4.forEach(function(i,k){
    console.log(i + " " + k); // position of all items in array.
})

//myVar4.splice(1); //save the first (position 0) and delete the rest
//console.log(myVar4);

myVar4.splice(0,1); //delete item (a) counting from 0; (a,b) delete (a) and number of b thereafter (b starts counting from a)
console.log(myVar4);

myVar4.sort();

myVar4.reverse();
console.log(myVar4);

var myVar7 = myVar4.concat(myVar6);
myVar7.reverse();
console.log(myVar7);

var myVar8 = myVar6.join(' / ');
console.log(myVar8);

var myVar9 = myVar6.toString();
console.log(myVar9);

// var myVar10 = myVar6.slice(2); //delete first 2 and keep the rest
// console.log(myVar10);

var myVar10 = myVar6.slice(2,4); //delete first 2, count 4 items from beginning and delete items after
console.log(myVar10);


var myObj1 = new Object();
myObj1.name = "Ope";
myObj1.sex = "Male";
myObj1.age = 27;
myObj1.nat = "Nigerian";
myObj1.age = 28;
console.log(myObj1);

var myObj2 = {name: "Ope",sex:"Male",age:27,nat:"Nigerian"};
console.log(myObj2);

var  myObj3 = new myFun("Ope","Male",27,"Nigerian",);
function myFun(a,b,c,d){
    this.name = a;
    this.sex = b;
    this.age = c;
    this.nat = d;
}
console.log(myObj3);

console.log(myObj1["name"]);
console.log(myObj1.name);


function myFu(){
    console.log("Hello");
}
myFu();


function myFu1(arg1,arg2){
    console.log("Hey "+arg1 +" " +arg2);
}
myFu1("Welcome","Ope");
myFu1("There","sup")


function myFu2(arg1,arg2){
    var myRet = arg1 + " " +arg2;
    return("Hey "+myRet);
}
console.log(myFu2("Welcome","Ope"));

(Math.random() * (6 - 1 + 1)) + 1;


var html = ''
var rgbColor;


function rand(rgb) {
    return Math.floor(Math.random() * rgb);
}

for (var i = 1; i <= 10; i++) {

    rgbColor = 'rgb(' + rand(256) + ', ' + rand(256) + ', ' + rand(256) + ")";

html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
console.log(i);

var compName = "Verlon Technologies Ltd";

var compArray = compName.split(' ');

//var testComp = compArray.includes('Verlon');

if (compArray[0] === 'Verlo' || compArray[1] === 'Technologie') {
    console.log('proceed')
}
else {
    console.log('Please enter correct details')
}

console.log(typeof (Number('40.33')));




function tick(){
    var xxx = document.getElementById("seed").value;

    if (Number(xxx) < 10) {
        document.getElementById("boo").innerHTML = xxx;

    document.getElementById("seed").value = "";}
    else {
        alert ("invalid entry")
    }
}
var nil = "gvgh444hjb777hdxb999bbc000hhh";

console.log(nil.match(/\d+/g));

console.log(nil.match(/\d+/g).filter(number => number % 2 > 0));

var evens = nil.match(/\d+/g).filter(number => number % 2 == 0);
var odds = nil.match(/\d+/g).filter(number => number % 2 != 0);



//var nil = nir.toString()
var eveN = function(evens) {

    for (let a = 0; a <= evens.length; a++) {
//        if (even[a]) % 2 == 0) {
        console.log(evens[a]);
        }
    //     else { 
    //     odds.push(nil.match(/\d+/g[a])),
    //     console.log(odds);

    //     }
    // }
}

eveN(evens);



// function createTable1()
// {
//     const elements = Elements.GetElements();
//     const headings = Elements.GetHeadings();
//     const properties = Elements.GetProperties();

//     // start table and add caption
//     let tablehtml = "<table><caption>Elements</caption>";

//     // insert row of headings
//     tablehtml  += "<tr>";
//     for(let heading of headings)
//     {
//         tablehtml  += `<th>${heading}</th>`;
//     }
//     tablehtml += "</tr>";

//     // iterate data and add row of cells for each
//     for(let element of elements)
//     {
//         tablehtml  += "<tr>";

//         for(let property of properties)
//         {
//             tablehtml  += `<td>${element[property]}</td>`;
//         }

//         tablehtml  += "</tr>";
//     }

//     // end of table
//     tablehtml += "</table>";

//     // add table to the empty div
//     document.getElementById("tablediv").innerHTML = tablehtml;
// } 

// documents.getElementsByTagName("TD")[0].setAttribute('style', 'color:green');

var a = [12, 24, 21, 42, 23, 46, 76, 152, 1, 2, 3, 4];
var even = a.filter(function(y, z) {return z % 2 === 0;});
var odd = a.filter(function(y, z) {return z % 2 === 1;});
console.log(even);

function sumArray(even, odd) {
      var c = [];
      for (var i = 0; i < Math.max(even.length, odd.length); i++) 				{
        c.push(Number((even[i]) + "." + (odd[i])).toFixed(2));
      	}
          console.log(c);
	var newEven = c.filter(function(y, z) {return z % 2 === 0;});
	var newOdd = c.filter(function(y, z) {return z % 2 === 1;});


	table = document.getElementById('table');
	for(var j = 0; j < newEven.length - (newEven.length - 1); j++);
	for(var k = 0; k < newEven.length; k++)
    for(var k = 0; k < newOdd.length; k++)

// 	{
//   table.innerHTML+= '<tr><td>' + j++ + '</td><td>' + newEven[k] +'</td><td>' +  newOdd[k] + '</td></tr>' ;
//     }
    {console.log(`my age ${newEven[k]}`);
//    var curr = document.getElementById('curr');
//    curr.value += 
}
//     for(var j = 0; j < newEven.length - (newEven.length - 1); j++) {
//     status.innerHTML+= newEven[j];
//   }


}


sumArray(even, odd);

var hh = [10, 20, 30, 40, 50];

hh.splice(1, 2, 4);
console.log(hh)
