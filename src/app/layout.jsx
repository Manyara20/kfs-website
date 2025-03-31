import Head from "next/head";
import "./styles/globals.css";

export const metadata = {
  title: 'Kenya Forest Service',
  description: 'Trees For Better Lives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/images/t_logo.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
