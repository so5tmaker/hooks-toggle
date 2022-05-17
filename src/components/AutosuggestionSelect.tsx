import React, { useState } from "react";
import cn from "clsx";

import arrow from "../assets/svg/arrow.svg";
import { useToggle } from "../hooks/useToggle";
import { useInput } from "../hooks/useInput";

export function AutosuggestionSelect() {
  const [isActive, toggle] = useToggle();
  const [character, setInput] = useInput("");

  // const characters = [
  //   { character: "Baby Wizard", isActive: true },
  //   { character: "Scroopy Noopers", isActive: false },
  //   { character: "Running Bird", isActive: false },
  //   { character: "Gotron", isActive: false },
  // ];

  const characters = [
    "Baby Wizard",
    "Scroopy Noopers",
    "Running Bird",
    "Gotron",
  ];

  const liNames = characters.map((item) => {
    const active = item.includes(character) ? " list__item--selected" : "";
    return <li className={"list__item" + active}>{item}</li>;
  });

  return (
    <div className='wrapper'>
      <div className='select'>
        <button
          className={cn("trigger", {
            ["trigger--active"]: isActive,
          })}
          onClick={() => toggle()}
        >
          Find Rick & Morty Characters
          <img src={arrow} alt='chevron down icon' className='arrow' />
        </button>
        {isActive && (
          <div className='options'>
            <input
              className='input'
              value={character}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type to search...'
            />
            <ul className='list'>{liNames}</ul>
          </div>
        )}
      </div>
    </div>
  );
}
