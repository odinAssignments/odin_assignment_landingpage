window.onload = (event) => {
  const items = document.querySelector(".nav_menu");

  for (const item of items.children) {
    item.addEventListener("click", (e) => {
      const oldSelectedItem = document.querySelector(".focus");

      if (oldSelectedItem) {
        oldSelectedItem.classList.remove("focus");
      }

      e.target.classList.add("focus");
    });
  }
};
