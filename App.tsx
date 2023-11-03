import { Text, View } from "react-native";
import { useState } from "react";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";

export default function App() {
      const [token, setToken] = useState("");

      if (token) {
            return <Home token={token}></Home>;
      } else {
            return <Login action={(t: string) => setToken(t)}></Login>;
      }
}
