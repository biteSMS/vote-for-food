import {observable, action} from 'mobx'

class Store {
    @observable jwt = null
    @observable rank = null
    @observable canteens = null
    @observable currentPage = 'Index'
    @observable currentCanteen = null
    @observable currentDish = null
    @observable isShowPopUp = false

    @action showCanteen(isShow) {
        if (isShow) this.currentPage = 'Canteen'
        if (!isShow) this.currentPage = 'Index'
    }
    @action addJwt(jwt) {
        this.jwt = jwt
    }
    @action addData(data) {
        this.rank = data.rank
        this.canteens = data.canteens
        console.log(data.canteens.延生食堂)
    }
    @action changeCanteen(canteen) {
        this.currentCanteen = canteen
    }
    @action showPopUp(isShow) {
        this.isShowPopUp = isShow
    }
    @action changeDish(dish) {
        this.currentDish = dish
    }
}

export default new Store()