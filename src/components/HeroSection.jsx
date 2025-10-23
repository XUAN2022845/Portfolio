import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >

      {/* photo */}
      <img
        src="/Thanh.jpg"
        alt="Portrait of Thanh Dao"
        className="w-50 h-50 rounded-full object-cover border-4 border-primary shadow-lg mb-6 animate-float-photo z-10"
      />

      {/* Strawberries around the ground 🍓 */}
      <span className="absolute bottom-0 left-10 text-4xl animate-bounce-slow">🍓</span>
      <span className="absolute bottom-0 left-1/3 text-3xl">🍓</span>
      <span className="absolute bottom-0 right-1/4 text-5xl animate-bounce-slow-delayed">🍓</span>
      <span className="absolute bottom-0 right-10 text-4xl">🍓</span>
      {/* floating strawberries above 🍓 */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <span className="absolute top-19 left-7 text-5xl animate-float-slow">🍓</span>
        <span className="absolute top-19 right-15 text-4xl animate-float-slow-delayed">🍓</span>
        <span className="absolute top-1/3 left-1/4 text-6xl animate-float-slow">🍓</span>
        <span className="absolute top-1/2 right-1/3 text-5xl animate-float-slow-delayed">🍓</span>
        <p className="text-3xl md:text-4xl font-semibold text-primary mt-6 opacity-0 animate-fade-in-delay-1 z-10">
          Let’s connect
        </p>
      </div>

      {/* Scroll down icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-7 w-7 text-primary" />
      </div>
    </section>
  );
};
