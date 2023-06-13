import {
    mdiCalendarAccountOutline,
  mdiCalendarToday,
  mdiCalendarWeekOutline,
  mdiChevronDown,
  mdiListBoxOutline,
} from "@mdi/js";

const createIcons = () => {
  createSvg(mdiListBoxOutline, "[data-tasks='all']");
  createSvg(mdiCalendarToday, "[data-tasks='today']");
  createSvg(mdiCalendarWeekOutline, "[data-tasks='week']");
  createSvg(mdiCalendarAccountOutline, "nav>.projects");
  createSvg(mdiChevronDown, "nav>.projects",'append');
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
