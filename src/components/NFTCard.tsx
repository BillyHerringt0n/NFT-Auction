import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer } from "./Timer";

interface NFTCardProps {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  endTime: Date;
  category: string;
  onClick: () => void;
}

export const NFTCard = ({ id, title, image, currentBid, endTime, category, onClick }: NFTCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#1A1F2C]/80 border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:shadow-[#8B5CF6]/20 group"
      onClick={onClick}
    >
      <CardContent className="p-0 relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          variant="secondary" 
          className="absolute top-2 right-2 bg-[#1A1F2C]/80 text-[#8B5CF6] border border-[#8B5CF6]/50"
        >
          {category}
        </Badge>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-semibold text-lg text-gray-100 group-hover:text-[#8B5CF6] transition-colors">
            {title}
          </h3>
          <Badge 
            variant="secondary" 
            className="animate-pulse-light bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white border-none"
          >
            {currentBid} ETH
          </Badge>
        </div>
        <Timer endTime={endTime} />
      </CardFooter>
    </Card>
  );
};