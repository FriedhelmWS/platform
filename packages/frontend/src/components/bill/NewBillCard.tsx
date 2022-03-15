import { Button, Input, Textarea } from '@nextui-org/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

const FlatMates = [
  {
    name: 'Samuel',
  },
  {
    name: 'David',
  },
  {
    name: 'Owen',
  },
];

interface NewBillCardProps {
  title?: string;
  detail?: string;
}

const NewBillCard: React.FC<NewBillCardProps> = () => {
  const [dueDate, setDueDate] = useState(new Date());
  console.log(FlatMates);
  return (
    <div className="shadow-lg rounded-b-xl">
      <div className="flex flex-col h-full">
        <div className="px-4 py-1 text-lg font-semibold text-left text-white bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-xl">
          <div className="flex flex-row flex-wrap justify-between">
            <div className="self-center">Bill</div>
            <div className="self-center">
              Total Cost: $
              <input
                className="appearance-none  rounded-lg pl-1 ml-2 h-5 w-[10rem] text-black"
                type="text"
              />
            </div>
            <div className="self-center whitespace-nowrap">
              Due Date:
              <DatePicker
                className="appearance-none  rounded-lg pl-1 ml-2 h-5 w-[10rem] text-black"
                selected={dueDate}
                onChange={(date: Date) => setDueDate(date)}
              />
            </div>
            <div className="self-end">
              <Button
                size="xs"
                rounded
                className="w-auto h-10 mt-1 mb-1 text-base"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between h-full px-4 py-4 bg-gray-800 rounded-b-xl lg:px-8">
          <div className="flex flex-col text-white gap-y-3">
            <div className="flex flex-row justify-between">
              <div className="self-center">Title</div>
              <input
                className="appearance-none  rounded-lg pl-3  h-5 w-[13rem] text-black"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-items-center">
              <div className="self-center mr-3">Details</div>
              <Textarea size="lg" animated={false}></Textarea>
            </div>
          </div>
          <div className="flex flex-col self-start">
            <Button
              size="xs"
              rounded
              className="w-auto h-10 p-5 mt-1 mb-1 text-base"
            >
              Split Evenly
            </Button>
          </div>
          <div className="flex flex-col self-start gap-3">
            {FlatMates.map((person, index) => {
              return (
                <div className="p-4 font-bold bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl">
                  <div
                    key={index + person.name}
                    className="flex self-center justify-between text-white"
                  >
                    {person.name}
                    <input
                      className="appearance-none  rounded-lg pl-1 ml-2 h-5 w-[9rem] text-black self-center "
                      type="text"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBillCard;
