//'use strict'


var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  sales: [],
  hour: function (){
    return Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  },
  day: function (){
    var list = document.getElementById('pike');
    for (var i = 8; i < 12; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = i + 'am  ' + sold;
      list.appendChild (child);
    }
    var addition = document.createElement('li');
    sold = this.hour ();
    this.sales.push(sold);
    addition.textContent = '12pm  ' + sold;
    list.append (addition);
    for (var j = 1; j < 9; j++){
      var childe = document.createElement('li');
      sold = this.hour ();
      this.sales.push(sold);
      childe.textContent = j + 'pm  ' + sold;
      list.appendChild (childe);
    }
  },
};

var seatac = {
  min: 3,
  max: 24,
  avg: 1.2,
  sales: [],
  hour: function (){
    return Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  },
  day: function (){
    var list = document.getElementById('seatac');
    for (var i = 8; i < 12; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = i + 'am  ' + sold;
      list.appendChild (child);
    }
    var addition = document.createElement('li');
    sold = this.hour ();
    this.sales.push(sold);
    addition.textContent = '12pm  ' + sold;
    list.append (addition);
    for (var j = 1; j < 9; j++){
      var childe = document.createElement('li');
      sold = this.hour ();
      this.sales.push(sold);
      childe.textContent = j + 'pm  ' + sold;
      list.appendChild (childe);
    }
  },
};

var seacenter = {
  min: 11,
  max: 38,
  avg: 3.7,
  sales: [],
  hour: function (){
    return Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  },
  day: function (){
    var list = document.getElementById('seacenter');
    for (var i = 8; i < 12; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = i + 'am  ' + sold;
      list.appendChild (child);
    }
    var addition = document.createElement('li');
    sold = this.hour ();
    this.sales.push(sold);
    addition.textContent = '12pm  ' + sold;
    list.append (addition);
    for (var j = 1; j < 9; j++){
      var childe = document.createElement('li');
      sold = this.hour ();
      this.sales.push(sold);
      childe.textContent = j + 'pm  ' + sold;
      list.appendChild (childe);
    }
  },
};

var caphill = {
  min: 20,
  max: 38,
  avg: 2.3,
  sales: [],
  hour: function (){
    return Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  },
  day: function (){
    var list = document.getElementById('caphill');
    for (var i = 8; i < 12; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = i + 'am  ' + sold;
      list.appendChild (child);
    }
    var addition = document.createElement('li');
    sold = this.hour ();
    this.sales.push(sold);
    addition.textContent = '12pm  ' + sold;
    list.append (addition);
    for (var j = 1; j < 9; j++){
      var childe = document.createElement('li');
      sold = this.hour ();
      this.sales.push(sold);
      childe.textContent = j + 'pm  ' + sold;
      list.appendChild (childe);
    }
  },
};

var alki = {
  min: 2,
  max: 16,
  avg: 4.6,
  sales: [],
  hour: function (){
    return Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  },
  day: function (){
    var list = document.getElementById('alki');
    for (var i = 8; i < 12; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = i + 'am  ' + sold;
      list.appendChild (child);
    }
    var addition = document.createElement('li');
    sold = this.hour ();
    this.sales.push(sold);
    addition.textContent = '12pm  ' + sold;
    list.append (addition);
    for (var j = 1; j < 9; j++){
      var childe = document.createElement('li');
      sold = this.hour ();
      this.sales.push(sold);
      childe.textContent = j + 'pm  ' + sold;
      list.appendChild (childe);
    }
  },
};

pike.day();
alki.day();
seatac.day();
seacenter.day();
caphill.day();
