import {SVGProps} from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SwitchProps } from "@nextui-org/switch";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export interface RootLayoutProps {
  children: React.ReactNode;
}

export interface PlaceItemProps {
  firstAddress: string;
  secondAddress: string;
}

export interface ItemPartProps {
  letter?: string | null;
  address: string;
  icon?: boolean;
}

export interface BeginningOrEndProps {
  isBeginning: boolean;
}

export interface ABPointProps {
  letter: string | null;
}

export interface ActualLocationProps {
  address?: string;
}