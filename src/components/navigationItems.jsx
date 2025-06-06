const navigationItems = [
  { label: "Home", link: "/" },
  {
    label: "About",
    subItems: [
      { label: "Organizational Structure", link: "/about/organizational-structure"},
      { label: "KFS Board", link: "/about/kfs-board" },
      { label: "Senior Management", link: "/about/senior-management" },
      { label: "Core Programs", link: "/about/core-programs" },
      { label: "Other Programs", link: "/about/other-programs" },
      { label: "Projects", link: "/about/projects" },
    ],
  },
  {
    label: "Media Center",
    subItems: [
      { label: "News & Events", link: "/mediacenter/news-events" },
      { label: "Photo Gallery", link: "/mediacenter/photo-gallery" },
      { label: "Events Calendar", link: "/mediacenter/events-calendar" },
      { label: "The Forester Magazine", link: "/mediacenter/forester-magazine" },
      { label: "Press Releases", link: "/mediacenter/press-releases" },
    ],
  },
  {
    label: "Quick Links",
    subItems: [
      { label: "Tree Planting", link: "/quick-links/tree-planting" },
      {
        label: "Participatory Forest Management",
        link: "/quick-links/participatory-forest-management",
        subItems: [
          { label: "Background", link: "/quick-links/participatory-forest-management/background" },
          { label: "Forest Management Plans", link: "/quick-links/participatory-forest-management/ForestPlans" },
        ],
      },
      { label: "Customer Feedback", link: "/quick-links/CustomerFeedback" },
      {
        label: "Eco-tourism",
        link: "/quick-links/eco-tourism",
        subItems: [
          { label: "Background", link: "/quick-links/eco-tourism/background" },
          { label: "Fees & Charges", link: "/quick-links/eco-tourism/fees-charges" },
          { label: "Investment Opportunities", link: "/quick-links/eco-tourism/investment-opportunities" },
          {
            label: "Guidelines & Code of Conduct",
            link: "/quick-links/eco-tourism/guidelines",
            subItems: [
              { label: "Code of Conduct for Forest Adjacent Communities", link: "/quick-links/eco-tourism/guidelines/forest-adjacent-communities" },
              { label: "Code of Conduct for Private Investors in Eco-tourism & Recreation Facilities", link: "/quick-links/eco-tourism/guidelines/private-investors" },
              { label: "Code of Conduct for Tour Leaders", link: "/quick-links/eco-tourism/guidelines/tour-leaders" },
              { label: "Code of Conduct for Visitors to Eco-tourism", link: "/quick-links/eco-tourism/guidelines/visitors" },
              { label: "Guidelines for Constructing Eco-tourism & Recreational Facilities", link: "/quick-links/eco-tourism/guidelines/construction" },
              { label: "Guidelines for Decommissioning Eco-tourism Facilities", link: "/quick-links/eco-tourism/guidelines/decommissioning" },
            ],
          },
          { label: "Why You Should Keep Visiting Public Forests in Kenya", link: "/quick-links/eco-tourism/why-visit" },
        ],
      },
      {
        label: "Eco-Tourism Sites",
        link: "/quick-links/eco-tourism/attractions",
        subItems: [
          { label: "Menengai Forest", link: "/quick-links/eco-tourism/attractions/menengai-forest" },
          { label: "Arabuko Sokoke Forest", link: "/quick-links/eco-tourism/attractions/arabuko-sokoke-forest" },
          { label: "Karura Forest", link: "/quick-links/eco-tourism/attractions/karura-forest" },
          { label: "Ngong Hills Forest", link: "/quick-links/eco-tourism/attractions/ngong-hills-forest" },
          { label: "Ngare Ndare Forest", link: "/quick-links/eco-tourism/attractions/ngare-ndare-forest" },
          { label: "Mt Kenya Forest Reserve", link: "/quick-links/eco-tourism/attractions/mt-kenya-forest-reserve" },
          { label: "Hombe Forest Guesthouse", link: "/quick-links/eco-tourism/attractions/hombe-forest-guesthouse" },
          { label: "Ndaragwa Nature Trail", link: "/quick-links/eco-tourism/attractions/ndaragwa-nature-trail" },
          { label: "Nairobi Arboretum", link: "/quick-links/eco-tourism/attractions/nairobi-arboretum" },
          { label: "Community Eco-tourism Facilities", link: "/quick-links/eco-tourism/attractions/community-eco-tourism-facilities" },
          { label: "KFC Guesthouse & Conference Centre", link: "/quick-links/eco-tourism/attractions/kfc-guesthouse-conference-centre" },
        ],
      },
      {
        label: "Online Systems",
        link: "/quick-links/online-systems",
        subItems: [
          { label: "Staff Mail", link: "https://mail.kenyaforestservice.org/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.kenyaforestservice.org%2fowa%2f", isExternal: true },
          { label: "E-Registration", link: "https://sawmillers.kenyaforestservice.org/", isExternal: true },
          { label: "E-Nursery", link: "https://enursery.kenyaforestservice.org/", isExternal: true },
          { label: "Research License", link: "/quick-links/online-systems/research-license", isExternal: false },
          { label: "Monitoring and Evaluation", link: "http://monitoring.kenyaforestservice.org/#/home", isExternal: true },
        ],
      },
    ],
  },
  { label: "Contact Us", link: "/contacts" },
  {
    label: "E-Documents",
    subItems: [
      { label: "Public Documents", link: "/e-documents/public" },
      { label: "Legal Documents", link: "/e-documents/legal" },
      { label: "Policy Documents", link: "/e-documents/policy" },
      { label: "Staff Documents", link: "/e-documents/staff-documents" },
      {
        label: "Video Documentation",
        subItems: [
          { label: "Sign Language Service Charter", link: "/e-documents/video/Sign-Language" },
          { label: "Audio Service Charter", link: "/e-documents/video/Audio-Service" },
        ],
      },
      { label: "Documents Archive", link: "/e-documents/archive" },
    ],
  },
  { label: "Tenders", link: "/tenders" },
  { label: "Careers", link: "/careers" },
];

export default navigationItems;