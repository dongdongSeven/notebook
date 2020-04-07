import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
});

export const addItemAction = () => ({
    type: ADD_ITEM
});

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
            .then(data => {
                const action = getListAction(data.data.data.list)
                console.log(data.data.data)
                dispatch(action)
            })
            .catch(e => console.log(e))
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})