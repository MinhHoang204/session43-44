import React from 'react'
import "./Bai2.scss"
export default function Bai2() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <a href="#" className="nav-link">
           Home
        </a>
        <a href="#" className="nav-link">
           New Post
        </a>
        <a href="#" className="nav-link">
           Add Content
        </a>
      </div>
      <div className="main-content">
         <div className="stat-card">Sales: 2,456</div>
         <div className="stat-card">Users: 3,826</div>
         <div className="stat-card">Products: 5,326</div>
         <div className="stat-card">Tasks: 1,326</div>
         <div className="form-section">
         <h2>Form title</h2>
       </div>
      <table className="table">
         <thead>
           <tr>
             <th>Table Title</th>
             <th>Column Title</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Row 1</td>
             <td>Sample Text</td>
             <td>
                <button className="action-button">Edit</button>
             </td>
             <td>
                <button className="action-button">Delete</button>
             </td>
           </tr>
         </tbody>
      </table>
     </div>
    </div>
  )
}
