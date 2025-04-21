import "./styles/globals.css";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export const metadata = {
  title: "Kenya Forest Service",
  description: "Trees For Better Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/t_logo.png" />
      </head>
      <body>
        <TopNavBar />
        <MainNavBar />
        {children}
        <FooterBottom />
      </body>
    </html>
  );
}