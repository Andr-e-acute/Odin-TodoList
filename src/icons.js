import {
  mdiCalendarAccountOutline,
  mdiCalendarToday,
  mdiCalendarWeekOutline,
  mdiChevronDown,
  mdiChevronUp,
  mdiFlag,
  mdiListBoxOutline,
  mdiPlusCircleOutline,
} from "@mdi/js";

const createIcons = () => {
    // sidebar icons
  document
    .querySelector("[data-tasks='all']")
    .prepend(createSvg(mdiListBoxOutline));
  document
    .querySelector("[data-tasks='today']")
    .prepend(createSvg(mdiCalendarToday));
  document
    .querySelector("[data-tasks='week']")
    .prepend(createSvg(mdiCalendarWeekOutline));
  document
    .querySelector("nav>.projects")
    .prepend(createSvg(mdiCalendarAccountOutline));
  document.querySelector("#show-projects").append(createSvg(mdiChevronUp));
  document.querySelector("#hide-projects").append(createSvg(mdiChevronDown));
  document
    .querySelector("#sidebar .addProject")
    .prepend(createSvg(mdiPlusCircleOutline));


};

function createSvg(path) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconPath.setAttribute("d", path);
  iconSvg.setAttribute("viewBox", "0 0 24 24");
  iconSvg.appendChild(iconPath);
  return iconSvg;
}
// needs an argument for querrySelector all..
function createSvgs(selector, path, pend = "prepend") {
  const iconParents = document.querySelectorAll(selector);
  iconParents.forEach();
}

export { createIcons };
