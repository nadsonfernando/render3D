type Option = {
  xs: number;
  sm: number;
  lg: number;
};

export type Spacing = {
  padding: Option;
  margin: Option;
  borderRadius: Option;

  dimensions: {
    width: number;
    height: number;
  };
};
