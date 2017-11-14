'use strict';


var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  hour: function (){
    return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
  },
  day: function (){
    var list = document.getElementById('pike');
    for (var i = 0; i < this.hours.length; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = this.hours[i] + ' ' + sold;
      list.appendChild (child);
    }
  },
};

var seatac = {
  min: 3,
  max: 24,
  avg: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  hour: function (){
    return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
  },
  day: function (){
    var list = document.getElementById('seatac');
    for (var i = 0; i < this.hours.length; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = this.hours[i] + ' ' + sold;
      list.appendChild (child);
    }
  },
};

var seacenter = {
  min: 11,
  max: 38,
  avg: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  hour: function (){
    return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
  },
  day: function (){
    var list = document.getElementById('seacenter');
    for (var i = 0; i < this.hours.length; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = this.hours[i] + ' ' + sold;
      list.appendChild (child);
    }
  },
};

var caphill = {
  min: 20,
  max: 38,
  avg: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  hour: function (){
    return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
  },
  day: function (){
    var list = document.getElementById('caphill');
    for (var i = 0; i < this.hours.length; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = this.hours[i] + ' ' + sold;
      list.appendChild (child);
    }
  },
};

var alki = {
  min: 2,
  max: 16,
  avg: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  hour: function (){
    return Math.floor(this.avg * ((1 + this.max - this.min) * Math.random() + this.min));
  },
  day: function (){
    var list = document.getElementById('alki');
    for (var i = 0; i < this.hours.length; i++){
      var child = document.createElement('li');
      var sold = this.hour ();
      this.sales.push(sold);
      child.textContent = this.hours[i] + ' ' + sold;
      list.appendChild (child);
    }
  },
};

pike.day();
alki.day();
seatac.day();
seacenter.day();
caphill.day();
