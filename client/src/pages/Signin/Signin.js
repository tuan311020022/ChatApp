import React from 'react'
import Back from './SignInImage/yasuo0.jpg'
function Signin(){
    return(
        <div className='Signin' style={{position: 'relative'}}>
            <img src = {Back} style = {{height: '850px',width: '100%'}}></img>
            <div style={{width: '40%',height: '450px',backgroundColor:'white',opacity: '50%',position:'absolute',top:'20%',left:'30%'}}>
                <p style={{position:'absolute',top:'5%',left:'40%',fontSize:'50px',color: 'blue'}}>
                    sign in
                </p>
                <form style={{position:'absolute',top: '40%',left: '40%'}}>
                    <label for="name">Tên đăng nhập:</label>
                    <br/>
                    <input style={{height: '30px',width:'150px',fontSize: '20px'}} id="name" name="name" type="text" value=""/>
                    <br/>
                    <label>Mật khẩu:</label>
                    <br/>
                    <input style={{height: '30px',width:'150px',fontSize: '20px'}} name="pass" type="password" value=""/>
                    <br/>
                    <input type="submit" name="submit" value="Đăng Nhập" />
                </form>
            </div>
        </div>
    );
}
export default Signin;