import type { ImageMetadata } from "astro";

import joeMartinPhoto from "@/assets/atlas-artists/joe-martin.webp";
import napaPhoto from "@/assets/atlas-artists/napa.jpg";
import theHigherLowPhoto from "@/assets/atlas-artists/the-higher-low.jpg";
import theoKatzmanPhoto from "@/assets/atlas-artists/theo-katzman.jpg";

export interface AtlasArtist {
  bio: string[];
  links: { name: string; url: string }[];
  name: string;
  photo: ImageMetadata;
}

/** Line-up of the 2024 Atlas Music Festival. Bios stay in English. */
export const atlasArtists: AtlasArtist[] = [
  {
    bio: [
      "You've seen him strut the stage with Vulfpeck at the World's Greatest Arena. You've seen his name in the credits of your favorite artist's favorite album.",
      "Theo Katzman brings a staunchly synergistic, sober psychedelic, seeker-sensitive soul to his songs.",
      `His first solo work, "Romance Without Finance", was released in 2011. He's now presenting his newest work, "Be The Wheel", where you can capture his fiercest flame and immerse yourself in a masterclass of storytelling through each song.`,
    ],
    links: [
      { name: "Instagram", url: "https://www.instagram.com/theokatzman/" },
      {
        name: "Spotify",
        url: "https://open.spotify.com/intl-pt/artist/2a4lU7F8toqKpb5v6Ftqya?si=r0saEGHBRACnE1K1uVMAZw",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@theokatzman",
      },
    ],
    name: "Theo Katzman",
    photo: theoKatzmanPhoto,
  },
  {
    bio: [
      "NAPA were born in Funchal in 2013 under the name Men On The Couch. The contours of the band were formed between the energy of the Arctic Monkeys and Red Hot Chilli Peppers, the purity of the Beatles, and the sensitivity of Caetano Veloso and Tom Jobim.",
      `In 2019 they recorded their first album “Senso Comum” (Common Sense), with infectious melodies and a raw, melancholic spirit. In 2023 they released the new album "Logo se vê" (We'll see), sung in Portuguese and reflecting new rhythms and musical textures.`,
    ],
    links: [
      { name: "Instagram", url: "https://www.instagram.com/os_napa/" },
      {
        name: "Spotify",
        url: "https://open.spotify.com/intl-pt/artist/3BR3Qfra04DICDUB2BL3eu?si=iFlKeyLBRvOr1AQkNBO-qA",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@napanapanapa",
      },
    ],
    name: "Napa",
    photo: napaPhoto,
  },
  {
    bio: [
      "A Lancashire-born independent singer, songwriter, and modern-day troubadour.",
      "His influences go from Bob Dylan, James Taylor, and Townes Van Zandt to Jason Isbell and Kacey Musgraves. Joe's descriptive lyrics capture the stories of people and encounters picked up on the road, blended with his own experiences. The magic of his live performance lies in his ability to connect a room of people with the emotions of a life they have not lived.",
      `Joe's most recent work, "Empty Passenger Seat", is a collection of songs spanning over 6 years of writing, from 2016 to 2022.`,
    ],
    links: [
      { name: "Instagram", url: "https://www.instagram.com/joemartinmusic/" },
      {
        name: "Spotify",
        url: "https://open.spotify.com/intl-pt/artist/4G6DafLOFyiy1eqgahC2W1?si=lnKzIVCGTEiyDJuVOMjCkg",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@joemartinmusic6293",
      },
    ],
    name: "Joe Martin",
    photo: joeMartinPhoto,
  },
  {
    bio: [
      "The Higher Low is a one-person do-it-yourself band making Acoustic Rock, inspired by the Bitcoin freedom revolution.",
      "We've seen him as part of the punk rock band Fumble, but ever since the Bitcoin world got his eye, he started writing short and punchy songs about its power to change the world.",
      "As an electrifying blend of '90s-style melodic punk rock and indie influences, The Higher Low delivers an unforgettable, high-energy acoustic rock experience. Prepare to be blown away as The Higher Low unveils full-production rock versions of his latest songs, in the winter of 2023-2024.",
    ],
    links: [
      { name: "Instagram", url: "https://www.instagram.com/the_higher_low/" },
      {
        name: "Spotify",
        url: "https://open.spotify.com/album/6UJGo2PoYVABVfjZOidDzN?si=9Yyxe23KRYy2OC6IfEp3_A",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@the_higher_low",
      },
    ],
    name: "The Higher Low",
    photo: theHigherLowPhoto,
  },
];
