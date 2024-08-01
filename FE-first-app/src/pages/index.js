import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import axios from "axios";



axios.get('http://localhost:').then((res) => {
  console.log(res)
})



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Button>Hello World</Button>
    </main>
  );
}
