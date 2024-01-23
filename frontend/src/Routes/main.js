import React from "react";
import ProtectedRoute from "./protectedRoutes";

const Main = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-1">
        <ProtectedRoute />
      </div>
    </main>
  );
};

export default Main;
