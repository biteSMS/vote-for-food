import React from 'react'
import PopUp from '../../components/PopUp'
import {observer} from 'mobx-react'
import Store from '../../mobx/store'
import vote from '../../api/vote'
import './index.scss'

function DishItem(props) {
    return (
        <div className="dish-item" style={{animationDelay: `${props.index/8+0.1}s`}} onClick={e => {Store.showPopUp(true, e);Store.changeDish(props.item, e)}}>
            <div className="dish-pic">
                <img src={`https://wx.idsbllp.cn/foodbe/img/${props.item.id}.jpg`} alt=""/>
            </div>
            <div className="dish-info">
                <p className="dish-name">{props.item.name}<span className="like like-active"><img src={require('../../assets/like.png')} alt="" onClick={e => {e.stopPropagation();vote(props.item.id, e)}}/>{props.item.votes}</span></p>
                <p className="dish-des">介绍：{props.item.introduction}</p>
            </div>
        </div>
    )
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
    }
}

export default Canteen