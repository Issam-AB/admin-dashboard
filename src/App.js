import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New,.jsx";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import React from "react";

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <div className={dark ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home setDark={setDark} />} />
            <Route path="login" element={<Login setDark={setDark} />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
