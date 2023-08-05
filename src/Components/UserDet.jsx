import React from 'react'
import './styles.css'
export default function UserDet()
{
  return(
  <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <table className="table">
            <tbody>
              <tr>
                <td><img src="https://via.placeholder.com/1000x1000" alt="..." className="img-fluid rounded-circle"/></td>
                <i className="fa-solid fa-address-book"></i>
                <td>
                  <h2>Seller</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl id sapien tempus ultrices. Sed maximus magna velit, et blandit enim pretium nec. Nulla euismod, massa vel pharetra hendrerit, velit tellus dapibus arcu, at lacinia tortor mauris eget magna.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec faucibus ipsum non quam volutpat, vel euismod mi auctor.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </div>
  );
}