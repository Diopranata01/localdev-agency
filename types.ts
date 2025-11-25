import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
