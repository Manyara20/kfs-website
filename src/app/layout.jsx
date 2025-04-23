import "./styles/globals.css";


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
        
        {children}
        
      </body>
    </html>
  );
}