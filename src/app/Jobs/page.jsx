// pages/job-vacancies.js
import Link from 'next/link';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

export default function JobVacancies() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#023011', minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Main Content */}
      <main>
        {/* Header Section */}
        <div
          style={{
            backgroundColor: '#1c441c',
            padding: '20px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Job Vacancies</h1>
        </div>

        {/* Introduction Section */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#023011', marginBottom: '10px' }}>
            Join the Kenya Forest Service
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#7f8c8d',
              lineHeight: '1.6',
              backgroundColor: '#e0e0e0',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'left',
            }}
          >
            Kenya Forest Service (KFS) is a State Corporation established under the Forest Conservation & Management Act FCMA), 2016. The Mandate of KFS is to protect, conserve, develop and sustainably manage forests and allied resources for environmental stability and social-economic benefits for the present and future generations. In addition, KFS provides technical advisory services to the County Governments to execute their respective devolved forestry functions.
            <br /><br />
            KFS has partnered with the Global Environment Facility (GEF-7) through Food and Agricultural Organization of the United Nation (FAO) to support implementation of the Integrated Landscape Management for Conservation and Restoration of Mt. Elgon Ecosystem Project in Western Kenya under the global impact program on Food Systems, Land Use and Restoration (FOLUR).
            <br /><br />
            In order to strengthen its Human Resource capacity for the implementation of the project above, the Service wishes to recruit qualified and competent personnel for a period of one-year renewable temporary contract subject to satisfactory performance and availability of funds.
          </p>
        </div>

        {/* Job Listing Section */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#023011', marginBottom: '20px' }}>
            Available Positions
          </h3>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h4 style={{ fontSize: '1.2rem', color: '#023011', margin: '0 0 10px 0' }}>
              COMMUNICATION EXPERT KFS GRADE 6 (REF KFS/CE/2025) ONE (1) POST
            </h4>
            <h5 style={{ fontSize: '1.1rem', color: '#023011', margin: '10px 0' }}>
              Job Specification
            </h5>
            <p style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6' }}>
              The Communication Expert shall report directly to the Project Manager and working in liaison with the Service’s corporate communication department and in collaboration with other Project staff and partners.
            </p>
            <h5 style={{ fontSize: '1.1rem', color: '#023011', margin: '10px 0' }}>
              Duties and Responsibilities
            </h5>
            <ul style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Implement relevant communication strategies.</li>
              <li>Facilitate all communication training programs targeting staff, KALRO, FAO, external staff, and other stakeholders within the project area.</li>
              <li>Participate and contribute in interdepartmental planning and monitoring project activities.</li>
              <li>Spearhead effective exchange of information between the project and its publics.</li>
              <li>Undertake communication research activities and dissemination of research findings to relevant audience within the project area.</li>
              <li>Mentoring and coaching.</li>
            </ul>
            <h5 style={{ fontSize: '1.1rem', color: '#023011', margin: '10px 0' }}>
              Person Specification
            </h5>
            <ul style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Bachelor’s degree in Communication, Social Sciences, Journalism, International Relations or other related fields of study.</li>
              <li>Served for at least six (6) years in a relevant position.</li>
              <li>Member of a professional body such as PRSK.</li>
              <li>Proficiency in Computer applications.</li>
              <li>Fulfil the requirements of Chapter Six of the Constitution.</li>
            </ul>
            <h5 style={{ fontSize: '1.1rem', color: '#023011', margin: '10px 0' }}>
              Skills and Attributes
            </h5>
            <ul style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Good oral and written communication skills in Kiswahili and English.</li>
              <li>Time management and proper planning.</li>
              <li>Good analytical skills.</li>
              <li>Team player.</li>
            </ul>
          </div>
        </div>

        {/* How to Apply Section */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#023011', marginBottom: '10px' }}>
            How to Apply
          </h3>
          <p style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6', textAlign: 'left' }}>
            <strong>Step 1:</strong><br />
            The full details of these positions are available at Kenya Forest Service website,{' '}
            <Link
              href="https://www.kenyaforestservice.org"
              target="_blank"
              style={{ color: '#6A961F', textDecoration: 'underline' }}
            >
              https://www.kenyaforestservice.org
            </Link>.
            <br /><br />
            Qualified and interested applicants who meet the requirements are invited to apply by visiting Kenya Forest Service website and select the JOBS TAB to proceed with the online registration. Following successful online registration, the candidates will be required to download and print the PDF document generated by the system.
            <br /><br />
            <strong>Step 2:</strong><br />
            The hard copy application should clearly indicate reference number for the position applied for and attaching current curriculum vitae (clearly indicating the mobile number, names and contact details of three referees), copies of relevant testimonials, academic and professional certificates and a copy of National identity card. The application should clearly be marked with reference number for the position applied for and should either be sent through the post office or hand delivered to the Kenya Forest Service Headquarters, Karura through the address provided below in a sealed envelope marked “APPLICATION FOR (WRITE POSITION & REFERENCE); so as to reach Kenya Forest Service not later than Tuesday 25th March, 2025 by 5.00 pm.
            <br /><br />
            <strong>Chief Conservator of Forests,</strong><br />
            Kenya Forest Service, Karura, Off Kiambu Road,<br />
            P.O. Box 30513 – 00100, G.P.O.<br />
            NAIROBI, KENYA.
          </p>
        </div>

        {/* Additional Notes Section */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'left',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#023011', marginBottom: '10px' }}>
            Note
          </h3>
          <ol style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>The application will not be considered complete unless the two steps are successfully undertaken. Further, submission of the application through email shall not be considered.</li>
            <li>Shortlisted candidates shall be required to produce originals of their National ID, Academic and Professional certificates during interviews.</li>
            <li>The successful candidates will be expected to fulfil the requirements of chapter six of the Constitution of Kenya 2010.</li>
          </ol>
          <p style={{ fontSize: '1rem', color: '#7f8c8d', lineHeight: '1.6', marginTop: '20px' }}>
            The Service is ISO accredited and an equal opportunity employer and committed to diversity and inclusion of all Kenyans. In this regard, Youth, Women, Person living with disabilities, Marginalized and Minority communities with the requisite qualifications are encouraged to apply. Please note that only shortlisted candidates will be contacted. Any form of canvassing will lead to automatic disqualification.
          </p>
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}