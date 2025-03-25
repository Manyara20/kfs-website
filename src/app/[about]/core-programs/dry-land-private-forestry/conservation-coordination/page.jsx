import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import ForestConservationManagement from '@/app/[about]/core-programs/forest-conservation-management/ForestConservationManagement'

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <ForestConservationManagement/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;