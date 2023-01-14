export type Filter = { index: number; className: string; title: string; category: Category };
export const filters: Filter[] = [
  { index: 0, className: 'dropdowm-item', title: 'All', category: 'all' },
  { index: 1, className: 'dropdowm-item', title: 'Front End', category: 'fe' },
  { index: 2, className: 'dropdowm-item', title: 'Back End', category: 'be' },
  { index: 3, className: 'dropdowm-item', title: 'Data', category: 'data' },
  { index: 4, className: 'dropdowm-item', title: 'DevOps', category: 'devops' },
];

export type Category = 'all' | 'fe' | 'be' | 'data' | 'devops';
export const categories: Category[] = ['fe', 'be', 'data', 'devops'];
