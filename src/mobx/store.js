import {observable, action} from 'mobx'

class Store {
    @observable currentPage = 'Index'
    @observable currentCanteen = null
    @observable currentDish = null

    @action showCanteen(isShow) {
        if (isShow) this.currentPage = 'Canteen'
        if (!isShow) this.currentPage = 'Index'
    }
}

export default new Store()