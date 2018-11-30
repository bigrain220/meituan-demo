import React, { Component } from 'react';
import SellerList from '../../common/SellerList'
import Top from './Header/Header';
import 'whatwg-fetch';
// import API from '../../api';
import './Home.css';
import sellerData from './data/sellerList.json'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            sellerArray: [],
        }
    }
    render(){
        let {sellerArray} = this.state;
        return (
            <div id="Home"  className="page">

                <Top></Top>

                <div className="downBox">
                    <div className="down">
                        <a href="#" className="baitem">
                            <img src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
                        </a>
                    </div>
                </div>
               
                <SellerList sellerArray={sellerArray}></SellerList>
            </div>
        )

    }

    componentDidMount(){
        
        // fetch(API.SELLER_LIST_API, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         uuid: 'KG7UUCHyahH99VUgdX3ZMbh42uzJDUg0Jt-IAvaBcv5q-Vpm4upswk-zCr3vjV3_',
        //         platform: 3,
        //         partner: 4,
        //         page_index: 0,
        //         apage: 1,
        //         mtsi_font_css_version: '20ad699b'
        //     })
        //   })
        // .then(response => {
        //     console.log(response)
        //     return response
        //     })
        // .then(result => {
        //     console.log(result)
        //     })
        // .catch(error => {
        //         console.log(error)
        //     })
          
            this.setState({sellerArray: sellerData.data.poilist})
            console.log(sellerData)
    }


}

export default Home;