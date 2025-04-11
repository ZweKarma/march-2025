"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutmePage() {
  let facts: string[] = [
    "no number before 1000 has the letter a",
    "Honey doesn&apos;t spoil",
    "Antarctica is a desert",
    "Goku Solos",
    "50 New Colors were made for the Anime Movie Akira",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>AboutMe</h1>
      <div className="AboutMe">
        <Button
          className="bg-sky-600 text-2xl"
          onPress={() => {
            setFact(facts[Math.floor(Math.random() * facts.length)]);
          }}
        >
          Press 4 Fact
        </Button>
        <p>{fact}</p>
        <div>
          <b>Valorant</b>
          <img alt="ValorantLogoPicture" src="/valorantLogo.jpg" />
          <p>
            Valorant is one off my favorite games to play when I have free time.
            Helps destress.
          </p>
          <a
            className="bg-red-400 m-3 p-3"
            href="https://www.bing.com/ck/a?!&&p=2083adf5f0571b25f55b427e1e2f1b6e20d1c0eb0dbf850913c014c9851478dcJmltdHM9MTc0Mjk0NzIwMA&ptn=3&ver=2&hsh=4&fclid=3587c146-2071-62d1-05f7-d4ca215c6326&psq=riotgames&u=a1aHR0cHM6Ly93d3cucmlvdGdhbWVzLmNvbS8&ntb=1"
            rel="noreferrer"
            target="_blank"
          >
            RiotGames
          </a>
        </div>
        <div>
          <b>NYC</b>
          <img alt="NYC From Above" src="NYC.jpg" />
          <p>
            I used to live in NYC and so its important to me because its where I
            spent most of my childhood
          </p>
        </div>
        <div>
          <b>Pokemon</b>
          <img alt="Pokemon" src="Pokemon.jpg" />
          <p>
            I&apos;ve watched pokemon since I was young and recently have gotten
            back into it alot.
          </p>
        </div>
        <div>
          <b>Videogames</b>
          <img alt="EldenRingImg" src="/EldenRing.jpg" />
          <p>
            Videogames are one of my favorite passtimes especially when there
            good, EldenRing specifically ruined rpg games for me
          </p>
        </div>
      </div>
    </div>
  );
}
