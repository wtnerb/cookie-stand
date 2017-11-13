'use strict'


var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hour: function (){
    return Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  },
  day: function (){
    for (var i = 8; i < 12; i++){
      document.write(i, 'am', this.hour());
    }
    for (var j = 0; j < 9; j++){
      document.write(j, 'pm', this.hour());
    }
  }
};
