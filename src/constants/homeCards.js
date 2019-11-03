import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';
import home from '../fonts/svgs/light/home-heart.svg';
import user from '../fonts/svgs/light/user-shield.svg';


const HOME_CARDS = [
  {
    ICON: home,
    TITLE: 'Creating Properties',
    LINKS: [
      { URL: '/ui/', TEXTNODE: 'Creating a Property' },
      { URL: '/ui/', TEXTNODE: 'Managing Pricing' },
      { URL: '/ui/', TEXTNODE: 'Importing Availability and iCals' },
    ],
    BUTTON_LINK: '/ui/sending-email/',
  },
  {
    ICON: user,
    TITLE: 'Managing Users, Owners and Employees',
    LINKS: [
      { URL: '/ui/managing-contacts/create-and-manage-contacts/', TEXTNODE: 'Create and Manage Contacts' },
      { URL: '/ui/managing-contacts/building-your-contact-list/', TEXTNODE: 'Contacts Best Practices' },
      { URL: '/ui/managing-contacts/segmenting-your-contacts/', TEXTNODE: 'Segmenting Contacts' },
    ],
    BUTTON_LINK: '/ui/managing-contacts/',
  }
];

export default HOME_CARDS;
