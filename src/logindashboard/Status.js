import React from 'react';
import Header from './Header';

export default function Status() {
  return (
    <div>
    <div>
        <Header/>
    </div>
    <div className='st'>
      <table border="3"className="tab">
        <tr>
          <th className="t1">Sl.no</th>
          <th className="t2">Application No.</th>
          <th className="t3">Status</th>
          <th className="t4">Please Allow pop up in your browser settings </th>
          
        </tr>
      </table>
    </div>
    </div>
  )
}
