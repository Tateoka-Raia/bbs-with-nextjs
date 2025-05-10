import { BBSData } from "@/app/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";

interface BBSCardProps {
  data: BBSData;
}

const BBSCard = ({ data }: BBSCardProps) => {
  const { id, title, content, userName } = data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{userName}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">
          Link
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
