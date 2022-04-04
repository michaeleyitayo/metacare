import { FC } from "react";
import calendar from "../../../assets/icons/calendar2.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    "high priority": 5,
  },
  {
    name: "Feb",
    "high priority": 18,
  },
  {
    name: "Mar",
    "high priority": 45,
  },
  {
    name: "April",
    "high priority": 35,
  },
  {
    name: "May",
    "high priority": 20,
  },
  {
    name: "Jun",
    "high priority": 30,
  },
  {
    name: "July",
    "high priority": 40,
  },
  {
    name: "Aug",
    "high priority": 32,
  },
];

const Chart2: FC = () => {
  return (
    <div className="w-full h-[314px] border-[1px] border-grey rounded-[8px] flex items-stretch">
      <div className="flex-1 p-[24px] flex flex-col justify-between">
        <div className="flex items-center">
          <p className="text-black text-[18px] font-bold mr-[16px]">
            Replies per resolution
          </p>
          <div className="w-[70px] h-[28px] bg-[#25BB871A] text-[12px] text-[#25BB87] rounded-[4px] flex items-center justify-center">
            +4.14%
          </div>
          <div className="flex gap-[8px] text-[14px] font-bold items-center ml-auto">
            <div className="w-[10px] h-[10px] bg-[#3E68FF] rounded-[2px]"></div>
            High Priority
          </div>
          <div className="w-[1px] h-[24px] bg-[#E1E1EB] mx-[16px]"></div>
          <div className="w-[148px] h-[38px] border-[1px] border-grey rounded-[8px] px-[16px] py-[8px] flex items-center justify-between text-[14px] font-bold">
            This Month
            <img src={calendar} alt="" />
          </div>
        </div>
        <LineChart
          width={799}
          height={204}
          className="text-[14px] text-[#696D8C] ml-[-20px]"
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            type="number"
            domain={[0, 50]}
            ticks={[0, 10, 20, 30, 40, 50]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="high priority"
            stroke="#3E68FF"
            dot={{ r: 6 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="w-[21.72%] border-l-[1px] border-grey py-[32px] px-[24px] flex flex-col justify-between">
        <div className="w-full h-[116px] bg-[#FAFAFA] border-[1px] border-[#ECEBF5] rounded-[10px] py-[27px] px-[16px]">
          <p className="text-[14px] text-[#696D8C] mb-[8px]">Average Replies</p>
          <p className="text-black text-[20px] leading-[1.6] font-bold">
            30 Mins
          </p>
        </div>
        <div className="w-full h-[116px] bg-[#FAFAFA] border-[1px] border-[#ECEBF5] rounded-[10px] py-[27px] px-[16px]">
          <p className="text-[14px] text-[#696D8C] mb-[8px]">Response Time</p>
          <p className="text-black text-[20px] leading-[1.6] font-bold">
            1 Hour 30 Mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart2;
