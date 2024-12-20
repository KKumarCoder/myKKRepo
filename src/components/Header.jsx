const Header = () => {
    return (
      <header className="bg-[#FFF7E2] text-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Amrutam</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Consultation</a>
            <a href="#" className="hover:underline">Experts</a>
            <a href="#" className="hover:underline">Stories</a>
          </nav>
          <button className="md:hidden">☰</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  