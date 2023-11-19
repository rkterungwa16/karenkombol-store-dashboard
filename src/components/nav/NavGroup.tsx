import {
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import { Transition } from "react-transition-group";
import { NavItem } from "./NavItem";

export interface NavGroupProps {
  children?: ReactNode;
  className?: string;
  toggler?: string | ReactNode;
  icon?: ReactElement;
  handleSetCurrentOpenItem?: (value: string) => void;
  visible?: boolean;
  idx?: string;
  href?: string;
}

export const NavGroup = forwardRef<HTMLLIElement, NavGroupProps>(
  (
    {
      children,
      className,
      idx,
      toggler,
      handleSetCurrentOpenItem,
      visible,
      icon,
      ...rest
    },
    ref,
  ) => {
    const [height, setHeight] = useState<number | string>();
    const navItemsRef = useRef<HTMLUListElement>(null);

    const handleTogglerOnCLick = () => {
      handleSetCurrentOpenItem?.(idx ? idx : "");
    };

    const style: CSSProperties = {
      height: 0,
    };

    const onEntering = () => {
      navItemsRef &&
        navItemsRef.current &&
        setHeight(navItemsRef.current.scrollHeight);
    };

    const onEntered = () => {
      setHeight("auto");
    };

    const onExit = () => {
      navItemsRef &&
        navItemsRef.current &&
        setHeight(navItemsRef.current.scrollHeight);
    };

    const onExiting = () => {
      // @ts-expect-error reflow is necessary to get correct height of the element
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const reflow =
        navItemsRef && navItemsRef.current && navItemsRef.current.offsetHeight;
      setHeight(0);
    };

    const onExited = () => {
      setHeight(0);
    };

    const transitionStyles: Record<
      string,
      { [x: string]: string | number | undefined }
    > = {
      entering: { display: "block", height: height },
      entered: { display: "block", height: height },
      exiting: { display: "block", height: height },
      exited: { height: height },
    };
    console.log("visible ____", visible);
    return (
      <li
        className={className}
        // onClick={handleTogglerOnCLick}
        ref={ref}
      >
        {toggler && (
          <NavItem {...rest} icon={icon} onClick={handleTogglerOnCLick}>
            {toggler}
          </NavItem>
        )}
        <Transition
          in={visible}
          timeout={300}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
        >
          {(state) => (
            <ul
              style={{ ...style, ...transitionStyles[state] }}
              ref={navItemsRef}
            >
              {visible ? children : null}
            </ul>
          )}
        </Transition>
      </li>
    );
  },
);
