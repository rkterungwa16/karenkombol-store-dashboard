
// import { CNavGroup, CNavItem, CNavTitle } from './'

const _nav = [
  {
    // component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    // component: CNavTitle,
    name: 'Theme',
  },
  {
    // component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    // icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    // component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
   //  icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    // component: CNavTitle,
    name: 'Components',
  },


  {
    // component: CNavTitle,
    name: 'Extras',
  },
  {
    // component: CNavGroup,
    name: 'Pages',
    // icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        // component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        // component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        // component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        // component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    // // component: CNavGroup,
    name: 'Apps',
    // icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        // component: CNavGroup,
        name: 'Invoicing',
        // icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        to: '/apps/invoicing',
        items: [
          {
            // // component: CNavItem,
            name: 'Invoice',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/invoicing/invoice',
          },
        ],
      },
      {
        // component: CNavGroup,
        name: 'Email',
        to: '/apps/email',
        // icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        items: [
          {
            // // component: CNavItem,
            name: 'Inbox',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/inbox',
          },
          {
            // component: CNavItem,
            name: 'Message',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/message',
          },
          {
            // component: CNavItem,
            name: 'Compose',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/compose',
          },
        ],
      },
    ],
  },
]

export default _nav
