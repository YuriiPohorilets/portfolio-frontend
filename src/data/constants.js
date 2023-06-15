import { LinkedinIcon, GithubIcon, SkypeIcon, TelegramIcon } from 'shared/Icons/Icons';
import { icon } from 'shared/commonStyles';

export const navList = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contacts', path: '#contacts' },
];

export const socialList = {
  email: 'pohorilets.y@gmail.com',
  phone: '380958882136',
  address: 'Ukraine, Kyiv',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yuriipohorilets/',
      icon: <LinkedinIcon sx={icon} />,
    },
    {
      name: 'github',
      url: 'https://github.com/YuriiPohorilets',
      icon: <GithubIcon sx={icon} />,
    },
    {
      name: 'skype',
      url: 'live:.cid.56082ae985fc53a0',
      icon: <SkypeIcon sx={icon} />,
    },
    {
      name: 'telegram',
      url: 'https://t.me/YuraPohorilets',
      icon: <TelegramIcon sx={icon} />,
    },
  ],
};
