let currIndex = 0;

setInterval(() => {
  let indexBypass = false;
  if (currIndex == -1) {
    indexBypass = true;
    currIndex = document.getElementsByClassName("gradContent").length - 1;
  }
  const currIn = document.getElementsByClassName("gradContent")[currIndex];

  currIn.classList.remove("in");
  currIn.classList.add("out");

  if (indexBypass) currIndex = -1;

  setTimeout(() => {
    const nextDisabled =
      document.getElementsByClassName("gradContent")[currIndex + 1];
    currIn.classList.remove("out");
    currIn.classList.add("disabled");

    nextDisabled.classList.remove("disabled");
    nextDisabled.classList.add("in");

    currIndex++;

    if (currIndex + 1 == document.getElementsByClassName("gradContent").length)
      currIndex = -1;
  }, 300);
}, 2000);
