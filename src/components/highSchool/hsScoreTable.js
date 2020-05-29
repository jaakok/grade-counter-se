const grades = [
  { id: 'L', title: 'L', index: 0},
  { id: 'E', title: 'E', index: 1},
  { id: 'M', title: 'M', index: 2},
  { id: 'C', title: 'C', index: 3},
  { id: 'B', title: 'B', index: 4},
  { id: 'A', title: 'A', index: 5}
]

const math = [
  {
    id: 'mathLong',
    title: 'Lång matematik',
    scores: [46, 43, 40, 35, 27, 19]
  },
  {
    id: 'mathShort',
    title: 'Kort matematik',
    scores: [40, 35, 27, 19, 13, 6]
  },
  {
    id: 'null',
    title: 'Inte avlagt',
    scores: [0, 0, 0, 0, 0, 0]
  }
]

const forLang = [
  {
    id: 'secondLangLong',
    title: 'Det andra inhemska språket (lång)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'secondLangMed',
    title: 'Det andra inhemska språket (medellång)',
    scores: [38, 34, 26, 18, 12, 5]
  },
  {
    id: 'forLangLong',
    title: 'Främmande språk (lång)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'forLangShort',
    title: 'Främmande språk (kort)',
    scores: [30, 27, 21, 15, 9, 3]
  }
]

const score = [
  {
    id: 'phys',
    title: 'Fysik',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'chem',
    title: 'Kemi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'bio',
    title: 'Biologi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'geo',
    title: 'Geografi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'hed',
    title: 'Hälsokunskap',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'psych',
    title: 'Psykologi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'phi',
    title: 'Filosofi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'his',
    title: 'Historia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'soc',
    title: 'Samhällslära',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'rel',
    title: 'Religion/livsåskådningskunskap',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'forLang',
    title: 'Främmande språk (lång/kort)',
    scores: [30, 27, 21, 15, 9, 3]
  }
]

const totalScores = [
  {
    id: 'mathLong',
    title: 'Lång matematik',
    scores: [46, 43, 40, 35, 27, 19]
  },
  {
    id: 'mathShort',
    title: 'Kort matematik',
    scores: [40, 35, 27, 19, 13, 6]
  },
  {
    id: 'null',
    title: 'Inte avlagt',
    scores: [0, 0, 0, 0, 0, 0]
  },
  {
    id: 'fin',
    title: 'Modersmål',
    scores: [46, 41, 34, 26, 18, 10],
    grade: null
  },
  {
    id: 'secondLangLong',
    title: 'Det andra inhemska språket (lång)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'secondLangMed',
    title: 'Det andra inhemska språket (medellång)',
    scores: [38, 34, 26, 18, 12, 5]
  },
  {
    id: 'forLangLong',
    title: 'Främmande språk (lång)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'forLangShort',
    title: 'Främmande språk (kort)',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'phys',
    title: 'Fysik',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'chem',
    title: 'Kemi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'bio',
    title: 'Biologi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'geo',
    title: 'Geografi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'hed',
    title: 'Hälsokunskap',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'psych',
    title: 'Psykologi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'phi',
    title: 'Filosofi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'his',
    title: 'Historia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'soc',
    title: 'Samhällslära',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'rel',
    title: 'Religion/livsåskådningskunskap',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'forLang',
    title: 'Främmande språk (lång/kort)',
    scores: [30, 27, 21, 15, 9, 3]
  }
]

export {score, totalScores, grades, math, forLang}
