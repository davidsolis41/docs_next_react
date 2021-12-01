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

  let styleContainer = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  } as React.CSSProperties;

  let styleModal = {
    width,
    height,
    borderRadius,
    backgroundColor,
    position: "absolute",
    overflowY,
    zIndex: 500,
  } as React.CSSProperties;

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
      <div
        style={styleContainer}
        className="flex-row align-center absolute overflow-hidden justify-center h-100vh w-100vw"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.65)",
            zIndex: 500,
            height: "100vh",
            width: "100wv",
          }}
          onClick={() => props.close()}
        ></div>
        <div
          className="flex-row justify-center align-start content-modal zIndex-100"
          style={styleModal}
        >
          <CerrarModal />
          <section className="flex-row space-around align-start w-100">
            {props.children}
          </section>
        </div>
      </div>
    </>
  );
}

export default Modal;
