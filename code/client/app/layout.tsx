import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NextTopLoader from "nextjs-toploader";
import AppLayout from "../component/Layouts/Layout";

export default function AccountApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#09d61d" height={5} />
        <UserProvider>
          {" "}
          <AppLayout>{children}</AppLayout>
        </UserProvider>
      </body>
    </html>
  );
}
