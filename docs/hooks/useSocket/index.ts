import React from "react";
import io, { Socket } from "socket.io-client";
import { IReturnUseSocket } from "./types";

function useSocket(url: string, token: string): IReturnUseSocket {
  const [online, setOnline] = React.useState(false);

  const socket: Socket = React.useMemo(
    () =>
      io(url, {
        transports: ["websocket"],
        query: { "x-access-token": token },
      }),
    [token]
  );

  const conectar = () => {
    if (!socket?.connected) socket?.connect();
  };

  const desconectar = () => {
    if (socket && socket.connected) socket?.disconnect();
  };

  React.useEffect(() => {
    if (socket) {
      setOnline(socket.connected);

      socket.on("connect", () => setOnline(true));

      socket.on("disconnect", () => setOnline(false));
    }
  }, [socket]);

  if (typeof window !== "undefined") {
    return {
      io: socket,
      online,
      conectar,
      desconectar,
    };
  } else {
    return {
      io: {
        on: () => {},
        once: () => {},
        off: () => {},
        emit: () => {},
        close: () => {},
        disconnect: () => {},
        id: "",
      },
      online: false,
      conectar: () => {},
      desconectar: () => {},
    };
  }
}

export default useSocket;
