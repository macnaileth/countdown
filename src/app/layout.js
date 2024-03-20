import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import "./globals.css";

export const metadata = {
  title: "zeitschaltuhr | tsu-nami.de",
  description: "Countdown, Stoppuhr und Co. von tsu-nami.de / Marco Nagel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
        <body className="font-junction">
            <GlobalHeader />
            {children}
            <GlobalFooter />
        </body>
    </html>
  );
}
