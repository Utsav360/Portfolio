export const githubUsername = 'Utsav360'

export interface Contribution {
  title: string
  description: string
  url: string
}

// Placeholder-friendly — swap in real PRs/issues as they happen.
export const notableContributions: Contribution[] = [
  {
    title: 'Rolling Dice App',
    description: 'React practice project demonstrating component/props/state patterns, kept public as a reference implementation.',
    url: 'https://github.com/Utsav360/Rolling-Dice-Apk',
  },
  {
    title: "Sandy and Leslie's Apartment",
    description: 'College accessibility assignment: multimedia, image maps, and WAI-compliant semantic HTML5/CSS3.',
    url: `https://github.com/${githubUsername}`,
  },
]
