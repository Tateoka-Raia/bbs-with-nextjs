import { BBSData } from "@/app/types/types";
import BBSCard from "./BBSCard";

interface BBSCardListProps {
  bbsAllData: BBSData[];
}

const BBSCardList = ({ bbsAllData }: BBSCardListProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((data: BBSData) => (
        <BBSCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default BBSCardList;
