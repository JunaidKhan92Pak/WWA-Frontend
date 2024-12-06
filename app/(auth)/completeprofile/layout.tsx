import MobileSidebar from "./Components/MobileSidebar";
import PageTrack from "./Components/PageTrack";
import { SidebarProfile } from "./Components/SidebarProfile";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen relative">
      <div className="">
        <MobileSidebar />
      </div>
      <div className="h-full hidden md:flex justify-center items-center lg:w-1/3 md:flex-col md:fixed md:inset-y-7 z-[80]">
        <div className="hidden sm:block w-3/4">
          <SidebarProfile />
        </div>
      </div>
      <div className="sm:mt-0 sm:pt-0">
        <div className="text-center mt-16">
          <PageTrack />
        </div>
        <main className="md:ml-96 md:w-3/5 w-full pl-5 md:mx-12 mt-5 ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
