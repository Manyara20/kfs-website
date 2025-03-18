import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Lawenforcement from '@/app/[about]/core-programs/forest-protection-security/Lawenforcement'

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <Lawenforcement/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;