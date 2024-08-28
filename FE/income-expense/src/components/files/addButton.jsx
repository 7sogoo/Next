"use client";

import { Button } from "../ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SvgAdd, SvgPlus, SvgPlusBlue } from ".";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

const data = ["Home", "Gift", "Food", "Drink", "Taxi", "Shopping"];

export const AddButton = (props) => {
  const [date, setDate] = useState(null);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id: userId } = JSON.parse(localStorage.getItem("user"));
    const [a, b, c, d, f, g] = formRef.current;

    console.log(userId);
  };

  return (
    <Dialog className="w-[796px]">
      <DialogTrigger asChild>
        <Button className="bg-[#0166FF] border-none rounded-[20px] flex gap-[5px]">
          <SvgPlus />
          {props.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md min-w-[796px]" title="Add record">
        <form ref={formRef} onSubmit={handleSubmit}>
          <DialogHeader className="flex flex-row">
            <div className="w-full px-6 py-5 flex flex-col gap-5">
              <div className="flex bg-[#F3F4F6] rounded-[20px]">
                <Button
                  type="button"
                  className="w-full rounded-[20px] bg-[#0166FF]"
                >
                  Expense
                </Button>
                <Button
                  type="button"
                  className="w-full rounded-[20px] bg-[#F3F4F6] text-[#1F2937]"
                >
                  Income
                </Button>
              </div>
              <div className="space-y-[5px]">
                <p>Amount</p>
                <Input
                  className="bg-[#F3F4F6] py-6 text-[#94A3B8]"
                  name="amount"
                  placeholder="1000.00₮"
                  required
                />
              </div>
              <div className="space-y-[5px]">
                <p>Category</p>
                <Select name="category">
                  <SelectTrigger className="w-full bg-[#F3F4F6] py-6 text-[#94A3B8]">
                    <SelectValue placeholder="Find or choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem>
                        <SvgAdd />
                        <p>Add record</p>
                    </SelectItem>
                    {data.map((el, i) => (
                      <SelectItem index={i} key={i} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-[5px]">
                <p>Date</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                type="submit"
                className="w-full rounded-[20px] bg-[#0166FF] mt-3"
              >
                Add submit
              </Button>
            </div>
            <div className="w-full px-6 pt-[15px] pb-6 space-y-5">
              <div className="space-y-[5px]">
                <p>Payee</p>
                <Input
                  className="bg-[#F3F4F6] text-[#94A3B8] py-6"
                  name="description"
                  placeholder="Write here"
                />
              </div>
              <div className="space-y-[5px]">
                <p>Note</p>
                <Textarea
                  className="bg-[#F3F4F6] h-full text-[#94A3B8] py-6"
                  placeholder="Write here"
                />
              </div>
            </div>
          </DialogHeader>
        </form>
      </DialogContent>
    </Dialog>
  );
};
