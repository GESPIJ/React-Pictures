import axios from "axios"

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID FInPo5IZkbYlvc5asrTuWatqHd3J9uOOzdQ0XXXQbmc'
    }
})
