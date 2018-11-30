import React, { Component } from 'react';
import './Mine.scss'

class Mine extends Component {
    render(){
        return (
            <div id="Mine"  className="page">
             {/* // nav头部 */}
                <header className="nav_bar">
                    <div className="nav_left">
                        <a href="#"><img src="/return_icon.png"/></a>
                    </div>
                    <div className="nav_login">
                        <h3>登录</h3>
                    </div>
                    <div className="nav_right">
                        <a href="#" className="nav_regist">立即注册</a>
                    </div>
                </header>
                {/* 登录页面*/}
                <div className="login">
                    <div className="login_list">
                        <div className="login_active">
                            <a href="#" className="react">手机验证登录</a>
                        </div>
                        <div className="login_normal">
                            <a href="#" className="react">美团账号登录</a>
                        </div>
                    </div>
                </div>
            </div>
          
        )

    }
}

export default Mine;