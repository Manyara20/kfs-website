import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import GreenZoneProject from '@/app/[about]/projects/GZDSP-II/GreenZoneProject';

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <GreenZoneProject/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
