import { FC, SVGProps } from "react";
import Svg from "../svg/Svg";

export const ChevronLeftIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <Svg {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
};
