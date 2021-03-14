

function sleepSort(){
  let input_str = document.getElementById("input-text").value;
  let out_p = document.getElementById('output-line')
  out_p.innerHTML = "";
  if(input_str!=""){
    try {
      var arr = input_str.split(',').map(function(item) {
          return parseInt(item, 10);
      });

      //now the sleep Sort
      for (let item of arr){
        setTimeout(()=>out_p.innerHTML+=(item+" "),item) //it calculates how much time it take for numbers
      }
    } catch (e) {
      out_p.style.color = "Red";
      out_p.innerHTML = "Please enter valid numbers & seperaters";
    }
  }
  else{
    out_p.style.color = "Red";
    out_p.innerHTML = "Please enter some numbers";
  }
}
