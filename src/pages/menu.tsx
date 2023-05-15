// import PictureCard from "@/components/cards/picture/PictureCard"
// import { mockPictureCardProps } from '@/components/cards/picture/PictureCard.mocks';
// import Router from "next/router";
// import { useEffect } from "react";



// export default function Menu() {
//   useEffect(() => {
//     document.title = "menu"
//   })
//   function handleClick() {
//     Router.push('/')
//   }
//   return (
//     <div>
//       <PictureCard {...mockPictureCardProps.base} />
//       <button onClick={handleClick}>点击跳转</button>
//     </div>
//   )
// }

import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import SidebarLayout from '@/components/layout/sidebar/SidebarLayout';
import { mockSidebarLayoutProps } from '@/components/layout/sidebar/SidebarLayout.mocks';
import { useEffect } from 'react';
import { NextPageWithLayout } from './page';

const Menu: NextPageWithLayout = () => {
  useEffect(() => {
    window.setTimeout(function(){
	    window.location.reload();
    },2000);	
  })
return (
  <section>
    <h2>Layout Example (Menu)</h2>
    <p>
      This example adds a property <code>getLayout</code> to your page,
      allowing you to return a React component for the layout. This allows you
      to define the layout on a per-page basis. Since we&apos;re returning a
      function, we can have complex nested layouts if desired.
    </p>
    <p>
      When navigating between pages, we want to persist page state (input
      values, scroll position, etc.) for a Single-Page Application (SPA)
      experience.
    </p>
    <p>
      This layout pattern will allow for state persistence because the React
      component tree is persisted between page transitions. To preserve state,
      we need to prevent the React component tree from being discarded between
      page transitions.
    </p>
    <h3>Try It Out</h3>
    <p>
      To visualize this, try tying in the search input in the{' '}
      <code>Sidebar</code> and then changing routes. You&apos;ll notice the
      input state is persisted.
    </p>
  </section>
);
};

export default Menu;

Menu.getLayout = (page) => {
return (
  <PrimaryLayout>
    <SidebarLayout {...mockSidebarLayoutProps.base} />
    {page}
  </PrimaryLayout>
);
};