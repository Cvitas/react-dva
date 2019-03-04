import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import LoginForm from '@/components/LoginForm'
import style from './index.scss'

function index({ userInfo,handleSubmit }) {
    const handleSubmitClick = () => {
        userInfo;
        handleSubmit();
    };
    return (
        <div className="wrap">
            <div className={ style.login }>
                <div className={ style.login_wrap }>
                    <p className={ style.login_header }>教室登录</p>
                    <LoginForm postSubmit={ handleSubmitClick }></LoginForm>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        userInfo:state.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit() {
            dispatch({ type: 'login/fetchLogin', payload: {} });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);