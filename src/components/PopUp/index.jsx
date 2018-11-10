import React from 'react'
import './index.scss'

export default class PopUp extends React.Component {
    render() {
        return (
            <div className="pop-up">
                <div className="container">
                    <div className="dish-pic">
                        <img src="https://wx.idsbllp.cn/foodbe/img/17.jpg" alt=""/>
                    </div>
                    <div className="dish-info">
                        <p className="dish-name">培根炒杏鲍菇蛋包饭</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>做法：</span>杏鲍菇对半切开后，再切成片，培根切成大小相当的片，葱切段，蒜、姜切片，红椒、青椒切块。锅中放油，烧至5成热时放入葱姜蒜爆香，再放入红辣椒炒出香味，放入培根，炒出油，加入杏鲍菇翻炒，炒软后淋入生抽炒至上色，加入红椒、青椒翻，再加入少许盐调味，翻炒后淋入香油炒匀即可出锅装盘。</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>功效：</span>杏鲍菇营养丰富，富含蛋白质、碳水化合物、维生素及钙、镁、铜、锌等矿物质，可以提高人体免疫功能，对人体具有抗癌、降血脂、润肠胃以及美容等作用。</p>
                        <p className="dish-pra"><span style={{color: '#ff645d'}}>介绍：</span>培根炒杏鲍菇，主要以杏鲍菇和培根食材，加上青红椒、葱姜东炒制而成。是一道营养价值极高的家常菜。是一道营养价值极高的家常菜。是一道营养价值极高的家常菜。是一道营养价值极高的家常菜。是一道营养价值极高的家常菜。</p>
                    </div>
                </div>
            </div>
        )
    }
}