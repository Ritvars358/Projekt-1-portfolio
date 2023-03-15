const box = document.querySelectorAll(".box");
box.forEach((item) => {
  let url = item.getAttribute("data-url");
  console.log(url);
  item.addEventListener("click", () => {
    document.location.href = url;
  });
});
