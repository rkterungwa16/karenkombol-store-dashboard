import { FC, SVGProps } from "react";
import Svg from "../svg/Svg";

export const BackArrowIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <Svg {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </Svg>
  );
};
