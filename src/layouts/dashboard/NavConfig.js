// component
import { Icon } from '@iconify/react';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Tổng quan',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Dịch vụ',
    path: '/dashboard/user',
    icon: getIcon('material-symbols:home-repair-service-rounded'),
  },
  {
    title: 'Quản lý đặt lịch',
    path: '/dashboard/schedule',
    icon: getIcon('healthicons:i-schedule-school-date-time')
  },
  {
    title: 'Chăm sóc viên',
    path: '/dashboard/sitlist',
    icon: getIcon('healthicons:nurse')
  },
  {
    title: 'Khách hàng',
    path: '/dashboard/customer',
    icon: getIcon('carbon:user-profile')
  },
  {
    title: 'Đơn đăng ký',
    path: '/dashboard/404',
    icon: getIcon('clarity:form-line')
  },
  {
    title: 'Test',
    path: '/dashboard/products',
    icon: getIcon('healthicons:i-schedule-school-date-time')
  },
];

export default navConfig;
