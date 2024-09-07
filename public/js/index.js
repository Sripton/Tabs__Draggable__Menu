// tab navigation horizontal scroll bar
const leftArrow = document.querySelector(".left-btn");
const rightArrow = document.querySelector(".right-btn");
const tabNavList = document.querySelector(".tab-nav-list");
function iconVisibilit() {
  const scrollLeftValue = Math.ceil(tabNavList.scrollLeft);
  const scrollableWidth = tabNavList.scrollWidth - tabNavList.clientWidth;
  leftArrow.style.display = scrollLeftValue > 0 ? "block" : "none";
  rightArrow.style.display =
    scrollableWidth > scrollLeftValue ? "block" : "none";
}
rightArrow.addEventListener("click", () => {
  tabNavList.scrollLeft += 150;
  setTimeout(() => iconVisibilit(), 50);
});

leftArrow.addEventListener("click", () => {
  tabNavList.scrollLeft -= 150;
  setTimeout(() => iconVisibilit(), 50);
});

window.onload = () => {
  rightArrow.style.display =
    tabNavList.scrollWidth > tabNavList.clientWidth ||
    tabNavList.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  leftArrow.style.display =
    tabNavList.scrollWidth >= window.innerWidth ? "" : "none";
};
window.onresize = () => {
  rightArrow.style.display =
    tabNavList.scrollWidth > tabNavList.clientWidth ||
    tabNavList.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  leftArrow.style.display =
    tabNavList.scrollWidth >= window.innerWidth ? "" : "none";
  const scrollLeftValue = Math.round(tabNavList.scrollLeft);
  leftArrow.style.display = scrollLeftValue > 0 ? "block" : "none";
};

let activeDragg = false;

tabNavList.addEventListener("mousemove", (drag) => {
  if (!activeDragg) return;
  tabNavList.scrollLeft -= drag.movementX;
});
tabNavList.addEventListener("mousedown", () => {
  activeDragg = true;
});

const tabsItem = document.querySelectorAll(".tab-nav-item");
const tabsContent = document.querySelectorAll(".tab");
// Решение 1
// tab-nav-item-active
// function hideTab() {
//   tabsItem.forEach((item) => item.classList.remove("tab-nav-item-active"));
//   tabsContent.forEach((tab) => tab.classList.remove("_active-tab"));
// }
// function showTab(index = 0) {
//   tabsItem[index].classList.add("tab-nav-item-active");
//   tabsContent[index].classList.add("_active-tab");
// }
// hideTab();
// showTab(0);

// tabNavList.addEventListener("click", (e) => {
//   e.preventDefault();
//   const targetEvent = e.target;
//   if (targetEvent || targetEvent.classList.contains("tab-nav-item")) {
//     tabsItem.forEach((elem, index) => {
//       if (targetEvent === elem) {
//         hideTab();
//         showTab(index);
//       }
//     });
//   }
// });

const tab_nav = (index) => {
  tabsItem.forEach((item) => {
    item.classList.remove("tab-nav-item-active");
  });
  tabsContent.forEach((tab) => {
    tab.classList.remove("_active-tab");
  });
   tabsItem[index].classList.add("tab-nav-item-active");
  tabsContent[index].classList.add("_active-tab");
};
tab_nav(0);

tabsItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    tab_nav(index);
  });
});
