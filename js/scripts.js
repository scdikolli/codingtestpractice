// $(function(){
//   console.log('Hello, fancy ladies');
//
//   //click event
//   $('#clickable').click(function(){
//     $('#scott').fadeToggle();
//     alert('Did anything exciting happen this weekend? - Scott Geier, on a Wednesday');
//   });
//   // var scott = document.getElementById('scott');
//   // var clickable = document.getElementById('clickable');
//   // clickable.onclick = function scottAppears(){
//   //   scott.style.display = 'block';
//   // }
//   // scottAppears()
//
//   //AJAX call
//   var url = './js/journalists.json';
//   var data = [];
//   var html = '';
//
//   $.ajax({
//     type: 'GET',
//     data: data,
//     url: url,
//     async: true,
//     dataType: 'json',
//     success: function(data){
//       console.log(data);
//       html += '<h1 id="popup">Journalists Through History</h1>';
//       for (var a = 0; a < data.length; a++) {
//         console.log(data[a].name);
//         html += '<h1>' + data[a].name + '</h1><p>' + data[a].description + '</p>';
//       }
//       $('#results').append(html);
//       $('#popup').mouseenter(function(){
//         $('#tooltip').fadeToggle();
//       });
//       $('#popup').mouseleave(function(){
//         $('#tooltip').fadeToggle();
//       });
//     }
//
//   });//end of AJAX call
//
//   //initialize a variable for the HTML content your going to build
// var html2 ='';
// var i;
// //get the empty table content area
// var tableContent = document.getElementById('table-content');
// var players = [
//   {
//     first:'Angela',
//     last: 'Smith',
//     position: 'Guard',
//     year: 'Junior'
//   },
//     {
//     first:'Ashley',
//     last: 'Roberts',
//     position: 'Guard',
//     year: 'Senior'
//   },
//     {
//     first:'Sarah',
//     last: 'Spangler',
//     position: 'Forward',
//     year: 'Freshman'
//   },
//    {
//     first:'Catherine',
//     last: 'McAllister',
//     position: 'Forward',
//     year: 'Senior'
//   },
//    {
//     first:'Haley',
//     last: 'Bishop',
//     position: 'Center',
//     year: 'Sophomore'
//   },
//   {
//    first:'Renee',
//    last: 'Williams',
//    position: 'Guard',
//    year: 'Senior'
//  },
//  {
//   first:'Jennifer',
//   last: 'Olsen',
//   position: 'Forward',
//   year: 'Junior'
//   }
// ];
//
// //building the table through JS
// function buildTable(){
//   //start with the table header
//   html2 += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';
//   /*Now write a for loop to populate the table using the data
//   /include logic to make the text bold when the player is a senior.
//   Write the loop here*/
//   for(i = 0; i < players.length; i++){
//     console.log(players[i].first);
//     var senior = players[i].year == 'Senior';
//     if(senior){
//       console.log('You are a Senior!');
//       html2 += '<tr>';
//       html2 += '<td><strong>' + players[i].first + '</strong></td>';
//       html2 += '<td><strong>' + players[i].last + '</strong></td>';
//       html2 += '<td><strong>' + players[i].position + '</strong></td>';
//       html2 += '<td><strong>' + players[i].year + '</strong></td>';
//       html2 += '</tr>';
//     }else{
//       html2 += '<tr>';
//       html2 += '<td>' + players[i].first + '</td>';
//       html2 += '<td>' + players[i].last + '</td>';
//       html2 += '<td>' + players[i].position + '</td>';
//       html2 += '<td>' + players[i].year + '</td>';
//       html2 += '</tr>';
//     }
//   }//closing the for loop
//   //building the HTML
//   tableContent.innerHTML = html2;
// }//end of the buildTable function
//
// buildTable();
//
//
// /*
// EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
// Hint: You need two loops, one of which will be 'nested'.*/
// var msg = '';
// var allStarName = '';
// var j;
// var congrats = document.getElementById('all-star');
// var allStars = [
//   {
//     first:'Melanie',
//     last: 'Akers',
//     position: 'Forward',
//     school:'Johnson High School'
//   },
//     {
//     first:'Olivia',
//     last: 'Carter',
//     position: 'Foward',
//     school:'Providence Day School'
//   },
//     {
//     first:'Sarah',
//     last: 'Spangler',
//     position: 'Forward',
//     school:' Springfield High School'
//   },
//    {
//     first:'Ursula',
//     last: 'Jones',
//     position: 'Guard',
//     school: 'Chatham Senior High School'
//   },
//    {
//     first:'Theresa',
//     last: 'Hollinger',
//     position: 'Guard',
//     school: 'St. Joseph Academy'
//   },
//   {
//    first:'Darleen',
//    last: 'Lawrence',
//    position: 'Guard',
//    school: 'Everton High School'
//  },
//  {
//   first:'Jennifer',
//   last: 'Olsen',
//   position: 'Forward',
//   school: 'Springfield High School'
//   }
// ];
//
// //write the function
// function congratsMessage(){
//   for(var j = 0; j < allStars.length; j++){
//     console.log(allStars[j].first);
//     for(i = 0; i <players.length; i++){
//       if(allStars[j].first == players[i].first  && allStars[j].last == players[i].last){
//         console.log('Congrats Springfield Tigers!');
//         allStarName += players[i].first + ' ' + players[i].last +'<br>';
//       }//closing the if/else
//     }//closing the for loop
//   }//closing the for loop
//   msg += '<strong>Congratulations to Springfield\'s 2018 North Carolina All-State honorees: </strong>' + '<br>' +allStarName;
//   congrats.innerHTML = msg;
// }
// congratsMessage();
//
//
// });//end of document.ready

$(document).ready(function(){
  console.log('scripts loaded');









});//end document ready function
