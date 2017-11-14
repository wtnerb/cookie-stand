'use strict';

function Store(name, min, max, avg){
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = [];
  this.name = name;
  this.salesTot = 0;
  stores.push(this);
}

Store.prototype.hour = function (){
  return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
};

Store.prototype.day = function (){
  for (var i = 0; i < hours.length; i++){
    this.sales.push(this.hour());
  }
};


var stores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var store = new Store ('1st and Pike', 23, 65, 6.3);
console.log ('this is my first store', store);
console.log ('now it is in my array', stores);
store = new Store ('SeaTac', 3, 24, 1.2);
store = new Store('Sea Center', 11, 38, 3.7);
store = new Store('Cap Hill', 20, 38, 2.3);
store = new Store('Alki', 2, 16, 4.6);

// function tableHeader (columnsArray){
//   var place = document.getElementById('stats-table');//find
//   var child = document.createElement('thead');//create
//   place.appendChild(child);//insert
//   place = place.firstChild;//move down
//   child = document.createElement('tr');//create
//   place.appendChild(child);//insert
//   place = place.firstChild;//move down
//   child = document.createElement('td');
//   place.appendChild(child);
//   for (var i = 0; i < columnsArray.length; i++){
//     child = document.createElement('td');
//     child.textContent = columnsArray[i];
//     place.appendChild(child);
//   }
// }

function tableHeader (columnsArray){
  var place = document.getElementById('stats-table');//find
  var child = document.createElement('thead');//create
  place.appendChild(child);//insert
  place = place.firstChild;//move down
  child = document.createElement('tr');//create
  place.appendChild(child);//insert
  place = place.firstChild;//move down
  child = document.createElement('td');
  place.appendChild(child);//insert empty
  fillRow(place, columnsArray);
}

function fillRow (place, array){
  for (var i = 0; i < array.length; i++){
    var child = document.createElement('td');
    child.textContent = array[i];
    place.appendChild(child);
  }
}

tableHeader(hours);

// var alki = {
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   sales: [],
//   hour: function (){
//     return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
//   },
//   day: function (){
//     var list = document.getElementById('alki');
//     for (var i = 0; i < this.hours.length; i++){
//       var child = document.createElement('li');
//       var sold = this.hour ();
//       this.sales.push(sold);
//       child.textContent = this.hours[i] + ' ' + sold;
//       list.appendChild (child);
//     }
//   },
// };
