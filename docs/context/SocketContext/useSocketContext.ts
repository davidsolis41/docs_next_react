import { useContext } from "react";
import { SocketContext } from "./index";
import type { Socket } from "socket.io-client";

export default (): Socket => useContext(SocketContext) as any;
