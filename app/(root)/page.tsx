import { HeaderBox } from "@/components/headerBox";
import React from "react";

const page = () => {
  const loggeIn = { firstName: "User" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title={"Welcome"}
            type="greeting"
            user={loggeIn?.firstName}
            subtext={"Manage your banck activies efficiently here"}
          />
        </header>
      </div>
    </section>
  );
};

export default page;
