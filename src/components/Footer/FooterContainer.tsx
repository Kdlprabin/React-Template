import React from 'react';
import FooterView from './FooterView';

interface IFooterContainerProps {
}

export interface IFooterViewProps {
}

const FooterContainer=(props: IFooterContainerProps) => {
   // eslint-disable-next-line no-empty-pattern
   const { } = props

   const passProps: IFooterViewProps = {

   }

   return <FooterView {...passProps}/>
} 

FooterContainer.defaultProps = {

} 

export default FooterContainer;
