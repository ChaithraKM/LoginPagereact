import React, { Component } from 'react'
import { Card, Button,  Form,  } from 'react-bootstrap';
export class LandingPage extends Component {

    state = {
        UserName: '',
        Password: '',
error:""
    }

    handleSubmit = (e) => {

        if ((this.state.UserName ==='hruday@gmail.com')
        &&(this.state.Password ==='hruday123')) {
        this.setState({
        
        })
        window.location.href = "/DashboardPage"
        }
      
        else  {
        this.setState({
        error: 'Incorrect Username or Password'
        })
     
        }
    }   
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {
        return (
            <div>
                   <div className="container-fluid" style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
backgroundColor: "#d1dde6", height: "100vh"
}}>
                 {/* <div className="container"  style={{position:"absolute", left:"50%", top:"50%",transform:'translate(-50%, -50%)'}} > */}
<br/>

                    <div className="row">
                   <div className="col-md-6 text-center">


<Card style={{width:"300%", borderRadius: "8px", padding: "2rem", paddingTop: "0", backgroundColor: "#FFF", boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)" }}>
    <br />

    <h1 style={{color:"#1877F2"}}>Login</h1>

    <Form>
        <Form.Group >
{/* <lable>User Name</lable> */}
            <Form.Control className="loginbuttons" type="email"
                style={{
                    background: "transparent", fontFamily: "Raleway,sans-serif", color: "black", textAlign: "left",
                    bordertop: "0", borderRight: "0", borderleft: "0", padding: "14px 16px",border: "1px solid #dddfe2"
                }}
                placeholder="Username" name="UserName"  value={this.state.UserName} onKeyPress={event => event.key === "Enter" && this.handleSubmit()} onChange={this.handleChange} required />
        </Form.Group>

        <Form.Group >

            <Form.Control placeholder="Password" className="loginbuttons" type="password"
                style={{
                    bordertop: "0", background: "transparent", fontFamily: "Raleway,sans-serif", color: "black", textAlign: "left",
                    borderRight: "0", borderleft: "0", padding: "14px 16px",border: "1px solid #dddfe2"
                }} name="Password" value={this.state.Password} onKeyPress={event => event.key === "Enter" && this.handleSubmit()} onChange={this.handleChange}
                required />
        </Form.Group>

        <div className="row">
                                    <div className="col-md-2"></div>
                                    {this.state.error ?
                                        <div style={{ color: "blue", fontWeight: "bold", textAlign: "center" }}>
                                            {this.state.error}
                                        </div>
                                        :
                                        null
                                    }
                                </div>



        <Button className="loginbuttons"
          
            style={{
                backgroundColor: "#1877F2",
                color: "white", borderRadius: "7px", padding: "15px 100px",
                fontFamily: "Raleway,sans-serif", textAlign: "center", border: "none", width: "100%", fontWeight: "bold"
            }} onClick={this.handleSubmit} >
            LOG IN
</Button>

        <br />
        <br />
       
    </Form>
    <br />
    

</Card>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default LandingPage
