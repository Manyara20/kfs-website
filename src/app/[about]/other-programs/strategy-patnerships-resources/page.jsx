import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import StrategyPatnershipsResources from '@/app/[about]/other-programs/strategy-patnerships-resources/StrategyPatnershipsResources'

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <StrategyPatnershipsResources/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
