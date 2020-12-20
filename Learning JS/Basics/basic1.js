function hello() {
  //console output
  console.log("Hello there!");
  //alerts
  //window.alert("Hi user");
  //writings
  //document.write("Hi Brother");
  var head = document.getElementById("h");
  head.innerHTML = "HIIIII...";
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

  for (var variable in arr) {
    console.log(arr[variable]);
  }
}
function fibonoci() {
  var num = 10;
  var t = parseInt(num);
  var first = 0; second = 1,i=0;
  if (t==1) {
    document.write("0");
  }
  else {
    document.write("0 1");
    i=2;
  }
  while(i<t){
    document.write(" "+(first+second));
    var temp = first+second;
    first = second;
    second = temp;
    i++;
  }
}
