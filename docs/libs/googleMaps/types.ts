export interface IPropsMaps {
  apiKey: string;
  lenguaje?: string;
  width?: string;
  height?: string;
  centro?: { lat?: number; lng?: number };
  zoom?: number;
  versionMap?: string;
  positionZoomControl?:
    | "BOTTOM_LEFT"
    | "BOTTOM_RIGHT"
    | "TOP_LEFT"
    | "TOP_RIGHT";
  children?: any;
  onLoad?: (map: google.maps.Map) => void | Promise<void>;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

export interface IMap {
  options: google.maps.MapOptions;
  containerStyle: React.CSSProperties;
  center: { lat: number; lng: number };
  onLoad?: (map: google.maps.Map) => void | Promise<void>;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  zoom?: number;
  children?: any;
}

export interface ICargandoMap {
  containerStyle: React.CSSProperties;
}

export interface IMarker {
  id: any;
  position: { lat: number; lng: number };
  info: boolean;
  onClick?: (e: any) => void;
  activeMarker?: number | string;
  setActiveMarker?: React.Dispatch<any>;
  children?: any;
  icon?: any;
  draggable?: boolean;
  opacity?: number;
  zIndex?: number;
}

export interface IPathPoligon {
  lat: number;
  lng: number;
}

export interface IPoligon {
  path: IPathPoligon[];
  draggable?: boolean;
  editable?: boolean;
  onClick?: (e: any) => void;
}
