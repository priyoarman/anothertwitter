import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "Another Twitter",
  description: "Created by Arman Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        <AuthProvider>
          <div className="flex flex-row text-xl space-x-4">
            <LeftBar />
            {children}
            <RightBar/>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
