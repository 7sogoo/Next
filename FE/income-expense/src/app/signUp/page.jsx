import { SvgGeld } from '@/components/files';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link'



const signUp = () => {
  return (
    <div className="flex">
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-10">
          <SvgGeld />
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-900 text-2xl font-semibold">Create Geld account</p>
            <p className="text-slate-700"> Sign up below to create your Wallet account</p>
          </div>
          <div className="w-full space-y-4">
            <Input className="bg-[#F3F4F6]" name="Name" placeholder="Name" />
            <Input className="bg-[#F3F4F6]" name="Email" placeholder="Email" />
            <Input className="bg-[#F3F4F6]" name="Password" placeholder="Password" />
            <Input className="bg-[#F3F4F6]" name="Re-password" placeholder="Re-password" />
          </div>
          <Button className="bg-[#0166FF] w-full rounded-3xl">Sign up</Button>
          <div className="flex items-center">
            <p>Already have account?</p>
            <Link href="/signin">
            <p className="text-[#0166FF] px-3 py-1">Log in</p>
             </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] w-full h-screen"></div>
    </div>
  );
};

export default signUp;
