import { createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const signup = (form) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.find(u => u.email === form.email);
    if (emailExists) {
      alert("User already exists");
      return false;
    }
    const newUser = {
      ...form,
      cart: [],
      orders: []
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };
  const login = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      u => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };
  return (
    <AuthContext.Provider value={{ signup, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}