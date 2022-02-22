import { useContext } from "react";
import GlobalContext from "./globalContext";
import { IGlobalState } from "./types";

const useGlobalContext = (): IGlobalState => useContext(GlobalContext) as any;

export default useGlobalContext;
