import { useContext } from "react";

import { AuthContext } from "../hoc/AuthProvider";

// useContext - відловлює/приймає значення контексту: value = { user, login, logout }
export const useAuth = () => useContext(AuthContext);
