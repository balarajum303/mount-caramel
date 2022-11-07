import React from 'react';
import Header from './Header';
import './Header.css'

export default function Sms() {
  return (
    <div>
    <div>
      <Header/>
    </div>
    <div className="tablesms">
    <div className="table">
      <table>
        <tr>
          <th className="th1">Sl.no</th>
          <th className="th2">Application No.</th>
          <th className="th3">Date</th>
          <th className="th4">Mobile</th>
          <th className="th5">Subject</th>
        </tr>
      </table>
    </div>
    </div>
    </div>
  )
}
