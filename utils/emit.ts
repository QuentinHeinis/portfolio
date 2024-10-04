export const emitHovered = () => {
  window.dispatchEvent(new Event("hovered"));
};
export const emitLeaveHovered = () => {
  window.dispatchEvent(new Event("leave"));
};
