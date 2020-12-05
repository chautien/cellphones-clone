window.onload = function () {
  const prodLeftShow = document.querySelector("#prodLeftShow");
  let prodLeftBtn = document.querySelector("#prodLeftBtn");

  prodLeftBtn.addEventListener("click", function () {
    let prodHeight = getComputedStyle(prodLeftShow);

    if (prodHeight.height !== "auto") {
      prodLeftShow.style.height = "auto";
      document.querySelector("#prodLeftBox").style.display = "none";
    }
  });
};
