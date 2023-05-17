import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { NextPageWithLayout } from './page';
import 'antd/dist/reset.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // 如果这个 layout 是可用的，则在页面中使用
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
