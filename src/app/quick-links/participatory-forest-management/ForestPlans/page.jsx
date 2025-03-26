import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import ForestPlans from '@/app/quick-links/participatory-forest-management/ForestPlans/plans';

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <ForestPlans/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
