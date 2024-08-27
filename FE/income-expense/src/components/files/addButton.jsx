"use client";

import { Button } from "../ui/button";
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
import { DatePickerDemo } from "./datePicker";
import { SvgPlus } from ".";
import { useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import axios from "axios";

const data = ["Home", "Gift", "Food", "Drink", "Taxi", "Shopping"];

export const AddButton = (props) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) {
      console.error("Form reference is not set.");
      setError("Form reference is not set.");
      setLoading(false);
      return;
    }

    const { elements } = formRef.current;
    const amount = elements.amount?.value;
    const category = elements.category?.value;
    const date = selectedDate ? selectedDate.toISOString() : ''; 
    const description = elements.description?.value;

    console.log("Form Values:", { amount, category, date, description });

    try {
      const response = await axios.post("http://localhost:8000/record/create", { amount, category, date, description });
      if (response.status === 201) {
        console.log("added successfully")
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog className="w-[796px]">
      <DialogTrigger asChild>
        <Button className="bg-[#0166FF] border-none rounded-[20px] flex gap-[5px]">
          <SvgPlus />
          {props.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row">
          <form ref={formRef} onSubmit={onSubmit} className="w-full">
            <div className="w-full px-6 py-5 flex flex-col gap-5">
              <div className="flex bg-[#F3F4F6] rounded-[20px]">
                <Button type="button" className="w-full rounded-[20px] bg-[#0166FF]">
                  Expense
                </Button>
                <Button type="button" className="w-full rounded-[20px] bg-[#F3F4F6] text-[#1F2937]">
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
                    {data.map((el, i) => (
                      <SelectItem key={i} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-[5px]">
                <p>Date</p>
                <DatePickerDemo onDateChange={setSelectedDate} />
              </div>
              <Button
                type="submit"
                className="w-full rounded-[20px] bg-[#0166FF] mt-3"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add record"}
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
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
