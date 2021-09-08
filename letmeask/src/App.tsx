import { createContext, useState } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";

export const AuthContext = createContext({} as any)

function App() {

  const [user, setUser] = useState()

  return (
    <BrowserRouter>

      <AuthContext.Provider value={{ user, setUser }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
