
    const select = document.getElementById("colorSelect");
    const button = document.getElementsByTagName("input")[0];

    button.addEventListener("click", function () {
      const selectedIndex = select.selectedIndex;

      if (selectedIndex >= 0) {
        select.remove(selectedIndex);
      }
    });