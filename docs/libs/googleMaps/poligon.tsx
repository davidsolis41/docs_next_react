import React from "react";
import { Polygon } from "@react-google-maps/api";
import { IPoligon, IPathPoligon } from "./types";

function Poligon(props: IPoligon) {
  const [path, setPath] = React.useState<IPathPoligon[]>(props.path);

  // Definicion de las referencias y listeners para el poligono
  const polygonRef = React.useRef<any>(null);
  const listenersRef = React.useRef<any[]>([]);

  // llamando al setPath y pasando el nuevo path
  const onEdit = React.useCallback(() => {
    if (polygonRef.current) {
      let current: any = polygonRef.current;
      const nextPath = current
        .getPath()
        .getArray()
        .map((latLng: any) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  // Vincular referencias a Polygon y listeners actuales
  const onLoad = React.useCallback(
    (polygon: any) => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      let lCurrent: any[] = listenersRef.current;
      lCurrent.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  // limpiado de refencias al desmontarse
  const onUnmount = React.useCallback(() => {
    listenersRef.current.forEach((lis: any) => lis.remove());
    polygonRef.current = null;
  }, []);

  return (
    <Polygon
      editable={props.editable}
      draggable={props.draggable}
      path={path}
      onMouseUp={onEdit}
      onDragEnd={onEdit}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  );
}

export default Poligon;
