export const breakpoints = {
  mobile: "600px",
  tablet: "80.0rem",
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${
    breakpoints.tablet
  })`
};
