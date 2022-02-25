// var playlist = ['Totori', 'Bless Me', 'Crazy Luv', 'Go Below', 'No Time'];

// var del

function view(message) {
 //   document.write(message);
  var show = document.getElementById('bon').innerHTML = message;
}

// function make(list) {
//     var orderedList = '<ol>';
//     for (var i = 0; i < list.length; i++) {
//         orderedList += '<li>' + list[i] + '</li>';
//     }
//     orderedList += '</ol>';
//     view(orderedList);
// }

// make(playlist);

// //document.getElementById("demo").addEventListener("click", deleteLast;


// function deleteLast() {
// ;
// }

// console.log(deleteLast())

//---------------------------------------------------------------------------

// var quiz = [
// ['What is your name', 'ope'],
// ['What school', 'dmss'],
// ['What age', 27]
// ];

// var correct = 0;
// var fail = 0;

// var ask1 = prompt(quiz[0][0]).toLowerCase();
// var ask2 = prompt(quiz[1][0]).toLowerCase();
// var ask3 = Number(prompt(quiz[2][0]));

// if (ask1 === quiz[0][1]) {
// correct += 1;
// }
// else {
//     fail += 1;
// }
// if (ask2 === quiz[1][1]) {
//     correct += 1;
// }
// else {
//     fail += 1;
// }
// if (ask3 === quiz[2][1]) {
// correct += 1;
// }
// else {
//     fail += 1;
// }

// document.write( 'You answered ' + correct + ' correctly')

// document.write( ' and failed ' + fail + '<br>')

// document.write( 'These are the questions correctly answered: <br>')

// if (ask1 === quiz[0][1]) {
//     document.write( '' + quiz[0][0] + '<br>')
//     } if (ask2 === quiz[1][1]) {
//         document.write( '' + quiz[1][0] + '<br>')
//     } if (ask2 === quiz[2][1]) {
//         document.write( '' + quiz[2][0] )
//     }
//---------------------------------------------------------------------------
// var c = [[{Question: 'name?', Answer: 'ope'}, {Question: 'best food?', Answer: 'beans and yam'}], 
// [{Question: 'School?', Answer: 'cu'}, {Question: 'work?', Answer: 'gtbank'}]];

// var m = {name: 'Ope', scores: [80, 90, 70, 100]};

// var s = '<p>Hello, my name is ' + m.name + '</p>'

// s += '<p>And my scores are ' + m.scores + ' ' + m.scores.length + '</p>'

// view(s);

//---------------------------------------------------------------------------

//var m = {name: 'Ope', scores: 80, sex: 'male'};

// var c = [[{Question: 'name?', Answer: 'ope'}, 
// {Question: 'best food?', Answer: 'beans and yam'}], 

// [{Question: 'School?', Answer: 'cu'}, 
// {Question: 'work?', Answer: 'gtbank'}]];


// var correctAns = 0;
// var qst;
// var ans;
// var resp;

// for (x in m) {
//     console.log(x, ':');
// }

//---------------------------------------------------------------------------

// var x = [
// {name: 'Ope', food: 'beans'}, 
// {name: 'Papa', food: 'rice'}, 
// {name: 'Fadeke', food: 'indomie'}, 
// {name: 'Ope', food: 'bread'}
// ];


// var mes = '';
// var people;
// var search;
// var r;

// function rep(pip) {
//   var report = '<h2>People: ' + pip.name + '</h2>';
//   report +='<p>Food: ' + pip.food + '</p>';
//   return report; 
// }
// while (true) {
//   search = prompt('Search for people; when done, type "quit" or leave blank to exit search');
//   if (search === null || search.toLowerCase() === 'quit') {
//     break;
//   }
//   for (var i = 0; i < x.length; i++) {
//     people = x[i];
//     if (people.name.toLowerCase() === search.toLowerCase()) {
//       mes = rep(people);
//       view(mes);
//     }else if(search.toLowerCase > 1) {
//       var p = rep(people);
//       for (var a = 0; a < p.length; a++) {
//         view(p[a]);
//       }
      
//     }
    
//     else {
//       alert('No result found')
//     }
//   }
// }

//---------------------------------------------------------------------------

const myHead = document.getElementById('myHeading');
const myButt = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButt.addEventListener('click', () => {
  myHead.style.color = myTextInput.value;
});

