import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NFTCard } from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Расширенный список NFT
const MOCK_NFTS = [
  {
    id: "1",
    title: "Cosmic Dreamer #1",
    image: "https://picsum.photos/400/400?random=1",
    currentBid: 0.5,
    endTime: new Date(Date.now() + 86400000),
  },
  {
    id: "2",
    title: "Digital Universe #7",
    image: "https://picsum.photos/400/400?random=2",
    currentBid: 1.2,
    endTime: new Date(Date.now() + 172800000),
  },
  {
    id: "3",
    title: "Abstract Mind #3",
    image: "https://picsum.photos/400/400?random=3",
    currentBid: 0.8,
    endTime: new Date(Date.now() + 259200000),
  },
  {
    id: "4",
    title: "Neon Dreams #4",
    image: "https://picsum.photos/400/400?random=4",
    currentBid: 2.1,
    endTime: new Date(Date.now() + 345600000),
  },
  {
    id: "5",
    title: "Cyber Punk #5",
    image: "https://picsum.photos/400/400?random=5",
    currentBid: 1.7,
    endTime: new Date(Date.now() + 432000000),
  },
  {
    id: "6",
    title: "Virtual Reality #6",
    image: "https://picsum.photos/400/400?random=6",
    currentBid: 3.0,
    endTime: new Date(Date.now() + 518400000),
  },
  {
    id: "7",
    title: "Digital Art #7",
    image: "https://picsum.photos/400/400?random=7",
    currentBid: 1.5,
    endTime: new Date(Date.now() + 604800000),
  },
  {
    id: "8",
    title: "Future World #8",
    image: "https://picsum.photos/400/400?random=8",
    currentBid: 2.3,
    endTime: new Date(Date.now() + 691200000),
  },
  {
    id: "9",
    title: "Metaverse #9",
    image: "https://picsum.photos/400/400?random=9",
    currentBid: 1.9,
    endTime: new Date(Date.now() + 777600000),
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            NFT Auction
          </Link>
          <div className="space-x-4">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              О нас
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Контакты
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
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
    </div>
  );
};

export default Index;