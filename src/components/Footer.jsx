import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foregrounflex flex-wrap justify-between items-center
">
        {" "}



      </p>
      <p className="text-xs text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()}  Thanh Xuan Dao

        Inspired by <a className="">PedroTech </a>
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
