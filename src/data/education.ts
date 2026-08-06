export interface EducationEntry {
  degree: string
  org: string
  dates: string
  description: string
}

// Placeholder-friendly — ordered newest first.
export const education: EducationEntry[] = [
  {
    degree: 'Computer Systems Technician — Software Support (Co-Op)',
    org: 'Mohawk College, Hamilton, Ontario',
    dates: 'Jan 2020 – Feb 2022',
    description: 'Graduated with an overall GPA of 81.4/100.',
  },
  {
    degree: 'Bachelor of Computer Engineering',
    org: 'Gujarat Technological University, Gujarat, India',
    dates: '2014 – 2018',
    description: 'Graduated with distinction, CGPA 7.37/10 (WES-evaluated).',
  },
]
