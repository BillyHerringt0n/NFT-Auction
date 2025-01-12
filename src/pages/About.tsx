import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Shield, ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-gray-100">
      <div className="container mx-auto py-12 px-4">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-gray-300 hover:text-[#8B5CF6]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
          О Нас
        </h1>

        <Alert className="mb-8 bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] border-[#8B5CF6]/30">
          <AlertDescription className="text-lg text-gray-300">
            NFT Auction - это инновационная платформа для торговли цифровыми активами, 
            где искусство встречается с технологиями будущего.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-[#1A1F2C]/80 border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-[#8B5CF6]" />
              <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">Сообщество</h3>
              <p className="text-gray-300">
                Более 10,000 активных пользователей и художников со всего мира
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2C]/80 border-[#D946EF]/20 hover:border-[#D946EF]/50 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Rocket className="h-12 w-12 mb-4 text-[#D946EF]" />
              <h3 className="text-xl font-semibold mb-2 text-[#D946EF]">Инновации</h3>
              <p className="text-gray-300">
                Передовые технологии блокчейн и смарт-контрактов
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2C]/80 border-[#F97316]/20 hover:border-[#F97316]/50 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 mb-4 text-[#F97316]" />
              <h3 className="text-xl font-semibold mb-2 text-[#F97316]">Безопасность</h3>
              <p className="text-gray-300">
                Максимальная защита ваших цифровых активов и транзакций
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] p-8 rounded-lg border border-[#8B5CF6]/20">
            <h2 className="text-2xl font-semibold mb-4 text-[#8B5CF6]">Наша Миссия</h2>
            <p className="text-gray-300 leading-relaxed">
              Мы стремимся создать самую передовую и доступную платформу для торговли NFT, 
              где каждый художник может монетизировать свое творчество, а коллекционеры - 
              находить уникальные цифровые активы.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] p-8 rounded-lg border border-[#D946EF]/20">
            <h2 className="text-2xl font-semibold mb-4 text-[#D946EF]">История</h2>
            <p className="text-gray-300 leading-relaxed">
              Основанная в 2023 году, наша платформа быстро стала одним из лидеров в мире NFT. 
              Мы постоянно развиваемся и внедряем новые технологии для улучшения пользовательского опыта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;