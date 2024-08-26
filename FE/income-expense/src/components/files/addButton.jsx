"use client"

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { DatePickerDemo } from "./datePicker";
import { SvgPlus } from ".";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

const data = ["Home", "Gift", "Food", "Drink", "Taxi", "Shopping"]



export const AddButton = (props) => {

const [clicked, setClicked] = useState()

const handleClick = () => {
    setClicked()
}
  return (
      <Dialog className="w-[796px]">
        <DialogTrigger asChild>
                <Button className="bg-[#0166FF] border-none rounded-[20px] flex gap-[5px]">
                    <SvgPlus />
                    {props.title}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-row">
            <div className="w-full px-6 py-5 flex flex-col gap-5">
              <div className="flex bg-[#F3F4F6] rounded-[20px]">
                <Button className="w-full rounded-[20px] bg-[#0166FF]">Expense</Button>
                <Button className="w-full rounded-[20px] bg-[#F3F4F6] text-[#1F2937]">Income</Button>
              </div>
              <div className="space-y-[5px]">
                <p>Amount</p>
                <Input className="bg-[#F3F4F6] py-6 text-[#94A3B8]" placeholder="1000.00₮" />
              </div>
              <div className="space-y-[5px]">
                <p>Category</p>
                <Select>
                  <SelectTrigger className="w-full bg-[#F3F4F6] py-6 text-[#94A3B8]">
                    <SelectValue placeholder="Find or choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.map((el,i) => (
                        <SelectItem key={el + i} index={i} value={el}>{el}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-[5px]">
                <p>Date</p>
              <DatePickerDemo/>
              </div>
              <Button className="w-full rounded-[20px] bg-[#0166FF] mt-3">Add record</Button>
            </div>
            <div className="w-full px-6 pt-[15px] pb-6 space-y-5">
                <div className="space-y-[5px]">
                    <p>Payee</p>
                    <Input className="bg-[#F3F4F6] text-[#94A3B8] py-6" placeholder="Write here"/>
                </div>
                <div className="space-y-[5px]">
                    <p>Note</p>
                    <Textarea className="bg-[#F3F4F6] h-full text-[#94A3B8] py-6" placeholder="Write here"/>
                </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  );
};
