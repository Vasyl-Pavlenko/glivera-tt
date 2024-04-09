import {
  CustomersSvg,
  DashboardSvg,
  HelpSvg,
  ProductSvg,
  PromoteSvg,
  IncomeSvg,
} from '../components/index';

export const SIDE_BAR_ITEMS = [
  {
    id: 1,
    link: '/',
    icon: DashboardSvg,
    title: 'Dashboard',
  },
  {
    id: 2,
    link: '/product',
    icon: ProductSvg,
    title: 'Product',
  },
  {
    id: 3,
    link: '/customers',
    icon: CustomersSvg,
    title: 'Customers',
  },
  {
    id: 4,
    link: '/income',
    icon: IncomeSvg,
    title: 'Income',
  },
  {
    id: 5,
    link: '/promote',
    icon: PromoteSvg,
    title: 'Promote',
  },
  {
    id: 6,
    link: '/help',
    icon: HelpSvg,
    title: 'Help',
  },
];
