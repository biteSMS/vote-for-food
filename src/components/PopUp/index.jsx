import React from 'react'
import Store from '../../mobx/store'
import './index.scss'

export default class PopUp extends React.Component {
    render() {
        return (
            <div className="pop-up" onClick={e => Store.showPopUp(false, e)}>
                <div className="container" onClick={e => e.stopPropagation()}>
                    <div className="dish-pic">
                        <img src="https://wx.idsbllp.cn/foodbe/img/17.jpg" alt=""/>
                    </div>
                    <div className="dish-info">
                        <p className="dish-name">{Store.currentDish.name}</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>做法：</span>{Store.currentDish.practice}</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>功效：</span>{Store.currentDish.efficacy}</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>介绍：</span>{Store.currentDish.introduction}</p>
                    </div>
                </div>
            </div>
        )
    }
}