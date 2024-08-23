import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const styles = {
    clicked: `bg-[#0166FF] w-[50%] rounded-[20px]`,
    notClicked: `bg-[#F3F4F6] text-black rounded-[20px] w-[50%]`
}

export const AddButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[792px] m-auto">
        <div className="flex justify-between px-6 py-5">
          <p>Add record</p>
          <p>X</p>
        </div>
        <div className="flex">
          <div className="w-full px-6 py-5">
            <div className="mb-5">
              <Button className={styles.clicked}>Expense</Button>
              <Button className={styles.notClicked}>Income</Button>
            </div>
            <div className="flex flex-col gap-5">
              <Input placeholder="Amount" />
              <div>
                <p>Category</p>
                <Select>
                  <SelectTrigger className="bg-[#F3F4F6] py-6">
                    <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tugrik">
                      MNT - Mongolian Tugrik
                    </SelectItem>
                    <SelectItem value="dollar">
                      USD - United States Dollar
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex">
                <div>
                  <p>Date</p>
                  <Select>
                    <SelectTrigger className="bg-[#F3F4F6] py-6">
                      <SelectValue placeholder="MNT - Mongolian Tugrik" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tugrik">
                        MNT - Mongolian Tugrik
                      </SelectItem>
                      <SelectItem value="dollar">
                        USD - United States Dollar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p>Time</p>
                  <Select>
                    <SelectTrigger className="bg-[#F3F4F6] py-6">
                      <SelectValue placeholder="MNT - Mongolian Tugrik" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tugrik">
                        MNT - Mongolian Tugrik
                      </SelectItem>
                      <SelectItem value="dollar">
                        USD - United States Dollar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <Button className="w-full bg-[#0166FF] rounded-[20px] mt-8">Add Record</Button>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div>
                <p>Payee</p>
                <Input/>
            </div>
            <div>
                <p>Note</p>
                <Input/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
