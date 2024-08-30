import { SvgGeld, SvgLoading } from "@/components/files";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-[48px]">
        <SvgGeld />
        <div className="flex flex-col items-center gap-4">
        <div className="border-[#E5E5E5] border-t-[#0166FF] border-solid border-[3px] size-8 rounded-full animate-spin" />
            <p>Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
