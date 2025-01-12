import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы API запрос
    toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

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
          Свяжитесь с Нами
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-[#1A1F2C]/80 border-[#8B5CF6]/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#8B5CF6]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#8B5CF6]">Email</h3>
                    <p className="text-gray-300">support@nftauction.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2C]/80 border-[#D946EF]/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#D946EF]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#D946EF]">Телефон</h3>
                    <p className="text-gray-300">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2C]/80 border-[#F97316]/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#F97316]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#F97316]">Адрес</h3>
                    <p className="text-gray-300">Москва, ул. Цифровая, д. 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#1A1F2C]/80 border-[#8B5CF6]/20 focus:border-[#8B5CF6] text-gray-100"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Ваш email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#1A1F2C]/80 border-[#8B5CF6]/20 focus:border-[#8B5CF6] text-gray-100"
              />
            </div>
            <div>
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#1A1F2C]/80 border-[#8B5CF6]/20 focus:border-[#8B5CF6] text-gray-100 min-h-[150px]"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              Отправить сообщение
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;