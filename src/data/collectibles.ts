import { Collectible } from "@/types/collectible";

export const collectibles: Collectible[] = [
  {
    id: "juulius",
    name: "Juulius Mascot Keychain",
    rarity: "epic",

    tagline: "TalTech’s fox mascot, miniaturized.",
    blurb:
      "Carry a piece of campus spirit. Each Juulius keychain links to a digital story unlocked via NFC.",

    meta: {
      introduced: 2019,
      designedBy: "TalTech student team",
      material: "TPU + NFC tag",
    },

    story: [
      "Created in 2019 to represent TalTech’s inventive and playful character.",
      "Designed by a student team aiming for a mascot that felt modern and friendly.",
      "Adopted into campus culture through events, merch, and student media.",
      "Became an unofficial symbol of ‘Tech spirit’ across student communities.",
    ],
  },
  {
    id: "library",
    name: "Library Building Keychain",
    rarity: "rare",

    tagline: "A pocket-sized version of TalTech’s quiet core.",
    blurb:
      "This keychain echoes the silhouette of TalTech’s library building – the place where projects are finished, deadlines are survived, and ideas occasionally happen on purpose.",

    meta: {
      role: "Campus library & study hub",
      designedBy: "Architects commissioned by TalTech",
      material: "PLA + NFC tag",
    },

    story: [
      "The library is one of the main anchors of the TalTech campus, used daily by students across faculties.",
      "Its layered geometry and large windows inspired the simplified form of this keychain.",
      "For many students, the library is where group work, late-night study sessions, and exam prep actually happen.",
      "This collectible connects the familiar physical building with a digital story you can explore anywhere.",
    ],
  },
  {
    id: "logo",
    name: "TalTech Logo Keychain",
    rarity: "common",

    tagline: "The classic TalTech mark, made pocket-sized.",
    blurb:
      "A minimal keychain featuring the TalTech logo for students, staff, and alumni who actually know where it comes from.",

    meta: {
      role: "Official university wordmark",
      introduced: 2014,
      material: "TPU + NFC tag",
    },

    story: [
      "The TalTech logo is used across campus signage, digital services, and official communication.",
      "This keychain focuses on a clean, bold rendering of the logo without extra decoration.",
      "It’s meant to feel more like a quiet signal of affiliation than a loud piece of merch.",
      "Scanning the keychain links the simple physical object to its digital counterpart and story.",
    ],
  },
];
