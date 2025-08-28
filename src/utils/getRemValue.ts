export const getRemValue = (): number => {
  const element = document.createElement("div");
  element.style.width = "1rem";
  element.style.display = "none";
  document.body.appendChild(element);
  const remValue = parseFloat(getComputedStyle(element).width);
  element.remove();
  return remValue;
};
