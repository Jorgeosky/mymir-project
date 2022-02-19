import React, { createContext, useState } from 'react';

const UserContext = createContext({});

function UserProvider({ children }: any) {
  const [state, dispatch] = useState({ user: null });
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
