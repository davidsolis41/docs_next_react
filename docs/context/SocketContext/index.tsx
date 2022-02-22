import React from "react";
import useGlobalContext from "../GlobalContext/useGlobalContext";
import { urlSocket } from "../../utils/url";
import { ISocketContext } from "./types";
import { io, Socket } from "socket.io-client";

export const SocketContext: React.Context<any> = React.createContext({});

function SocketState({ children }: { children?: any }) {
  const {
    data: {
      auth: { login, token },
    },
  } = useGlobalContext();

  const socket: Socket = React.useMemo(
    () =>
      io(urlSocket, {
        transports: ["websocket"],
        query: { "x-access-token": token },
        autoConnect: false,
      }),
    [token]
  );

  const [online, setOnline] = React.useState(false);

  React.useEffect(() => {
    if (socket) {
      setOnline(socket.connected);

      socket.on("connect", () => setOnline(true));

      socket.on("disconnect", () => setOnline(false));
    }

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={{ io: socket, online } as ISocketContext}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketState;
