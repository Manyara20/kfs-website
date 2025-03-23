import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import CorporateServices from '@/app/[about]/other-programs/corporate-services/CorporateServices';

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <CorporateServices/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
