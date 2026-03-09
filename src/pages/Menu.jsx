import "../App.css";
import { useState } from "react";
import { foodData } from "../data/foodData";
import FoodCard from "../components/FoodCard";
import MenuFilters from "../components/MenuFilters";
export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [loginToast, setLoginToast] = useState(false);
  const showLoginToast = () => {
    setLoginToast(true);
    setTimeout(() => setLoginToast(false), 2000);
  };

  const categories = [...new Set(foodData.map(item => item.category))];
  const resetFilters = () => {
    setSelectedCategory("All");
    setTypeFilter("");
    setSortPrice("");
  };
  let filteredFood = [...foodData];
  if (selectedCategory !== "All") {
    filteredFood = filteredFood.filter(
      item => item.category === selectedCategory
    );
  }
 if (typeFilter === "veg") {
    filteredFood = filteredFood.filter(
      item => item.type.toLowerCase() === "veg"
    );
  }
  if (typeFilter === "nonveg") {
    filteredFood = filteredFood.filter(
      item => item.type.toLowerCase() === "non-veg"
    );
  }
  if (sortPrice === "asc") {
    filteredFood.sort((a, b) => a.price - b.price);
  }
  if (sortPrice === "desc") {
    filteredFood.sort((a, b) => b.price - a.price);
  }
  return (
    <>
      {/* HERO SECTION */}
      <section className="menu-hero">
        <div className="container">
          <header className="menu-header">
            <span className="menu-subtitle">
              fresh flavors await
            </span>
            <h1 className="menu-title">
              OUR MENU
            </h1>
            <p className="menu-desc">
              Discover our curated selection of fresh, healthy, and delicious
              meals crafted with love
            </p>
          </header>
        </div>
      </section>
      {/* FILTER UI */}
      <MenuFilters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
        resetFilters={resetFilters}
      />
      {/* FOOD CARDS */}
      <section className="container py-5">
  <div className="fm-grid">
    {filteredFood.map(item => (
      <FoodCard key={item.id} item={item} showLoginToast={showLoginToast}/>
    ))}
  </div>
      </section>
         {loginToast && (
        <div className="fm-toast-message">
          Please login to add items to the cart!
        </div>
      )}
    </>
  );
}