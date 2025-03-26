import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Treeplanting from "@/app/quick-links/tree-planting/Treeplanting"

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <Treeplanting/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
