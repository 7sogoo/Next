import { Button } from "@/components/ui/button";
import { SvgLogo, SvgPlus } from "..";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center max-w-[1200px] m-auto py-4">
      <div className="flex gap-6 items-center">
        <SvgLogo />
        <p className="font-semibold">Dashboard</p>
        <p>Records</p>
      </div>
      <div className="flex gap-6 items-center">
        <Button className="bg-[#0166FF] rounded-3xl flex gap-1">
          <SvgPlus />
          <p>Record</p>
        </Button>
        <Avatar>
          <AvatarImage src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZF30t4~pUaQfSKXlbq9jIMgOZ9gwkonq~~fJF5zqQfci7NvGfR-N-Wp0yrg0De31zjNw3UIMakjrgfgbgkzvtOov8n1aHwTZM6SwFflRlqGI7SGTIrtCIM3S4r0P-yYNzJ7YF8Lg-Tgp40BGkWEo4R7DjHl1JONRrH2sI7mpJ3fxCciyKZ462ACMxwvE9pZM3RBHdY-ni6DufRGTmf3FFTqYnbNh73UQ5cuspIbXvTbulNDDohij2o9JtGbIUx9XFnssfwNbVqDsWez5lXKZi1vatw0~rIBW~Laei3rBjdxlYsLp56lzkfe9Pqu9dD0K4g8RRo0tDXyfCWbevbiwA__" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
