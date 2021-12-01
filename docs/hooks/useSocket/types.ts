import { Socket } from "socket.io-client";

export interface IReturnUseSocket {
  socket: Socket | any;
  online: boolean;
  conectar: () => void;
  desconectar: () => void;
}
