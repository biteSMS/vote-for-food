import axios from 'axios'
import Store from '../mobx/store'
import getData from './getData'

export default function(id) {
    axios({
        method: 'POST',
        url: 'https://wx.idsbllp.cn/foodbe/vote',
        params: {
            id: id
        },
        headers: {
            'jwt': Store.jwt
        }
    })
    .then(res => {
        console.log(res.data)
        var status = res.data.status
        switch (status)
        {
            case 10000:
                alert('点赞成功！')
                getData()
                break
            case 10004:
                alert('今天的票数已经投完了哦！')
                break
            default:
                alert('用户信息验证失败，请重新进入本网站')
        }
    })
    .catch(err => {
        console.log(err)
        alert('请检查手机网络状态')
    })
}