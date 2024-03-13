import React from 'react';
import NavbarView from './NavbarView';

interface INavbarContainerProps {
}

export interface INavbarViewProps {
}

const NavbarContainer=(props: INavbarContainerProps) => {
   // eslint-disable-next-line no-empty-pattern
   const {} = props

   const passProps: INavbarViewProps = {

   }

   return <NavbarView {...passProps}/>
} 

NavbarContainer.defaultProps = {

} 

export default NavbarContainer;
