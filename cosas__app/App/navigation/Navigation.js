import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { AuthContext, ProfileContext, StoreContext } from "../auth/context";

import AppNavigator from "./AppNavigator";
function Navigation(props) {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState("");
  const [store, setStore] = useState("");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <StoreContext.Provider value={{ store, setStore }}>
          <NavigationContainer>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </StoreContext.Provider>
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export default Navigation;
