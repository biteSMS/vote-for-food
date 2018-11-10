import React from 'react'
import PopUp from '../../components/PopUp'
import {observer} from 'mobx-react'
import Store from '../../mobx/store'
import './index.scss'

function DishItem(props) {
    return (
        <div className="dish-item" style={{animationDelay: `${props.index/8+0.1}s`}}>
            <div className="dish-pic">
                <img src={require('../../assets/canteendemo.png')} alt=""/>
            </div>
            <div className="dish-info">
                <p className="dish-name">紫薯浓浆<span className="like like-active"><img src={require('../../assets/like.png')} alt=""/>100</span></p>
                <p className="dish-des">介绍：紫薯浓浆是豆浆记忆最新研发的一 款粗粮饮品，饮品呈紫色，绿色健康</p>
            </div>
        </div>
    )
}

function DishList() {
    return (
        [1,2,3,4,5,6,7].map((item, index) => (<DishItem index={index}/>))
    )
}

@observer
class Canteen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="canteen">
                <header>
                    <div
                        className="return"
                        onTouchStart={e => Store.showCanteen(false, e)}
                        ></div>
                    <div className="header-in">千喜鹤食堂</div>
                    <div></div>
                </header>
                <main>
                    <DishList/>
                </main>
                </div>
                {/* <PopUp/> */}
            </React.Fragment>
        )
    }
}

export default Canteen