console.log("hello! How are you?");

const fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the button");

  const xhr = new XMLHttpRequest();

  //   xhr.open(
  //     "GET",
  //     " https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
  //     true
  //   );
  xhr.open("POST", "https://httpbin.org/post", true);
  xhr.getAllResponseHeaders("Content-type", "application/json");

  xhr.onprogress = function () {
    console.log("onprogress");
  };

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("error");
    }
  };

  params = `{"name":"test484efde84","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("Done");
}

///////////////////////////////////////////////////////////////////////////////

const backupBtn = document.getElementById("backupBtn");

backupBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("clicked the button");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "abc.txt", true);

  xhr.onprogress = function () {
    console.log("onprogress");
  };

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("error");
    }
  };

  params = `{"name":"test484efde84","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("Done");
}
