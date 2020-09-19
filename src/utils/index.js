// 延迟函数
const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
const getData = status => new Promise((resolve, reject) => {
    status ? resolve('done') : reject('fail')
})
const getRes = async data => {
    try {
        const res = await getData(data)
        const timestamp = new Date().getTime()
        await delay(1000)
        console.log(res, new Date().getTime() - timestamp)
    } catch (err) {
        console.log(err)
    }
}

// 分割指定长度的元素数组
const listChunk = (list, size = 1, cacheList = []) => {
    const tmp = [...list]
    if (tmp.length <= 0) {
        return cacheList
    }
    while (tmp.length) {
        cacheList.push(tmp.splice(0, size))
    }
    return cacheList
}

export default {
    getRes,
    listChunk
}

