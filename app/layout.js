import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "Y - Twitter Clone",
  description: "Created by Arman Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>
          <div className="flex flex-row text-xl">
            <LeftBar />
            {children}
            <RightBar/>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
