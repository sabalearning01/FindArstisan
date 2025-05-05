import { useEffect, useState } from "react";

export default function CategoryTabs() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("Home & Garden");

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="flex gap-4 bg-[#F8F8E8] h-[92px] mx-[20px] mt-[40px] lg:mx-[100px] lg:mt-[40px] p-4 rounded-full">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-6 py-3 rounded-full text-sm font-medium ${
            active === category
              ? "bg-teal-700 text-white"
              : "bg-blue-100 text-black"
          }`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
