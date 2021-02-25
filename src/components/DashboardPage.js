import React, { Component } from 'react'
import data from './data.json';
import { Table } from 'react-bootstrap';
class DashboardPage extends Component {

    render() {
        return (
            <div>





                <div className="card-body">
                    <div className=" scrollable" >
                        <div style={{ height: "50vh" }}>

                            <Table striped='true' bordered='true' responsive='true' className="table" >

                                <thead >

                                    <tr >

                                        <th style={{color:"#317db5"}}>ID</th>
                                        <th style={{color:"#317db5"}}  >Name</th>
                                        <th style={{color:"#317db5"}} >Age</th>
                                        <th  style={{color:"#317db5"}}>Gender</th>
                                        <th  style={{color:"#317db5"}}>Email</th>
                                        <th style={{color:"#317db5"}}>Phone No</th>

                                    </tr>

                                </thead>



                                <tbody>

                                    {
                                        data.user.map((userDetail) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            {userDetail.id}
                                                        </td>
                                                        <td>
                                                            {userDetail.name}
                                                        </td>
                                                        <td>
                                                            {userDetail.age}
                                                        </td>
                                                        <td>
                                                            {userDetail.gender}
                                                        </td>
                                                        <td>
                                                            {userDetail.email}
                                                        </td>
                                                        <td>
                                                            {userDetail.phoneNo}
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })
                                    }


                                </tbody>

                            </Table>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default DashboardPage
