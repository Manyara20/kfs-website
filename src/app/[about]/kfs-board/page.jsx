// src/app/about/kfs-board/page.jsx
import KFSBoardSection from "@/app/[about]/kfs-board/KFSBoardSection";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <KFSBoardSection/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
