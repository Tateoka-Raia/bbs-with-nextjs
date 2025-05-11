import { BBSData } from "@/app/types/types";
import BBSCard from "./BBSCard";

interface BBSCardListProps {
  bbsAllData: BBSData[];
}

const BBSCardList = ({ bbsAllData }: BBSCardListProps) => {
  // createdAtで降順に並び替え
  const sortedData = [...bbsAllData].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {sortedData.map((data: BBSData) => (
        <BBSCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default BBSCardList;
