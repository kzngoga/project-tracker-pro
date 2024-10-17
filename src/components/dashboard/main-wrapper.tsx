import React, { useState } from "react";
import MainHeader from "../layout/main-header";
import Sidebar from "../layout/sidebar";

interface MainWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function MainWrapper({ children, title }: MainWrapperProps) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <MainHeader
        title={title}
        setShowSidebar={() => setShowSidebar(!showSidebar)}
      />

      <div className="flex mt-14 h-[calc(100vh-56px)]">
        {showSidebar && <Sidebar />}

        <div className="pt-5 px-8 pb-10 h-full overflow-auto">{children}</div>
      </div>
    </>
  );
}
