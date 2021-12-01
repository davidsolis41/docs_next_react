import React from "react";
import { InfoWindow, Marker as Markerr } from "@react-google-maps/api";
import { IMarker } from "./types";

function Marker(props: IMarker) {
  return (
    <Markerr
      key={props.id}
      position={props.position}
      draggable={props.draggable || false}
      icon={props.icon}
      opacity={props.opacity}
      zIndex={props.zIndex}
      onClick={
        props.info
          ? () => props.setActiveMarker!(props.id)
          : props.onClick || undefined
      }
    >
      {props.info && props.activeMarker === props.id ? (
        <InfoWindow onCloseClick={() => props.setActiveMarker!(null)}>
          {props.children}
        </InfoWindow>
      ) : null}
    </Markerr>
  );
}

export default Marker;
