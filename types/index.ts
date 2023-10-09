import { SVGProps, Dispatch, SetStateAction } from "react";

import { ThemeProviderProps } from "next-themes/dist/types";
import { SwitchProps } from "@nextui-org/switch";

export interface LocationData {
  address: string;
  latitude: number;
  longitude: number;
  passenger?: string;
}

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

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export interface ContextProps {
  location: LocationData[];
  setLocation: Dispatch<SetStateAction<LocationData[]>>;
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
  icon?: boolean;
}

export interface ActualLocationProps {
  loading: boolean;
  address: string;
}

export interface ListItem {
  listItems: {
    firstAddress: string;
    secondAddress: string;
  }[];
}

export interface ListItemsProps {
  disabled: boolean;
}

export interface ListFooterProps {
  disabled: boolean;
}

export interface LocationActionsProps {
  disabled: boolean;
  data: LocationData;
  erase: (value: LocationData) => void;
}
export interface LocationSearchProps {
  setLoading: (loading: boolean) => void;
  setLocation: (location: LocationData) => void;
}