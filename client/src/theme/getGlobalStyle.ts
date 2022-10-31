export const getGlobalStyle = (variable: string): string => {
  return getComputedStyle(document.body).getPropertyValue(variable);
};
