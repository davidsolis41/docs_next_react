import React from "react";
import { Polyline } from "@react-google-maps/api";

export type PolilineProps = {
  path: { lat: number; lng: number }[];
  key: any;
  color: string;
  editable?: boolean;
};

function Poliline({
  path: patthh,
  color,
  editable = false,
  key,
}: PolilineProps) {
  const polylineRef = React.useRef(null);
  const listenersRef = React.useRef([]);
  const [path, setPath] = React.useState(patthh);

  // Funcion que se ejecutara cuando la polilinea es modificada
  const onEdit = React.useCallback(() => {
    if (polylineRef.current) {
      let referencia: any = polylineRef.current;
      const nextPath = referencia
        .getPath()
        .getArray()
        .map((latLng: any) => latLng.toJSON());
      setPath(nextPath);
    }
  }, [setPath]);

  //Funcion que se ejecutara al cargar la polilinea
  const onLoad = React.useCallback(
    (polyline: any) => {
      polylineRef.current = polyline;
      const path = polyline.getPath();

      var listenRef: any = listenersRef.current;
      listenRef.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  //Limpiado de listeners cuando se desmonta la polilinea
  const onUnmount = React.useCallback(() => {
    listenersRef.current.forEach((lis: any) => lis.remove());
    polylineRef.current = null;
  }, []);

  return (
    <Polyline
      key={key}
      ref={polylineRef}
      path={path}
      options={{ editable, strokeColor: color }}
      onMouseUp={onEdit}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  );
}

export default Poliline;
