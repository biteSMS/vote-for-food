import axios from 'axios'
import Store from '../mobx/store'

export default () =>
axios
    .get('https://wx.idsbllp.cn/foodbe/info')
    .then(res => {
        var data = res.data.data
        Store.addData(data)
    })