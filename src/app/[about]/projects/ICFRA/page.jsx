import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import ICFRADocs from "@/app/[about]/projects/ICFRA/ICFRADocuments";

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <ICFRADocs/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
