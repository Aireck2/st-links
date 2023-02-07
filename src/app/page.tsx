import { Inter } from "@next/font/google";

import { App } from "@/components/layouts/App";
import { Heading } from "@/components/screens/Heading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <App>
      <>
        <Heading></Heading>
        <div>
          <h2 className={inter.className}>Hola</h2>
        </div>
      </>
    </App>
  );
}
