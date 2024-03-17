// import React, { useState, useContext, createContext } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//   });
//   return (
//     <AuthContext.Provider value={[auth,setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };
import React from 'react'

const auth = () => {
  return (
    <div>auth</div>
  )
}

export default auth