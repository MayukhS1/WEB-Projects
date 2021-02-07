var head = document.getElementById("h");

function hello() {
  //console output
  console.log("Hello there!");
  //alerts
  //window.alert("Hi user");
  //writings
  //document.write("Hi Brother");

  head.innerHTML = "Hello World";
}
function variables() {
  var a = 2;
  var b, c;
  var arr = [1, 2, 3, 4, 6, 8, 10];

  b = a + 3;
  console.log(b);
  c = arr[2];
  console.log(c);

  console.log(arr);
  head.innerHTML = "The array is: "
  for (var variable in arr) {
    head.innerHTML += variable + " ";
  }
}

function fibonoci() {
  var num = prompt("Enter Limit: ");
  var t = parseInt(num);
  head.innerHTML = "fibonoci series of " +t+" numbers : ";

  var first = 0; second = 1,i=0;
  if (t==1) {
    head.innerHTML += 0;
  }
  else {
      head.innerHTML += "0 1";
      i=2;
  }
  while(i<t){
    head.innerHTML += " "+(first+second);
    var temp = first+second;
    first = second;
    second = temp;
    i++;
  }
}

function array_methods() {
  var arr_in = prompt("Enter 5 values");
  var arr = arr_in.split(" ");
  arr = arr.filter(function(entry) { return entry.trim() != ''; });
  head.innerHTML = arr+"...";

  //arr.reverse();
  //head.innerHTML += arr+"...";

  head.innerHTML += arr.pop() +"...";
  head.innerHTML += arr+"...";

  arr.push(8,9);
  head.innerHTML += arr+"...";


  arr.shift();
  head.innerHTML += arr+"...";

  arr.unshift(1,3);
  head.innerHTML += arr+"...";

}
function add(a,b){
  var num1 = Number(a)
  var num2 = Number(b);
  return num1+num2;
}

function function_test() {
  var a = prompt("Enter a number");
  var b = prompt ("Enter another number");
  var c = add(a,b);
  console.log("done");
  head.innerHTML = c;

  /*Anonymous function_test 1
  --------------------------------------------*/

  var biggest = function(){
    var result = a>b ? ["a",a] : ["b",b];
    return result;
  };

  console.log(biggest());

  /*Anonymous function_test 2
  --------------------------------------------*/

  var largest_fraction = function(f1,f2) {
    var result = (f1/f2)>(f2/f1) ? [f1+"/"+f2,(f1/f2)]:[f2+"/"+f1,(f2/f1)];
    return result;
  }(a,b);

  console.log(largest_fraction);

}
