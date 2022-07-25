import { NativeBaseProvider, View } from "native-base";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Drawer things
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import UserView from "./UserView";
import colors from "../../config/colors";
import { signOut, getAuth } from "firebase/auth";
import { ProfileContext, AuthContext, StoreContext } from "../../auth/context";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";

import MyAuthStack from "../AuthNavigator";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Quitar las cosas del onPress y de ahi resetear todo en el contexto y el signOut, pasar luego al Stack de autenticacion
function CustomDrawer(props) {
  const { user, setUser } = useContext(AuthContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const { store, setStore } = useContext(StoreContext);
  return (
    <NativeBaseProvider>
      <View flex={1} bg={colors.primary}>
        <UserView />
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <DrawerItem
          onPress={() => {
            setUser(null);
            setProfile("");
            setStore("");
          }}
          inactiveTintColor="white"
          label={"Logout"}
          icon={({ size, color }) => (
            <MaterialCommunityIcons name="logout" size={size} color={color} />
          )}
        />
      </View>
    </NativeBaseProvider>
  );
}

export default CustomDrawer;
