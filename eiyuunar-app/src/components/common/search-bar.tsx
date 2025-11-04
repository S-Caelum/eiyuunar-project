const SearchBar = () => {
  return (
    <div className="w-full flex h-16 gap-3 border-b px-3 py-2.5">
      <input className="pl-3 grow border h-full bg-[#202020] focus:outline-0" />
      <select className="w-1/4 h-full border" />
      <button className="px-3.5 border"> D </button>
    </div>
  );
};

export default SearchBar;
