export interface SkillCategory {
  category: string
  description: string
  skills: string[]
}

// Placeholder-friendly: add/remove categories and skills freely, the grid re-flows automatically.
export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages & Frameworks',
    description: 'Core languages and front-end libraries used day to day',
    skills: ['JavaScript (ES6)', 'ReactJS', 'HTML5', 'CSS3', 'jQuery', 'Java', 'Python', 'PHP', 'C#'],
  },
  {
    category: 'CMS & E-Commerce',
    description: 'Platforms used to design and launch client storefronts',
    skills: ['Shopify', 'WordPress', 'Squarespace', 'Square', 'Weebly', 'WIX', 'Bookmark'],
  },
  {
    category: 'Databases & Dev Tools',
    description: 'Data layer and day-to-day developer tooling',
    skills: ['SQL Server Management Studio', 'MySQL / phpMyAdmin', 'Postman', 'Git', 'GitHub', 'GitLab'],
  },
  {
    category: 'Support & Collaboration',
    description: 'The toolchain behind ticket resolution and team workflows',
    skills: ['Jira', 'Confluence', 'HubSpot', 'Freshdesk', 'Microsoft Teams', 'Slack', 'Canva'],
  },
]
