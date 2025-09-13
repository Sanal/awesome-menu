import { getRemValue, getWindowDimensions } from "../../../../shared/lib/helpers";

export const handleAnchorScroll = (e: React.UIEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (!href) {
    return;
  }

  const targetElement = document.querySelector(href);

  if (!targetElement) {
    return;
  }

  const { width } = getWindowDimensions();
  const yOffset = width <= 1024 ? -getRemValue() * 2.5 : 0;
  const y =
    targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
