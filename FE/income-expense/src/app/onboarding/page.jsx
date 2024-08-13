"use client";

import { SvgGeld } from '@/components/files';
import Step from '@/components/files/step';
import Step2 from '@/components/files/step2';
import Step3 from '@/components/files/step3';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

const stepper = ["", "", ""];
const buttonTitle = ["Confirm", "Confirm", "Go to Dashboard"];
const styles = {
    primary: `bg-[#0166FF] text-white`,
    secondary: `bg-[#E5E7EB] text-black`, 
}

const onBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => currentIndex < 2 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  return (
    <main className="flex flex-col items-center mt-10">
      <div className="max-w-[384px]">
        <div>
          {stepper.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>
        <div className="flex items-center flex-col gap-12">
          <SvgGeld />
          <div className="flex gap-12 relative text-sm">
            <div className="flex flex-col gap-1 items-center z-10">
              <p className={`bg-[#0166FF] text-white rounded-full size-6 flex justify-center items-center text-sm`}>1</p>
              <p>Currency</p>
            </div>
            <p className={`absolute w-[92px] h-[4px] ${currentIndex === 0 ? styles.secondary : styles.primary} top-[10px] left-[40px]`}></p>
            <div className="flex flex-col gap-1 items-center z-10">
              <p className={`${currentIndex === 0 ? styles.secondary : styles.primary} rounded-full size-6 flex justify-center items-center text-sm`}>2</p>
              <p>Balance</p>
            </div>
            <p className={`absolute w-[78px] h-[4px] ${currentIndex === 2 ? styles.primary : styles.secondary} top-[10px] right-[26px]`}></p>
            <div className="flex flex-col gap-1 items-center z-10">
              <p className={`${currentIndex === 2 ? styles.primary : styles.secondary} text-black rounded-full size-6 flex justify-center items-center text-sm`}>3</p>
              <p>Finish</p>
            </div>
          </div>
        </div>
        {currentIndex === 0 && <Step />}
        {currentIndex === 1 && <Step2 />}
        {currentIndex === 2 && <Step3 />}
        <Link href={currentIndex === 2 ? "/dashboard" : ""}>
        <Button onClick={handleClick} className="mt-8 w-full bg-[#0166FF] rounded-3xl text-white hover:text-black hover:bg-orange-500">{buttonTitle[currentIndex]}</Button>
        </Link>
      </div>
    </main>
  );
};

export default onBoarding;
