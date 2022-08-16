export type Episode = {
  slug: string;
  title: string;
  episodeNumber: number;
  description: string;
  cover: string;
}

export type Season = {
  slug: string;
  seasonNumber: number;
  episodes: Episode[];
}

export const seasons: Season[] = [
  {
    slug: 'first-season',
    seasonNumber: 1,
    episodes: [
      {
        slug: 'winter-is-coming',
        title: 'Winter is Coming',
        episodeNumber: 1,
        description: "Series Premiere. Lord Ned Stark is troubled by disturbing reports from a Night's Watch deserter; King Robert arrives at Winterfell.",
        cover: '12mSgKZ__PCC6Z9BTRDg3bBuy1MLYUGnm',
      },
      {
        slug: 'the-kingsroad',
        title: 'The Kingsroad',
        episodeNumber: 2,
        description: "The Lannisters plot to ensure Bran's silence; Jon and Tyrion head to the Wall; Ned faces a family crisis en route to King's Landing.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'lord-snow',
        title: 'Lord Snow',
        episodeNumber: 3,
        description: "Jon impresses Tyrion at Castle Black; Ned confronts his past and future at King's Landing; Daenerys finds herself at odds with Viserys.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'cripples-bastards-and-broken-things',
        title: 'Cripples, Bastards, and Broken Things',
        episodeNumber: 4,
        description: "Ned probes Arryn's death; Jon takes measures to protect Sam; Tyrion is caught in the wrong place.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'the-wolf-and-the-lion',
        title: 'The Wolf and the Lion',
        episodeNumber: 5,
        description: "Ned refuses an order from the King; Tyrion escapes one perilous encounter, only to find himself in another.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'a-golden-crown',
        title: 'A Golden Crown',
        episodeNumber: 6,
        description: "Ned makes a controversial decree; Tyrion confesses to his 'crimes'; Viserys receives final payment for Daenerys.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'you-win-or-you-die',
        title: 'You Win or You Die',
        episodeNumber: 7,
        description: "Ned confronts Cersei about her secrets; Jon takes his Night's Watch vows; Drogo promises to lead the Dorthraki to King's Landing.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'the-pointy-end',
        title: 'The Pointy End',
        episodeNumber: 8,
        description: "The Lannisters press their advantage over the Starks; Robb rallies his father's northern allies and heads south to war.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'baelor',
        title: 'Baelor',
        episodeNumber: 9,
        description: "Ned makes a fateful decision; Robb takes a prized prisoner; Dany finds her reign imperiled.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'fire-and-blood',
        title: 'Fire and Blood',
        episodeNumber: 10,
        description: "Season 1 Finale. A new king rises in the North; a Khaleesi finds new hope.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
    ],
  },
  {
    slug: 'second-season',
    seasonNumber: 2,
    episodes: [
      {
        slug: 'the-north-remembers',
        title: 'The North Remembers',
        episodeNumber: 1,
        description: "Season 2 Premiere. Tyrion arrives to save Joffrey's crown from threats old and new; Daenerys searches for allies and water in the Red Waste.",
        cover: '1ToKDRpc4WYzQ94mDRTowrP9WQ0ydy_wH',
      },
      {
        slug: 'the-night-lands',
        title: 'The Night Lands',
        episodeNumber: 2,
        description: "Arya shares a secret with a familiar recruit; a scout returns to Dany with disturbing news; Theon comes home to the Iron Islands.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'what-is-dead-may-never-die',
        title: 'What Is Dead May Never Die',
        episodeNumber: 3,
        description: "Tyrion roots out a spy; Catelyn meets a new king and queen; Bran dreams; Theon drowns.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'garden-of-bones',
        title: 'Garden of Bones',
        episodeNumber: 4,
        description: "Catelyn tries to save two kings from themselves; Tyrion practices coercion; Robb meets a foreigner; Dany finds her ally.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'the-ghost-of-harrenhal',
        title: 'The Ghost of Harrenhal',
        episodeNumber: 5,
        description: "The Baratheon rivalry ends; Tyrion learns of Cersei's secret weapon; Dany suffers a loss; Arya collects a debt she didn't know was owed.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'the-old-gods-and-the-new',
        title: 'The Old Gods and the New',
        episodeNumber: 6,
        description: "Arya has a surprise visitor; Dany vows to take what is hers; Joffrey meets his subjects; Qhorin gives Jon a chance to prove himself.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'a-man-without-honor',
        title: 'A Man Without Honor',
        episodeNumber: 7,
        description: "Jaime meets a distant relative; Dany receives an invitation; Theon leads a search party; Jon loses his way in the wilderness.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'the-prince-of-winterfell',
        title: 'The Prince of Winterfell',
        episodeNumber: 8,
        description: "Theon holds down the fort; Arya calls in her debt with Jaqen; Robb is betrayed; Stannis and Davos approach their destination.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'blackwater',
        title: 'Blackwater',
        episodeNumber: 9,
        description: "Tyrion and the Lannisters fight for their lives as Stannis' fleet assaults King's Landing.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
      {
        slug: 'valar-morghulis',
        title: 'Valar Morghulis',
        episodeNumber: 10,
        description: "Season 2 Finale. Tyrion wakes up in a new world; Dany goes to a strange place; Jon proves himself.",
        cover: 'https://media.vanityfair.com/photos/597f32fff3c6f80e768c7fc4/master/w_2240,c_limit/daenerys-game-of-thrones-recap.jpg',
      },
    ],
  },
]
