import React from 'react';

import { IFooterViewProps } from './FooterContainer';

const FooterView = (props: IFooterViewProps) => {
   // eslint-disable-next-line no-empty-pattern
   const { } = props

   return (
      <div className='text-white bg-slate-500 flex items-center justify-center aspect-[10/1] justify-self-end'>
         Footer
      </div>
   )
}

FooterView.defaultProps = {

}

export default FooterView;
