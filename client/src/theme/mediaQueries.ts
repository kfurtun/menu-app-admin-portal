interface BreakPoints {
  [key: string]: number;
}

interface MediaQueries {
  [key: string]: string;
}

export const breakPoints: BreakPoints = {
  small: 540,
  medium: 768,
  large: 1024,
  xLarge: 1200,
};

const createMediaQuery = (minWidth: number): string => {
  return `@media (min-width:${minWidth}px)`;
};

export const mediaQueries: MediaQueries = {
  small: createMediaQuery(breakPoints.small),
  medium: createMediaQuery(breakPoints.medium),
  large: createMediaQuery(breakPoints.large),
  xLarge: createMediaQuery(breakPoints.xLarge),
};
