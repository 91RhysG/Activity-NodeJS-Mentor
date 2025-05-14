document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "/index.html";
});
document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("result").textContent = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((err) => {
      document.getElementById("result").textContent = "Error: " + err;
    });
});
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("result").textContent = "No data loaded yet.";
});
