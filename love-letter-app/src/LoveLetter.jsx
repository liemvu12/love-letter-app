import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LoveLetter() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pink-100 overflow-hidden">
      {/* Hiệu ứng trái tim bay lớn hơn */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-400 text-5xl"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          style={{ left: `${Math.random() * 100}%` }} // Sửa lỗi ở đây
        >
          ❤️
        </motion.div>
      ))}

      {/* Bức thư */}
      {!showCard ? (
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer border-4 border-red-400"
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowCard(true)}
        >
          <h2 className="text-xl font-bold text-red-500">💌 Click vào đây đi bé iu 💌</h2>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center border-4 border-pink-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-xl font-bold text-red-500">💖 Click vào đây đi bé iu 💖</h2>
          <a href="/love-card.pdf" download>
            <Button className="mt-4 bg-red-500 text-white text-lg p-3 rounded-lg shadow-lg">
              Tải thiệp PDF
            </Button>
          </a>
        </motion.div>
      )}
    </div>
  );
}

