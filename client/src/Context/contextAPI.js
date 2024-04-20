import { createContext } from "react";

export const roomIdContext = createContext(null);

export const RoomIdProvider = (props) => {
  return <RoomIdProvider.Provider>{...props}</RoomIdProvider.Provider>;
};
