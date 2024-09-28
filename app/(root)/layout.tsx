
import MobileNav from "@/components/mobileNav";
import Sidebar from "@/components/SideBar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   const loggedIn = await getLoggedInUser();
    // const loggedIn = { firstName: "Arun", lastName: 'Vijayakumar' };
    const loggedIn = {
        $id: "",
        email: "arunstark85@gmail.com",
        userId: "",
        dwollaCustomerUrl: "",
        dwollaCustomerId: "",
        firstName: "Arun",
        lastName: "Vijayakumar",
        address1: "",
        city: "",
        state: "",
        postalCode: "",
        dateOfBirth: "",
        ssn: "",
      }

//   if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
