

function testing_querySelector() {
  let out = document.querySelector("#output");
  out.innerHTML = "Success!"

  console.log(document.querySelector(".p_out").classList.value);

  var x = function () {
    var str = out.innerHTML;
    if (str.toString().localeCompare("Success!")==0) {
      return "Done";
    }
    return "not Done";
  };
  console.log(x());
}

function try_add_html_elm() {
  let out = document.querySelector(".result");
  console.log(out);
  out.innerHTML += " <h3>Gotta!!</h3> ";
  console.log(out);
}
