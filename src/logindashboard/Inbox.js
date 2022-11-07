import React from 'react';
import Header from './Header';
import './Header.css'

export default function Inbox() {
  return (
    <div>
    <div>
      <Header/>
    </div>
    <div className="tablein">
    <div className="table">
      <table>
        <tr>
          <th className="th1">Sl.no</th>
          <th className="th2">Application No.</th>
          <th className="th3">Date</th>
          <th className="th4">Email</th>
          <th className="th5">Subject</th>
        </tr>
      </table>
    </div>
    </div>
    </div>
  )
}
