import React from "react";
import { IModal } from "./types";

function Modal(props: IModal) {
  const {
    width = "85%",
    height = " 85%",
    borderRadius = 10,
    backgroundColor = "white",
    pathIconClose = "/close.png",
    overflowY = "hidden",
  } = props;

  const styleContainer: React.CSSProperties = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };

  const styleModal: React.CSSProperties = {
    width,
    height,
    borderRadius,
    backgroundColor,
    position: "absolute",
    overflowY: "hidden",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "center",
    justifyItems: "center",
    zIndex: 500,
  };

  const styleContainerModal: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    justifyItems: "space-around",
    alignContent: "flex-start",
    alignItems: "flex-start",
  };

  function CerrarModal() {
    let estilosIcono = {
      backgroundImage: `url(${pathIconClose})`,
      width: "18px",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      cursor: "pointer",
    } as React.CSSProperties;

    return (
      <div
        className="w-100 flex-row justify-end mt-5 mr-10"
        style={{ height: "18px" }}
      >
        <div
          style={estilosIcono}
          className="h-100 background-image"
          onClick={() => props.close()}
        ></div>
      </div>
    );
  }

  return (
    <>
      <div style={styleContainer}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.65)",
            zIndex: 500,
            height: "100vh",
            width: "100wv",
          }}
          onClick={() => props.close()}
        ></div>
        <div style={styleModal}>
          <CerrarModal />
          <section style={styleContainerModal}>{props.children}</section>
        </div>
      </div>
    </>
  );
}

export default Modal;
