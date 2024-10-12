import HeaderBox from "@/components/headerBox";
import RightSidebar from "@/components/rightSidebar";
import TotalBalanceBox from "@/components/totalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const page = async () => {
  const loggeIn = await getLoggedInUser();
  console.log(loggeIn,'Arun123')
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title={"Welcome"}
            type="greeting"
            user={`${loggeIn.firstName} ${loggeIn.lastName}`}
            subtext={"Manage your banck activies efficiently here"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10235.25}
          />
          RECENT TRANSACTION
        </header>
      </div>
      <RightSidebar user={loggeIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default page;
