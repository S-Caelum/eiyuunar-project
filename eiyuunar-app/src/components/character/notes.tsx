import SearchBar from "../common/search-bar";

const notes = ["das", "dasdfafg"];

const CharacterNotes = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <SearchBar />
      {notes.map((note, id) => {
        return (
          <div
            key={id}
            className="w-full max-w-full border-b min-h-fit px-6 py-4 flex text-wrap break-all max-h-fit"
          >
            <p className="text-wrap grow pr-2">{note}</p>
            <div className="w-fit h-7 self-center flex gap-2">
              <div className="w-7 h-full border"></div>
              <div className="w-7 h-full border"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterNotes;
