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
      { label: "Participatory Forest Management", link: "/quick-links/participatory-forest-management" },
      { label: "Customer Feedback", link: "/quick-links/CustomerFeedback" },
      { label: "EcoTourism", link: "/quick-links/background"},
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
      { label: "Video Documentation", link: "/e-documents/video" },
      { label: "Documents Archive", link: "/e-documents/archive" },
    ],
  },
  { label: "Tenders", link: "/tenders" },
  { label: "Careers", link: "/careers" },
];

export default navigationItems;