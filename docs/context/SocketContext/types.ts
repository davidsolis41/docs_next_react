import { Socket } from "socket.io-client";

export interface ISocketContext {
  io: Socket;
  online: boolean;
}
