import { Socket } from "socket.io-client";

export interface IReturnUseSocket {
  io: Socket;
  online: boolean;
}
