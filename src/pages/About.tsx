const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          О нас
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p>
            Мы - инновационная платформа для торговли NFT, созданная для коллекционеров и творческих людей. Наша миссия - сделать мир цифрового искусства доступным для каждого.
          </p>
          <p>
            На нашей платформе вы можете:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Участвовать в эксклюзивных аукционах</li>
            <li>Покупать и продавать NFT</li>
            <li>Общаться с единомышленниками</li>
            <li>Следить за последними трендами в мире NFT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;