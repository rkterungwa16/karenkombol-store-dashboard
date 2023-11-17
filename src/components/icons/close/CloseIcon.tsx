import { FC, SVGProps } from "react";
import Svg from "../svg/Svg";

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <Svg {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Svg>
  );
};
