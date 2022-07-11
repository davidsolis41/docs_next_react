import React from "react";
import useGlobalContext from "../GlobalContext/useGlobalContext";
import { io } from "socket.io-client";

// Utils
import { urlSocket } from "../../utils/url";

// Types
import type { Socket } from "socket.io-client";

// Creando el contexto inicial con un mensaje de error
const SocketContext: React.Context<Socket> = React.createContext({
  msg: "No tienes acceso a SocketContext",
} as any);

function SocketContextProvider({ children }: any): JSX.Element {
  const {
    data: {
      auth: { login, token },
    },
  } = useGlobalContext();

  // * Memorizando el valor de conexion a socket
  const socket: Socket = React.useMemo(
    () =>
      io(urlSocket, {
        transports: ["websocket"],
        query: { "x-access-token": token },
        autoConnect: false,
      }),
    [token]
  );

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export default SocketContextProvider;

// * Creando el hook para utilizar este contexto
export const useSocketContext = (): Socket => React.useContext(SocketContext);

/*
  import type { Socket } from "socket.io-client";
  type ISocketContext = { io: Socket, online: boolean }

  const [online, setOnline] = React.useState(false);
  React.useEffect(() => {
    if (socket) {
      setOnline(socket.connected);
      socket.on("connect", () => setOnline(true));
      socket.on("disconnect", () => setOnline(false));
    }
    return () => { socket.disconnect(); }
  }, [socket]);
  return (
    <SocketContext.Provider value={{ io: socket, online } as ISocketContext}>
      {children}
    </SocketContext.Provider>
  );
*/
