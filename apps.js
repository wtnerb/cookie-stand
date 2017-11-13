'use strict'


var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hour: function (){
    return (Math.floor((1 + this.max - this.min) * Math.random() + this.min);
  }
};
