import React, { useState } from "react";
import cn from "clsx";

import arrow from "../assets/svg/arrow.svg";
import { useToggle } from "../hooks/useToggle";
import { useInput } from "../hooks/useInput";

export function AutosuggestionSelect() {
  const [isActive, toggle] = useToggle();
  const [character, setInput] = useInput("");

  const characters = [
    "Baby Wizard",
    "Scroopy Noopers",
    "Running Bird",
    "Gotron",
  ];

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
            <ul className='list'>
              <li className='list__item'>Baby Wizard</li>
              <li className='list__item list__item--selected'>
                Scroopy Noopers
              </li>
              <li className='list__item'>Running Bird</li>
              <li className='list__item'>Gotron</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
