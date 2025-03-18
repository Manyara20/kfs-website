import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import SeniorManagementSection from "@/app/[about]/senior-management/SeniorManagement";

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <SeniorManagementSection/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
