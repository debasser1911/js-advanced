class simpleCalculator {

  read() {
      var a = prompt('enter a', 0)
      var b = prompt('enter b', 0)
    console.log("hello from read " + (+a + +b));
  }
  sum() {}
  sub() {
      console.log(a + " " + b)
  }
}

class advancedCalculator extends simpleCalculator {
  div() {}
  pow() {}
}

var advCal = new advancedCalculator();
advCal.read();

