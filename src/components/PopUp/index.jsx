import React from 'react'
import Store from '../../mobx/store'
import vote from '../../api/vote'
import './index.scss'

export default class PopUp extends React.Component {
    state = {
        currentVote: Store.canteens[Store.currentCanteen].filter(e => e.id === Store.currentDish.id)[0].votes,
        img: Store.voteList.includes(Store.currentDish.id) ? 'like-active' : 'like'
    }
    render() {
        return (
            <div className="pop-up" onClick={e => Store.showPopUp(false, e)}>
                <div className="container" onClick={e => e.stopPropagation()}>
                    <div className="dish-pic">
                        <img src={`https://wx.idsbllp.cn/foodbe/img/${Store.currentDish.id}.jpg`} alt=""/>
                    </div>
                    <div className="dish-info">
                        <p className="dish-name">{Store.currentDish.name}<span className={`like ${Store.voteList.includes(Store.currentDish.id) ? 'like-active' : ''}`}><img src={require(`../../assets/${this.state.img}.png`)} alt="" onClick={e => this.onClickVote(Store.currentDish.id, e)}/>{Store.canteens[Store.currentCanteen].filter(e => e.id === Store.currentDish.id)[0].votes}</span></p>
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

    onClickVote = (id, e) => {
        e.stopPropagation()
        vote(id)
        .then(res => {
            if (Store.voteStatus === 1) {
                //Store.voteList.push(id)
                Store.canteens[Store.currentCanteen].filter(e => e.id === id)[0].votes++
                this.setState(prevState => ({
                    currentVote: prevState.currentVote += 1,
                    img: 'like-active'
                }))
            }
        })
    }

    imgActive(id) {
        Store.voteList.includes(Store.currentDish.id) ? require('../../assets/like-active.png') : require('../../assets/like.png')
    }
}