import { FC, SVGProps } from "react";

export const Svg: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { children, ...others } = props;
  return (
    <svg {...others} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
};

Svg.defaultProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  height: "24",
  width: "24",
};

export default Svg;
