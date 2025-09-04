"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export default function PrivyAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId="cmevhim05000xl20bzg2pt7w8"
      config={{
        appearance: {
          landingHeader: "Marketee",
          theme: "dark",
          logo: "/logo_white.png",
          showWalletLoginFirst: true,
        },
        embeddedWallets: {
          ethereum: {
            createOnLogin: "all-users",
          },
        },
      }}>
      {children}
    </PrivyProvider>
  );
}
