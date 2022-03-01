import React from "react";
import IModal from "./types";

function Modal(props: IModal) {
  const {
    width = "90%",
    height = "90%",
    borderRadius = 10,
    backgroundColor = "white",
    pathIconClose = "/close.png",
    overflowY = "hidden",
    overflowX = "hidden",
  } = props;

  const styleContainer: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
    overflowX: "hidden",
    overflowY: "hidden",
  };
  const styleShadow: React.CSSProperties = {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    backgroundColor: "rgba(0,0,0,0.65)",
    zIndex: 500,
  };
  const styleModal: React.CSSProperties = {
    display: "flex",
    flexFlow: "column wrap",
    width,
    height,
    borderRadius,
    backgroundColor,
    overflowX: "hidden",
    overflowY: "hidden",
    position: "absolute",
    zIndex: 500,
  };

  const styleContainerModal: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    flexGrow: 1,
    justifyContent: "space-around",
    justifyItems: "space-around",
    alignContent: "flex-start",
    alignItems: "flex-start",
    overflowY,
    overflowX,
  };

  function CerrarModal() {
    const estilosIcono: React.CSSProperties = {
      backgroundImage: `url(${pathIconClose})`,
      width: "18px",
      height: "100%",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      cursor: "pointer",
    };
    const estilosBar: React.CSSProperties = {
      width: "100%",
      height: "18px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-end",
      paddingTop: "4px",
      paddingBottom: "4px",
    };

    return (
      <div style={estilosBar}>
        <div style={estilosIcono} onClick={() => props.close()}></div>
        <div style={{ width: "8px" }}></div>
      </div>
    );
  }

  return (
    <>
      <div style={styleContainer}>
        <div style={styleShadow} onClick={() => props.close()}></div>
        <div style={styleModal}>
          <CerrarModal />
          <section style={styleContainerModal}>{props.children}</section>
        </div>
      </div>
    </>
  );
}

export default Modal;
