import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Danh sách các trang với đường dẫn ảnh (đặt trong thư mục public)
const pages = [
  { id: 0, image: "/thiepMoi.png" },
  { id: 1, image: "/love-card.png" },
];

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  // Mỗi lần click vào màn hình, chuyển sang trang tiếp theo (vòng lặp lại)
  const handleScreenClick = () => {
    setPageIndex((prev) => (prev + 1) % pages.length);
  };

  return (
    <div
      onClick={handleScreenClick}
      className="w-full h-screen flex items-center justify-center bg-pink-100 select-none"
      style={{ cursor: "pointer" }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={pages[pageIndex].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={pages[pageIndex].image}
            alt={`Page ${pageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

