import { SvgGeld } from "@/components/files";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const signin = () => {
  return (
    <main className="flex w-full">
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-10">
          <SvgGeld />
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-900 text-2xl font-semibold">
              Welcome Back
            </p>
            <p className="text-slate-700">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="w-full space-y-4">
            <Input className="bg-[#F3F4F6]" name="Email" placeholder="Email" />
            <Input className="bg-[#F3F4F6]" name="Password" placeholder="Password" />
          </div>
          <Button className="bg-[#0166FF] w-full rounded-3xl">Log in</Button>
          <div className="flex items-center">
            <p>Don’t have account?</p>
            <Link href="/signUp">
              <p className="text-[#0166FF] px-3 py-1">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] w-full h-screen"></div>
    </main>
  );
};

export default signin;
