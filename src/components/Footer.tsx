export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto px-5 sm:px-10 md:px-18 py-7 border-t border-black text-center text-xs tracking-wider uppercase font-semibold text-[#555555]">
      &copy; {year} &middot; Names of Things &middot; A Register Maintained
      in Good Faith
    </footer>
  );
};
