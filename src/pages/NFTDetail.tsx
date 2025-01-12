import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BidInput } from "@/components/BidInput";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Моковые данные для демонстрации
const MOCK_NFT = {
  id: "1",
  title: "Cosmic Dreamer #1",
  image: "https://picsum.photos/800/600?random=1",
  description: "A mesmerizing piece that captures the essence of cosmic dreams and infinite possibilities.",
  currentBid: 0.5,
  endTime: new Date(Date.now() + 86400000),
  bids: [
    { amount: 0.5, bidder: "0x1234...5678", time: new Date(Date.now() - 3600000) },
    { amount: 0.4, bidder: "0x8765...4321", time: new Date(Date.now() - 7200000) },
  ],
};

const NFTDetail = () => {
  const { id } = useParams();
  const [nft, setNft] = useState(MOCK_NFT);

  const handleBid = (amount: number) => {
    // В реальном приложении здесь был бы API запрос
    const newBid = {
      amount,
      bidder: "0x9999...9999",
      time: new Date(),
    };
    
    setNft(prev => ({
      ...prev,
      currentBid: amount,
      bids: [newBid, ...prev.bids],
    }));
    
    toast.success("Bid placed successfully!");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={nft.image}
            alt={nft.title}
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{nft.title}</h1>
          <p className="text-muted-foreground">{nft.description}</p>
          
          <div className="p-4 bg-secondary/10 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">Current Bid</span>
              <span className="text-2xl font-bold">{nft.currentBid} ETH</span>
            </div>
            <Timer endTime={nft.endTime} />
          </div>
          
          <BidInput currentBid={nft.currentBid} onBidSubmit={handleBid} />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Bid History</h2>
            <div className="space-y-2">
              {nft.bids.map((bid, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-background rounded-lg border"
                >
                  <span className="text-sm text-muted-foreground">{bid.bidder}</span>
                  <span className="font-medium">{bid.amount} ETH</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;