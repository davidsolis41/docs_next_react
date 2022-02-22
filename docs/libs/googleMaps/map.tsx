import { GoogleMap } from "@react-google-maps/api";
import React from "react";
import { IMap } from "./types";

export default React.memo(function (props: IMap) {
  const onLoadd = React.useCallback(props.onLoad || function (map) {}, []);
  const onClickk = React.useCallback(props.onClick || function (e) {}, []);
  return (
    <GoogleMap
      onLoad={onLoadd}
      onClick={onClickk}
      options={props.options}
      mapContainerStyle={props.containerStyle}
      center={props.center}
      zoom={props.zoom || 10}
    >
      {/* Componentes hijo, such as markers, Ventanas de info, etc. */}
      {props.children}
    </GoogleMap>
  );
});
