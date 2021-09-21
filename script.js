function odd() {
  let a = parseInt(document.getElementsByClassName("first")[0].value);
  let b = parseInt(document.getElementsByClassName("second")[0].value);
  let submit = document.getElementsByClassName("odd");

  for (i = a; i <= b; i++) {
    if (i % 2 != 0) {
      alert(i);
    }
  }
}
