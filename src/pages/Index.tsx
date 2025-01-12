import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NFTCard } from "@/components/NFTCard";

// Моковые данные для демонстрации
const MOCK_NFTS = [
  {
    id: "1",
    title: "Cosmic Dreamer #1",
    image: "https://picsum.photos/400/400?random=1",
    currentBid: 0.5,
    endTime: new Date(Date.now() + 86400000), // 24 часа
  },
  {
    id: "2",
    title: "Digital Universe #7",
    image: "https://picsum.photos/400/400?random=2",
    currentBid: 1.2,
    endTime: new Date(Date.now() + 172800000), // 48 часов
  },
  {
    id: "3",
    title: "Abstract Mind #3",
    image: "https://picsum.photos/400/400?random=3",
    currentBid: 0.8,
    endTime: new Date(Date.now() + 259200000), // 72 часа
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Live NFT Auctions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_NFTS.map((nft) => (
          <NFTCard
            key={nft.id}
            {...nft}
            onClick={() => navigate(`/nft/${nft.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;