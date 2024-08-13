import { SvgHouse } from "..";

const mockData = [
  {
    desc: "Lending & Renting",
    date: "3 hours ago",
    total: "-1,000₮",
  },
  {
    desc: "Lending & Renting",
    date: "3 hours ago",
    total: "-1,000₮",
  },
  {
    desc: "Lending & Renting",
    date: "3 hours ago",
    total: "-1,000₮",
  },
  {
    desc: "Lending & Renting",
    date: "3 hours ago",
    total: "-1,000₮",
  },
  {
    desc: "Lending & Renting",
    date: "3 hours ago",
    total: "-1,000₮",
  },
];

export const DashboardRecords = () => {
  return (
    <div className="bg-[#F3F4F6] pb-5">
      <div className="max-w-[1200px] m-auto bg-white rounded-xl">
        <p className="text-[#0F172A] font-semibold px-6 py-4">Last Records</p>
        {mockData.map((el, i) => (
          <div className="flex justify-between py-5 border-t mx-6">
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#0166FF] size-10 rounded-full flex items-center justify-center">
                <SvgHouse />
              </div>
              <div>
                <p>{el.desc}</p>
                <p className="text-[#6B7280] text-sm">{el.date}</p>
              </div>
            </div>
            <p className="text-[#84CC16]">{el.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
