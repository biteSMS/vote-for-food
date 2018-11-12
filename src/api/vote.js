import axios from 'axios'
import Store from '../mobx/store'
import getVote from './getVote'

export default function(id) {
     return axios({
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
        var status = res.data.status
        switch (status)
        {
            case 10000:
                Store.changeVoteStatus(1)
                alert('点赞成功！')
                getVote()
                break
            case 10004:
                Store.changeVoteStatus(0)
                alert('今天的票数已经投完了哦！')
                break
            default:
                Store.changeVoteStatus(0)
                alert('用户信息验证失败，请重新进入本网站')
        }
    })
    .catch(err => {
        console.log(err)
        Store.changeVoteStatus(0)
        alert('请检查手机网络状态')
    })
}