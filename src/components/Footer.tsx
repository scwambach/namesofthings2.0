export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 text-center">
      <p>&copy; {year} | Names of Things</p>
    </footer>
  );
};
