
export interface VivaQuestion {
  question: string;
  answer: string;
  category: 'Cryptography' | 'Hardware' | 'Healthcare' | 'Networking';
}

export interface DemoStep {
  title: string;
  status: 'pending' | 'processing' | 'completed';
  description: string;
}

export enum ProjectTab {
  OVERVIEW = 'Overview',
  HARDWARE = 'Hardware',
  CRYPTOGRAPHY = 'Cryptography',
  DEMO = 'Live Demo',
  CODE = 'Software',
  VIVA = 'Viva Prep',
  REPORT = 'Final Report'
}
