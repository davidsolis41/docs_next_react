import { Socket } from "socket.io-client";

export interface IReturnUseSocket {
  io: Socket | any;
  online: boolean;
  conectar: () => void;
  desconectar: () => void;
}
