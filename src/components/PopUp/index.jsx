import React from 'react'
import Store from '../../mobx/store'
import vote from '../../api/vote'
import './index.scss'

export default class PopUp extends React.Component {
    render() {
        return (
            <div className="pop-up" onClick={e => Store.showPopUp(false, e)}>
                <div className="container" onClick={e => e.stopPropagation()}>
                    <div className="dish-pic">
                        <img src={`https://wx.idsbllp.cn/foodbe/img/${Store.currentDish.id}.jpg`} alt=""/>
                    </div>
                    <div className="dish-info">
                        <p className="dish-name">{Store.currentDish.name}<span className="like"><img src={require('../../assets/like.png')} alt="" onClick={e => vote(Store.currentDish.id, e)}/>{Store.currentDish.votes}</span></p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>做法：</span>{Store.currentDish.practice}</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>功效：</span>{Store.currentDish.efficacy}</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>介绍：</span>{Store.currentDish.introduction}</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        window.history.pushState({page : 'state4'},'state','#state4')
    }
}