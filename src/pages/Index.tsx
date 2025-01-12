import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NFTCard } from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Категории NFT
const NFT_CATEGORIES = [
  "Все",
  "Абстрактное искусство",
  "Пиксель-арт",
  "3D графика",
  "Фотография",
  "Анимация"
] as const;

// Статичные NFT с категориями
const STATIC_NFTS = [
  {
    id: "1",
    title: "Cosmic Dreamer #1",
    image: "https://picsum.photos/400/400?random=1",
    currentBid: 0.5,
    endTime: new Date(Date.now() + 86400000),
    category: "Абстрактное искусство"
  },
  {
    id: "2",
    title: "Digital Universe #7",
    image: "https://picsum.photos/400/400?random=2",
    currentBid: 1.2,
    endTime: new Date(Date.now() + 172800000),
    category: "3D графика"
  },
  {
    id: "3",
    title: "Abstract Mind #3",
    image: "https://picsum.photos/400/400?random=3",
    currentBid: 0.8,
    endTime: new Date(Date.now() + 259200000),
    category: "Абстрактное искусство"
  },
  {
    id: "4",
    title: "Neon Dreams #4",
    image: "https://picsum.photos/400/400?random=4",
    currentBid: 2.1,
    endTime: new Date(Date.now() + 345600000),
    category: "Анимация"
  },
  {
    id: "5",
    title: "Cyber Punk #5",
    image: "https://picsum.photos/400/400?random=5",
    currentBid: 1.7,
    endTime: new Date(Date.now() + 432000000),
    category: "Пиксель-арт"
  },
  {
    id: "6",
    title: "Virtual Reality #6",
    image: "https://picsum.photos/400/400?random=6",
    currentBid: 3.0,
    endTime: new Date(Date.now() + 518400000),
    category: "3D графика"
  },
  {
    id: "7",
    title: "Digital Art #7",
    image: "https://picsum.photos/400/400?random=7",
    currentBid: 1.5,
    endTime: new Date(Date.now() + 604800000),
    category: "Пиксель-арт"
  },
  {
    id: "8",
    title: "Future World #8",
    image: "https://picsum.photos/400/400?random=8",
    currentBid: 2.3,
    endTime: new Date(Date.now() + 691200000),
    category: "3D графика"
  },
  {
    id: "9",
    title: "Metaverse #9",
    image: "https://picsum.photos/400/400?random=9",
    currentBid: 1.9,
    endTime: new Date(Date.now() + 777600000),
    category: "Анимация"
  },
  {
    id: "10",
    title: "Neon City #10",
    image: "https://picsum.photos/400/400?random=10",
    currentBid: 4.5,
    endTime: new Date(Date.now() + 864000000),
    category: "Пиксель-арт"
  },
  {
    id: "11",
    title: "Digital Dreams #11",
    image: "https://picsum.photos/400/400?random=11",
    currentBid: 2.8,
    endTime: new Date(Date.now() + 950400000),
    category: "Абстрактное искусство"
  },
  {
    id: "12",
    title: "Cyber Space #12",
    image: "https://picsum.photos/400/400?random=12",
    currentBid: 3.2,
    endTime: new Date(Date.now() + 1036800000),
    category: "3D графика"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");

  const filteredNFTs = STATIC_NFTS.filter(nft => 
    selectedCategory === "Все" || nft.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <nav className="bg-[#1A1F2C] border-b border-[#8B5CF6]/20 p-4 sticky top-0 z-50 backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent hover:from-[#D946EF] hover:to-[#8B5CF6] transition-all duration-300"
          >
            NFT Auction
          </Link>
          <div className="space-x-4">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-[#8B5CF6] transition-colors"
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-[#8B5CF6] transition-colors"
            >
              Контакты
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
          Live NFT Auctions
        </h1>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {NFT_CATEGORIES.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer text-sm px-4 py-2 ${
                selectedCategory === category
                  ? "bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-lg shadow-[#8B5CF6]/50"
                  : "hover:border-[#8B5CF6] text-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNFTs.map((nft) => (
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