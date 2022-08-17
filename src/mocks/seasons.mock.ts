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
        cover: '1MrmtK2V7vzJEJlFXtFun5kU1irwLTkGa',
      },
      {
        slug: 'the-kingsroad',
        title: 'The Kingsroad',
        episodeNumber: 2,
        description: "The Lannisters plot to ensure Bran's silence; Jon and Tyrion head to the Wall; Ned faces a family crisis en route to King's Landing.",
        cover: '1MhTk05YfaWcaYD11U-Av83xvodH2yB5D',
      },
      {
        slug: 'lord-snow',
        title: 'Lord Snow',
        episodeNumber: 3,
        description: "Jon impresses Tyrion at Castle Black; Ned confronts his past and future at King's Landing; Daenerys finds herself at odds with Viserys.",
        cover: '1ar5kbQVOFBgiHuWOzs6fc3j0AJEcfO-f',
      },
      {
        slug: 'cripples-bastards-and-broken-things',
        title: 'Cripples, Bastards, and Broken Things',
        episodeNumber: 4,
        description: "Ned probes Arryn's death; Jon takes measures to protect Sam; Tyrion is caught in the wrong place.",
        cover: '1l_c1ziCG9QFkOd4xWSGM6QGEfSofhCQZ',
      },
      {
        slug: 'the-wolf-and-the-lion',
        title: 'The Wolf and the Lion',
        episodeNumber: 5,
        description: "Ned refuses an order from the King; Tyrion escapes one perilous encounter, only to find himself in another.",
        cover: '1wfm6r7exobYqwE7DhVhIq8qQQodl8pXg',
      },
      {
        slug: 'a-golden-crown',
        title: 'A Golden Crown',
        episodeNumber: 6,
        description: "Ned makes a controversial decree; Tyrion confesses to his 'crimes'; Viserys receives final payment for Daenerys.",
        cover: '15SMk19QfBMsEBjOA1MZDntw3w3nBMEQb',
      },
      {
        slug: 'you-win-or-you-die',
        title: 'You Win or You Die',
        episodeNumber: 7,
        description: "Ned confronts Cersei about her secrets; Jon takes his Night's Watch vows; Drogo promises to lead the Dorthraki to King's Landing.",
        cover: '1XNhxDzxx-9Qo51F3DyAl5f8QxPPz9s9b',
      },
      {
        slug: 'the-pointy-end',
        title: 'The Pointy End',
        episodeNumber: 8,
        description: "The Lannisters press their advantage over the Starks; Robb rallies his father's northern allies and heads south to war.",
        cover: '1FvBCuiJAHZWSAZW96zb0amaX7rcSLxFC',
      },
      {
        slug: 'baelor',
        title: 'Baelor',
        episodeNumber: 9,
        description: "Ned makes a fateful decision; Robb takes a prized prisoner; Dany finds her reign imperiled.",
        cover: '1czmjnlxiaFZwALw7mqw-5-40WeI_SEcZ',
      },
      {
        slug: 'fire-and-blood',
        title: 'Fire and Blood',
        episodeNumber: 10,
        description: "Season 1 Finale. A new king rises in the North; a Khaleesi finds new hope.",
        cover: '1ducWDrS8e78OqwgAaawgXshg7HsqJvv7',
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
        cover: '12YiCjqQY_7O_uOWdgDSqczbU7-RYV_Tf',
      },
      {
        slug: 'what-is-dead-may-never-die',
        title: 'What Is Dead May Never Die',
        episodeNumber: 3,
        description: "Tyrion roots out a spy; Catelyn meets a new king and queen; Bran dreams; Theon drowns.",
        cover: '1AWtmNwBYdLR4zmxZF0miKeDA7Vx9YuKv',
      },
      {
        slug: 'garden-of-bones',
        title: 'Garden of Bones',
        episodeNumber: 4,
        description: "Catelyn tries to save two kings from themselves; Tyrion practices coercion; Robb meets a foreigner; Dany finds her ally.",
        cover: '1bQrQFuqnLIhiGQ6azDnlc1SAkKg9PNse',
      },
      {
        slug: 'the-ghost-of-harrenhal',
        title: 'The Ghost of Harrenhal',
        episodeNumber: 5,
        description: "The Baratheon rivalry ends; Tyrion learns of Cersei's secret weapon; Dany suffers a loss; Arya collects a debt she didn't know was owed.",
        cover: '1P13tBO-uko04pxvA1Ic2Z7uYDmCod7mL',
      },
      {
        slug: 'the-old-gods-and-the-new',
        title: 'The Old Gods and the New',
        episodeNumber: 6,
        description: "Arya has a surprise visitor; Dany vows to take what is hers; Joffrey meets his subjects; Qhorin gives Jon a chance to prove himself.",
        cover: '1C9_ajx1pLNTC6gMAEEjXYNGFt_2iWUqK',
      },
      {
        slug: 'a-man-without-honor',
        title: 'A Man Without Honor',
        episodeNumber: 7,
        description: "Jaime meets a distant relative; Dany receives an invitation; Theon leads a search party; Jon loses his way in the wilderness.",
        cover: '1Gj9OcUFILv85XqHsIkGoBRPA7NyoHod0',
      },
      {
        slug: 'the-prince-of-winterfell',
        title: 'The Prince of Winterfell',
        episodeNumber: 8,
        description: "Theon holds down the fort; Arya calls in her debt with Jaqen; Robb is betrayed; Stannis and Davos approach their destination.",
        cover: '1TOpPS2w4ulghWoBodb6kNT7zzOpj1WyH',
      },
      {
        slug: 'blackwater',
        title: 'Blackwater',
        episodeNumber: 9,
        description: "Tyrion and the Lannisters fight for their lives as Stannis' fleet assaults King's Landing.",
        cover: '1kXTWrmZuALMTfVTyNsrRjH09pitCcMzI',
      },
      {
        slug: 'valar-morghulis',
        title: 'Valar Morghulis',
        episodeNumber: 10,
        description: "Season 2 Finale. Tyrion wakes up in a new world; Dany goes to a strange place; Jon proves himself.",
        cover: '1lTrGw2v2eLXhtpaKu4QbWdBUnr4_J-bl',
      },
    ],
  },
  {
    slug: 'third-season',
    seasonNumber: 3,
    episodes: [
      {
        slug: 'valar-dohaeris',
        title: 'Valar Dohaeris',
        episodeNumber: 1,
        description: "Season 3 Premiere. Jon is tested by the wildling king; Tyrion asks for his reward; Dany sails to Slaver's Bay.",
        cover: '1ebMd9Aeni0vIsCrMNjLrObef4sLjnSZ9',
      },
    ],
  },
]
