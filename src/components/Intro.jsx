// Intro.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Intro() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Bhavana", "a Full-Stack Developer", "an ML Enthusiast", "a Tech Explorer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div>
      <section className="my-[200px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
                  <p className="text-lg text-gray-500 mb-2">Welcome to my digital space</p>

          <h1 className="text-4xl font-bold my-8">
            Hi, I'm <span ref={typedRef} className="text-blue-600"></span>
          </h1>

          
          <button className="px-6 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            View Resume
          </button>
        </motion.div>
      </section>
    </div>
  );
}
