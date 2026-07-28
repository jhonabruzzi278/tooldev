import { Icon as IconifyIcon, addCollection } from '@iconify/react';
import iconData from '@/lib/icons-offline.json';

addCollection(iconData);

export const Icon = IconifyIcon;
