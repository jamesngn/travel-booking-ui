import React, { PropsWithChildren } from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header>Travel App</header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        {/* Add your footer content here */}
        Travel App &copy; 2024
      </footer>
    </div>
  );
};

export default AppLayout;
