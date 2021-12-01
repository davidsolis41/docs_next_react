import { useContext } from "react";
import { SocketContext } from "./index";
import { ISocketContext } from "./types";

const useSocketContext = (): ISocketContext => useContext(SocketContext) as any;

export default useSocketContext;
