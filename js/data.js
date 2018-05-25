function copyDate () {
  var d = new Date();
  var _copy = d.getFullYear();
  document.getElementById("copy").innerHTML = "Copyright &copy;" + _copy;
}
copyDate();
