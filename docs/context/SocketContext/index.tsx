import React from "react";
import { io } from "socket.io-client";
import useGlobalContext from "../GlobalContext/useGlobalContext";
import { urlSocket } from "../../utils/url";
import type { Socket } from "socket.io-client";

export const SocketContext: React.Context<any> = React.createContext({});

function SocketContextProvider({ children }: { children?: any }) {
  const {
    data: { auth },
  } = useGlobalContext();

  const socket: Socket = React.useMemo(() => {
    return io(urlSocket, {
      transports: ["websocket"],
      query: { "x-access-token": auth.token },
      autoConnect: false,
    });
  }, [auth.token]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export default SocketContextProvider;

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
