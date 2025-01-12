import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer } from "./Timer";

interface NFTCardProps {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  endTime: Date;
  onClick: () => void;
}

export const NFTCard = ({ id, title, image, currentBid, endTime, onClick }: NFTCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-800 border-gray-700"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-semibold text-lg text-gray-100">{title}</h3>
          <Badge variant="secondary" className="animate-pulse-light bg-purple-500 text-white">
            {currentBid} ETH
          </Badge>
        </div>
        <Timer endTime={endTime} />
      </CardFooter>
    </Card>
  );
};