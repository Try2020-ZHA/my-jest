import request from '../utils/index'

const userUrl='/users'

export function getUsers(){
    return request({
        url:`${userUrl}`,
        method:'get'
    })
}