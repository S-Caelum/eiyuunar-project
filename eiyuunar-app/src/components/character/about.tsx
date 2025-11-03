import { useEffect } from "react";

const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae urna auctor, finibus nisi quis, ornare velit. Maecenas blandit nisi mi, eu tincidunt turpis euismod quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus mi ac justo commodo ornare.
Morbi efficitur dictum tellus. Morbi mi ligula, iaculis sed porta mattis, cursus eget lacus. Morbi faucibus feugiat augue, sit amet sollicitudin urna mollis eu. Vestibulum eget nibh mattis, suscipit velit quis, interdum sem. Mauris feugiat venenatis urna, vitae lobortis nisi ultrices nec.
Integer at nibh eget nulla efficitur rutrum nec eget ligula. Suspendisse rutrum scelerisque velit vitae dignissim. Fusce vitae commodo neque.`;

const CharacterAbout = () => {
  useEffect(() => {
    console.log(string.split("\n"));
  });
  return (
    <div className="flex flex-col gap-4 w-full h-full px-6 py-5">
      <h1 className="text-2xl w-full">Character Name</h1>
      {string.split("\n").map((substring, id) => {
        return (
          <p key={id} className="text-lg text-justify">
            {substring}
          </p>
        );
      })}
    </div>
  );
};

export default CharacterAbout;
