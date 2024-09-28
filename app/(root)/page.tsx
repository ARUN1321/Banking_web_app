import HeaderBox from "@/components/headerBox";
import RightSidebar from "@/components/rightSidebar";
import TotalBalanceBox from "@/components/totalBalanceBox";
import React from "react";

const page = () => {
  const loggeIn = {
    $id: "",
    email: "arunstark85@gmail.com",
    userId: "",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    firstName: "Arun", lastName: 'Vijayakumar',
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  };

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
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10235.25}
          />
          RECENT TRANSACTION
        </header>
      </div>
      <RightSidebar
        user={loggeIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  );
};

export default page;
