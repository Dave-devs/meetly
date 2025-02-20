import { Metadata } from "next";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export const metadata: Metadata = {
  title: "MEETLY",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};

// This is the layout for the home(/) page.
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-1 flex-col min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}
