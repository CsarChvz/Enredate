import * as SecureStore from "expo-secure-store";
import { getSessionToken } from "./auth.server";

async function createUserSession(idToken) {
  const token = await getSessionToken(idToken);
  await SecureStore.setItemAsync("sessionToken", token);
}

async function setUserUid(uid) {
  await SecureStore.setItemAsync("uid", uid);
}

async function getUserSession() {
  const token = await SecureStore.getItemAsync("sessionToken");
  return token;
}

async function deleteUserSession() {
  await SecureStore.deleteItemAsync("sessionToken");
}

export { createUserSession, getUserSession, deleteUserSession };
