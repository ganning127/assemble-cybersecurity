window.onload = () => {
  console.log("script.js loaded");
};

function handleLogin(event) {
  event.preventDefault();
  let password = document.getElementById("password").value;
  if (password === "letmein") {
    document.getElementById("loginForm").style.display = "none";

    let pTag = document.createElement("p");
    pTag.innerHTML = "flag: assembleCTF{c4_is_the_best}";
    document.getElementById("box").appendChild(pTag);
    document.getElementById("wrong").classList.add("hidden");
  } else {
    document.getElementById("password").value = "";
    document.getElementById("wrong").classList.remove("hidden");
  }
}
