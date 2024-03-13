import React from 'react';

import { INavbarViewProps } from './NavbarContainer';

const NavbarView = (props: INavbarViewProps) => {
   // eslint-disable-next-line no-empty-pattern
   const { } = props

   return (
      <div className='shadow-sm bg-slate-500 h-[60px] text-white text-center flex justify-center items-center'>
         Navbar
      </div>
   )
}

NavbarView.defaultProps = {

}

export default NavbarView;
