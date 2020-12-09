import axios from 'axios'


const instance = axios.create({
    baseURL:'https://react-shop-d849c-default-rtdb.firebaseio.com/'
})

export default instance