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
      <body
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}