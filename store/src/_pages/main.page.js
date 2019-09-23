import React,{useState} from 'react';
import { connect } from "react-redux";
import {ProductPage} from "../_pages";



const MainPage = ({user}) => {



    return <div className="full-page" >
        <h2>
            Welcome
        </h2>
        <h3 >
            {user.name}
        </h3>
        <ProductPage />
    </div>
}

const mapStateToProps = state => {
    const {user} = state.authentication;
    return { user };
};
const ConnectedMainPage = connect(mapStateToProps)(MainPage);

export {ConnectedMainPage as MainPage};