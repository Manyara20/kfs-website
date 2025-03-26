import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import CustomerFeedback from '@/app/quick-links/CustomerFeedback/customersatisfaction';

function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <CustomerFeedback/>
      <FooterBottom />
    </div>
  );
}

export default KFSBoardPage;
