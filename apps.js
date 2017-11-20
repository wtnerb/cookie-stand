'use strict';

function Store(name, min, max, avg){
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sales = [];
  this.name = name;
  this.salesTot = 0;
  this.day();
  stores.push(this);
  this.addToTable();
}

Store.prototype.hour = function (){
  return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
};

Store.prototype.day = function (){
  for (var i = 0; i < hours.length - 1; i++){ //the minus one is because I finish the array with 'total'
    this.sales.push(this.hour());
    this.salesTot += this.sales[i];
  }
};

Store.prototype.addToTable = function (){
  var target = document.getElementById('stats-table');
  target = target.lastChild;
  console.log('adding row to:', target);
  target.appendChild(makeRow(this.name, this.sales, this.salesTot));
};

var stores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];


function tableHeader(columnsArray){
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

function makeRow(header, data, footer){
  var tblRow = document.createElement ('tr');
  var child = document.createElement ('td');
  console.log('header should be store name:', header);
  child.textContent = header;
  tblRow.appendChild(child);
  fillRow(tblRow, data);
  child.textContent = footer;
  tblRow.appendChild(child);
  return tblRow;
}

function fillRow(row, array){
  for (var i = 0; i < array.length; i++){
    var child = document.createElement('td');
    child.textContent = array[i];
    row.appendChild(child);
  }
}

var formSubmit = document.getElementById('add-store');
function onSubmit(event) {
  event.preventDefault();
  var item = new Store(event.target.storeName.value, parseInt(event.target.min.value), parseInt(event.target.max.value), parseFloat(event.target.avg.value));
  console.log('item from form should be', item);
  console.log('Store in array', stores[stores.length - 1]);
}

formSubmit.addEventListener('submit', onSubmit);

tableHeader(hours);
var store = new Store('1st and Pike', 23, 65, 6.3);
console.log('this is my first store', store);
store = new Store('SeaTac', 3, 24, 1.2);
store = new Store('Sea Center', 11, 38, 3.7);
store = new Store('Cap Hill', 20, 38, 2.3);
store = new Store('Alki', 2, 16, 4.6);
console.log('store array populated:', stores);
