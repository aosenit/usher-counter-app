import React from "react";
import { Characters } from "./Graph";
interface BarProps {
  characters: Characters[];
}

const Bar: React.FC<BarProps> = ({ characters }) => {
  const total = characters.reduce((sum, character) => sum + character.count, 0);

  return (
    <div className="flex items-center">
      <div className="h-4 w-full bg-gray-300 rounded-full">
        {characters.map((character) => (
          <div
            key={character.label}
            className={`h-full rounded-full ${character.background}`}
            style={{ width: `${(character.count / total) * 100}%` }}
          />
        ))}
      </div>
      <div className="ml-2">
        {characters.map((character) => (
          <div key={character.label}>
            {character.label}: {character.count} (
            {((character.count / total) * 100).toFixed(1)}%)
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
