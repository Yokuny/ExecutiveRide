import { SVGProps, Dispatch, SetStateAction } from "react";

import { ThemeProviderProps } from "next-themes/dist/types";
import { SwitchProps } from "@nextui-org/switch";

export type LocationData = {
  address: string;
  latitude: number;
  longitude: number;
  passenger?: string;
  creatAt: Date;
};

export type DataLocation = {
  data: LocationData;
};

export type PassengerItemProps = DataLocation & {
  index: number;
};

export type RacingDataItemProps = DataLocation & {
  firstPoint: LocationData;
};

export type LatitudeAndLongitude = {
  latitude: number;
  longitude: number;
};

export type Geolocation = {
  coords: LatitudeAndLongitude;
};

export type passengerData = {
  address: string;
  passenger: string;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type ProvidersProps = ChildrenProps & {
  themeProps?: ThemeProviderProps;
};

export type RoutesType = {
  label: string;
  href: string;
};

export type TabsProps = {
  routes: RoutesType[];
};

export type MenuProps = TabsProps & {
  loggedIn: boolean;
};

export type PlaceItemProps = {
  firstAddress: string;
  secondAddress: string;
};

export type Icon = {
  icon?: boolean;
};

export type ItemPartProps = Icon & {
  address: string;
};

export type BeginningOrEndProps = {
  isBeginning: boolean;
};

export type ActualLocationProps = {
  loading: boolean;
  address: string;
};

export type ListItem = {
  listItems: {
    firstAddress: string;
    secondAddress: string;
  }[];
};

export type DisabledProps = {
  disabled: boolean;
};

export type RouteDistanceAndDuration = {
  routeDistance: number;
  expectedDuration: number;
  routeInfo: {
    distance: any;
    duration: any;
    startAddress: any;
    endAddress: any;
  }[];
};

export type DistanceBodyProps = {
  data: RouteDistanceAndDuration | null;
};

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ThemeSwitchProps = {
  className?: string;
  classNames?: SwitchProps["classNames"];
};

export type ErrorProps = {
  error: Error;
  reset: () => void;
};

export type ContextProps = {
  location: LocationData[];
  setLocation: Dispatch<SetStateAction<LocationData[]>>;
  creatAt: null | Date;
  setCreatAt: Dispatch<SetStateAction<Date | null>>;
  currPassager: string;
  setCurrPassager: Dispatch<SetStateAction<string>>;
};
export type LocationActionsProps = {
  disabled: boolean;
  data: LocationData;
  erase: (value: LocationData) => void;
};
export type LocationSearchProps = {
  setLoading: (loading: boolean) => void;
  setLocation: (location: LocationData) => void;
};

export type RegisterInputsProps = {
  nameErr: boolean;
  emailErr: boolean;
  passwordErr: boolean;
  nameValidation: (value: string) => boolean;
  emailValidation: (value: string) => boolean;
  passwordValidation: (value: string) => boolean;
};

export type LoginInputsProps = {
  emailErr: boolean;
  passwordErr: boolean;
  emailValidation: (value: string) => boolean;
  passwordValidation: (value: string) => boolean;
};

