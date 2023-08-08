import "./globals.css";
import { Metadata } from "next";
import Providers from "./components/ThemeProvider";
import Themechanger from "./components/ThemeChanger";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

export const metadata = {
  title: "Portfolio Martín Resnicoff",
  description: "Manually Created",
};

export default function RootLayout({
  children,
}) {
  return (
    <html>
      <body>
        <Providers>
          <div>
            <Themechanger />
            <NavBar/>
            <SocialLinks/>

            {children}
            </div>      
        </Providers>
      </body>
    </html>
  );
}

