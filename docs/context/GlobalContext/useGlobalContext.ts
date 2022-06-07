import { useContext } from "react";
import { GlobalContext } from "./index";
import type { IGlobalContext } from "./types";

export default (): IGlobalContext => useContext(GlobalContext) as any;
