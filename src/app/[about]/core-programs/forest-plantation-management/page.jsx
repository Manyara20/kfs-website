import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import ForestPlantationManagement from '@/app/[about]/core-programs/forest-plantation-management/ForestPlantationManagement'

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <ForestPlantationManagement/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;