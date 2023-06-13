import { mdiCalendarToday } from "@mdi/js";

const createIcons = () => {
  createSvg(mdiCalendarToday, "[data-tasks='all']");
  createSvg(mdiCalendarToday, "[data-tasks='today']");
  createSvg(mdiCalendarToday, "[data-tasks='week']");
};
function createSvg(path, parentSelector) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconPath.setAttribute("d", path);
  iconSvg.setAttribute("viewBox", "0 0 24 24");
  iconSvg.appendChild(iconPath);
  document.querySelector(parentSelector).prepend(iconSvg);
}
export { createIcons };
