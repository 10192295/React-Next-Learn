import { ISidebarLayout } from './SidebarLayout';

const base: ISidebarLayout = {
  linkeArray: [
    { linkId: 1, linkName: '主页', linkRouter: '/' },
    { linkId: 2, linkName: '菜单', linkRouter: '/menu' },
    { linkId: 3, linkName: '关于', linkRouter: '/about' }
  ]
};

export const mockSidebarLayoutProps = {
  base,
};
