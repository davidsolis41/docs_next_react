import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Map from "./map";
import CargandoMap from "./cargandoMap";
import ErrorLoad from "./errorLoad";
import { IPropsMaps } from "./types";

export default function Mapa(props: IPropsMaps): JSX.Element {
  // Estilos del contenedor del mapa
  const containerStyle = React.useMemo(
    () =>
      ({
        width: props.width || "400px",
        height: props.height || "400px",
      } as React.CSSProperties),
    []
  );

  // Ubicacion en el centro del mapa
  const center = React.useMemo(
    () => ({
      lat: props.centro?.lat || -3.745,
      lng: props.centro?.lng || -38.523,
    }),
    []
  );

  // opciones adicionales
  let options = React.useMemo(() => ({} as google.maps.MapOptions), []);

  //zoom inicial del mapa
  let zoom = React.useMemo(() => props.zoom, []);

  // props para el componente Map
  let propiedadesMapa = {
    center,
    options,
    containerStyle,
    zoom,
    onLoad: props.onLoad,
    onClick: props.onClick,
  };

  // Inicializacion de la carga del mapa y sus scripts
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: props.apiKey,
    language: props.lenguaje || "es",
    version: props.versionMap || "weekly",
  });

  // Si se produce un error en la carga del mapa
  if (loadError) return <ErrorLoad />;

  // Renderizado de los componentes
  if (isLoaded) return <Map {...propiedadesMapa}>{props.children}</Map>;
  else return <CargandoMap containerStyle={containerStyle} />;
}
