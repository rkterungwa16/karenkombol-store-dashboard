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
    const [height, setHeight] = useState<number | string>(0);
    const navItemsRef = useRef<HTMLUListElement>(null);

    const handleTogglerOnCLick = () => {
      handleSetCurrentOpenItem?.(idx ? idx : "");
    };

    const style: CSSProperties = {
      height: 0,
      transition: ".15s ease-out",
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

    return (
      <NavItem className={className} ref={ref}>
        {toggler && (
          <NavItem
            component="div"
            {...rest}
            icon={icon}
            onClick={handleTogglerOnCLick}
            alignItems="center"
            display="flex"
            hover={{
              background: "#f0eff0",
              color: "#99848b",
            }}
          >
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
          nodeRef={navItemsRef}
        >
          {(state) => (
            <ul
              ref={navItemsRef}
              style={{ ...style, ...transitionStyles[state] }}
            >
              {children}
            </ul>
          )}
        </Transition>
      </NavItem>
    );
  },
);
