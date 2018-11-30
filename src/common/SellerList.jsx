import React, { Component } from 'react'
import './SellerList.scss'
// import axios from 'axios';

export default class SellerList extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
       
        return (
            <div>
                <div className="top-placeholder">
                    <div className="top-placeholder-inner">附近商家</div>
                </div>
                <div className="j-main-sec">
                    <div className="poilist">
                    {
                            this.props.sellerArray.map((item, index)=>{
                                return (
                                  <div className="field">
                                    
                                        <div className="avatar">
                                            <span className="avatar-brand">品牌</span>
                                            <img src={item.pic_url} className="j-poi-pic avatar-img"></img>
                                        </div>
                                        <div className="content">
                                            <div className="shop-title shop-title-icon-0">
                                                <div className="shop-na">{item.name}</div>
                                            </div>
                                            <div className="shop-mid-line clearfix">
                                                <div className="appr-status"></div>
                                                <div className="shop-sold mtsi-num">月售</div>
                                                <i className="shop-right mtsi-num">km</i>
                                                <i className="shop-dvd-line">|</i>
                                                <i className="shop-delivery-time mtsi-num">min</i>
                                            </div>
                                            <div className="shop-line clearfix">
                                                <span className="shop-line-item">
                                                     起送价 <em className="mtsi-num">￥</em>
                                                </span>
                                                <span class="shop-line-item mtsi-num">
                                                        <span class="shop-line-item-line">|</span>配送 ¥
                                                </span>
                                            </div>
                                            <div className="item-bottom">
                                                <ul className="item-bottom-ul">
                                                        {
                                                            item.discounts2.map((items,index)=>{
                                                                return(
                                                                    <li className="item-bottom-li">
                                                                        <i><img src={items.icon_url} alt=""/></i>
                                                                            <p>{items.info}</p>
                                                                    </li>
                                                                )
                                                            })
                                                         }
                                                    
                                                </ul>
                                            </div>
                                        </div>


                                  </div>    
                                )
                            })
                    }
                    </div>
                </div>
            </div>
        )
    }

    
}