import {
  ChartBarIcon,
  UsersIcon,
  DocumentChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export const navigationItems = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: ChartBarIcon,
    path: '/',
    active: true,
  },
  {
    id: 'user-management',
    name: 'User Management',
    icon: UsersIcon,
    path: '/users',
    active: false,
  },
  {
    id: 'reporting',
    name: 'Reporting',
    icon: DocumentChartBarIcon,
    path: '/reporting',
    active: false,
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: CogIcon,
    path: '/settings',
    active: false,
  },
];

export const userProfile = {
  name: 'Jaydeep',
  email: 'jaydeep@gmail.com',
  avatar: 'https://www.freepik.com/free-photo/look-there-happy-attractive-young-man-with-stubble-posing-against-blank-blue-studio-wall_11528363.htm',
  initials: 'J',
};
