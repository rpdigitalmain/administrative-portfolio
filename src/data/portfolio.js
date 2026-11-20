export const portfolio = {
  name: '[Your Name]',
  role: 'Administrative Professional',
  initials: 'YN',
  areas: [
    { label: 'Primary area', value: '[Area 1]', style: 'dark' },
    { label: 'Focus', value: '[Area 2]', style: 'accent' },
    { label: 'Also experienced in', value: '[Area 3]', style: 'soft' },
    { label: 'Currently developing', value: '[Area 4]', style: 'outline' },
  ],
  stats: [
    { value: '[00]', label: 'Years of experience' },
    { value: '[00]', label: 'Companies' },
    { value: '[00]', label: 'Certifications' },
  ],
  summary: {
    text: '[A short professional summary: your field, the routines you manage, and the value you bring to a team.]',
    metric: '[00]',
    result: '[A notable result, such as improved processes]',
  },
  skills: ['[Skill 1]', '[Skill 2]', '[Skill 3]', '[Skill 4]'],
  tools: ['[Tool 1]', '[Tool 2]', '[Tool 3]'],
  languages: ['[Language — proficiency]'],
  experience: [
    {
      title: '[Job Title]',
      company: '[Company]',
      period: '[Start – Present]',
      status: 'Current',
      current: true,
      result: '[A selected result, with a number where possible.]',
    },
    {
      title: '[Job Title]',
      company: '[Company]',
      period: '[Start – End]',
      status: 'Previous',
      current: false,
      result: '[A selected result.]',
    },
    {
      title: '[Job Title]',
      company: '[Company]',
      period: '[Start – End]',
      status: 'Previous',
      current: false,
      result: '[A selected result.]',
    },
  ],
  contact: {
    whatsappNumber: '', // Add the country code, area code, and phone number using digits only.
    whatsappMessage: 'Hello, I would like to get in touch.',
  },
  education: [
    {
      title: '[Degree program]',
      institution: '[Institution]',
      year: '[Year]',
      style: 'dark',
    },
    {
      title: '[Additional course]',
      institution: '[Institution]',
      year: '[Year]',
      style: 'light',
    },
  ],
  certifications: [
    {
      title: '[Certification]',
      institution: '[Issuing organization]',
      year: '[Year]',
      style: 'accent',
    },
    {
      title: '[Certification]',
      institution: '[Issuing organization]',
      year: '[Year]',
      style: 'light',
    },
  ],
}