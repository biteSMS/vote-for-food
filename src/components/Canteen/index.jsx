import React from 'react'
import PopUp from '../../components/PopUp'
import {observer} from 'mobx-react'
import Store from '../../mobx/store'
import vote from '../../api/vote'
import './index.scss'
import getData from '../../api/getData';

class DishItem extends React.Component {
    state = {
        //currentVote: this.props.item.votes,
        currentVote: Store.canteens[Store.currentCanteen].filter(e => e.id === this.props.item.id)[0].votes,
        img: Store.voteList.includes(this.props.item.id) ? 'like-active' : 'like'
    }
    render() {
        return (
            <div className="dish-item" style={{animationDelay: `${this.props.index/8+0.1}s`}} onClick={e => {Store.showPopUp(true, e);Store.changeDish(this.props.item, e)}}>
                <div className="dish-pic">
                    <img src={`https://wx.idsbllp.cn/foodbe/img/${this.props.item.id}.jpg`} alt=""/>
                </div>
                <div className="dish-info">
                    <p className="dish-name">{this.props.item.name}<span className={`like ${Store.voteList.includes(this.props.item.id) ? 'like-active' : ''}`}><img src={require(`../../assets/${this.state.img}.png`)} alt="" onClick={e => this.onClickVote(this.props.item.id, e)}/>{Store.canteens[Store.currentCanteen].filter(e => e.id === this.props.item.id)[0].votes}</span></p>
                    <p className="dish-des">介绍：{this.props.item.introduction}</p>
                </div>
            </div>
        )
    }
    onClickVote = (id, e) => {
        e.stopPropagation()
        vote(id)
        .then(res => {
            if (Store.voteStatus === 1) {
                Store.canteens[Store.currentCanteen].filter(e => e.id === id)[0].votes++
                this.setState(prevState => ({
                    currentVote: prevState.currentVote += 1,
                    img: 'like-active'
                }))
            }
        })
        // .then(res => {
        //     if (Store.voteStatus === 1) {
        //         getData()
        //     }
        // })
    }
}

function DishList() {
    return (
        Store.canteens[Store.currentCanteen].map((item, index) => (<DishItem index={index} key={item.id} item={item}/>))
    )
}

@observer
class Canteen extends React.Component {
    state = {
        showPopUp: false
    }

    render() {
        return (
            <React.Fragment>
                <div className="canteen">
                <header>
                    <div
                        className="return"
                        onClick={e => Store.showCanteen(false, e)}
                        ></div>
                    <div className="header-in">{Store.currentCanteen}</div>
                    <div></div>
                </header>
                <main>
                    <DishList/>
                </main>
                </div>
                {Store.isShowPopUp && <PopUp/>}
            </React.Fragment>
        )
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        window.history.pushState({page : 'state3'},'state','#state3')
    }
}

export default Canteen