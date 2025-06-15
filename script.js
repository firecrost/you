document.getElementById("askForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("messageBox").style.display = "block";
  document.getElementById("messageBox").innerText = "Yaaa çok mutluyum! ❤️";
});

document.getElementById("noBtn").addEventListener("click", function() {
  document.getElementById("messageBox").style.display = "block";
  document.getElementById("messageBox").innerText = ":( Peki, yine de seni sevmeye devam edeceğim...";
});
