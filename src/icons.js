import {
    mdiCalendarAccountOutline,
  mdiCalendarToday,
  mdiCalendarWeekOutline,
  mdiChevronDown,
  mdiChevronUp,
  mdiListBoxOutline,
  mdiPlusCircleOutline,
} from "@mdi/js";

const createIcons = () => {
  createSvg(mdiListBoxOutline, "[data-tasks='all']");
  createSvg(mdiCalendarToday, "[data-tasks='today']");
  createSvg(mdiCalendarWeekOutline, "[data-tasks='week']");
  createSvg(mdiCalendarAccountOutline, "nav>.projects");
  createSvg(mdiChevronUp, "#show-projects",'append');
  createSvg(mdiChevronDown, "#hide-projects",'append');
  createSvg(mdiPlusCircleOutline, "#sidebar .addProject");
};
function createSvg(path, parentSelector,pend="prepend") {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconPath.setAttribute("d", path);
  iconSvg.setAttribute("viewBox", "0 0 24 24");
  iconSvg.appendChild(iconPath);
  document.querySelector(parentSelector)[pend](iconSvg);
}
export { createIcons };
