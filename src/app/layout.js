import TimerWrapUp from "../components/TimerWrapUp";

import "./globals.css";

export const metadata = {
  title: "zeitschaltuhr | tsu-nami.de",
  description: "Countdown, Stoppuhr und Co. von tsu-nami.de / Marco Nagel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
        <body className="font-junction">
            <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
            <TimerWrapUp>{ children }</TimerWrapUp>
        </body>
    </html>
  );
}
