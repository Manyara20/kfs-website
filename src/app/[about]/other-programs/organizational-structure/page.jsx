import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import OrganizationalStructure from '@/app/[about]/other-programs/organizational-structure/OrganizationalStructure';

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <OrganizationalStructure/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
