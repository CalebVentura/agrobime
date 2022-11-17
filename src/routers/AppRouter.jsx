import React from "react";
import { Route, Routes } from "react-router-dom";
import { Auth, Home } from "../ui";
import { ClientRoutes } from "./ClientRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = () => {
  return (
    <div className="container-fluid p-4">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/auth' element={<PublicRoutes> <Auth/> </PublicRoutes>} />
        <Route path="/*" element={ <PrivateRoutes> <ClientRoutes /> </PrivateRoutes>} />
      </Routes>
    </div>
  );
};