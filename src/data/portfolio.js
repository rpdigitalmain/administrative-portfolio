// Profile details are being personalized. Confirm the remaining sample records before publishing.
const profileImage = 'https://pub-752ba373c3a048999b2940bcdfbc0119.r2.dev/images/profile-photo.webp'

export const portfolio = {
  name: 'Ruan Pablo',
  role: 'Auxiliar administrativo',
  initials: 'RP',
  // Set to null to show the initials fallback instead of a profile photo.
  profileImage,
  areas: [
    { label: 'Foco principal', value: 'Administração', style: 'dark' },
    { label: 'Tipo de serviço', value: 'Organização e atendimento', style: 'accent' },
  ],
  summary: {
    text: 'A administração é uma atuação secundária para mim. Também tenho conhecimentos em desenvolvimento full stack e estou aberto a diferentes oportunidades de trabalho.',
    metric: '',
    result: '',
  },
  skills: [
    { label: 'Organização', icon: 'organization' },
    { label: 'Auxiliar administrativo', icon: 'administrative-support' },
    { label: 'Formatação de documentos', icon: 'document-formatting' },
    { label: 'Inserção de dados', icon: 'data-entry' },
    { label: 'Noções de planilhas', icon: 'spreadsheet-basics' },
    { label: 'Gestão do tempo', icon: 'time-management' },
    { label: 'Atenção aos detalhes', icon: 'attention-to-detail' },
    { label: 'Comunicação', icon: 'communication' },
  ],
  tools: [
    { label: 'LibreOffice', icon: 'libreoffice' },
    { label: 'Figma', icon: 'figma' },
    { label: 'Affinity', icon: 'affinity' },
  ],
  languages: [
    { label: 'Português — Nativo', icon: 'portuguese' },
    { label: 'Inglês — A2', icon: 'english' },
  ],
  experience: [
    {
      title: 'Atendente de loja',
      company: 'Materiais de Construção',
      period: '2020 – 2021',
      status: 'Anterior',
      current: false,
      result: 'Atendi clientes e realizei diferentes tarefas na loja.',
    },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/rpdigitalmain/',
      displayValue: 'rpdigitalmain',
    },
    {
      label: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/rpdigitalmain/',
      displayValue: 'rpdigitalmain',
    },
    {
      label: 'WhatsApp',
      icon: 'whatsapp',
      phoneNumber: '5535999182635',
      displayValue: '+55 (35) 99918-2635',
    },
  ],
  contact: {
    location: 'Cana Verde, MG',
    availability: 'Disponível para oportunidades',
  },
  education: [
    {
      title: 'Ensino médio completo',
      institution: 'Escola Estadual Doutor José Esteves de Andrade Botelho',
      year: '2024',
      style: 'dark',
    },
  ],
  independentLearning: [
    {
      title: 'Experiência prática',
      institution: 'Ferramentas e tarefas administrativas',
      year: 'Em andamento',
      style: 'accent',
    },
  ],
}
