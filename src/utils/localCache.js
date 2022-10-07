class localCache {
    getCache(keyname) {
        return JSON.parse(localStorage.getItem(keyname))
    }
    setCache(keyname, value) {
        localStorage.setItem(keyname, JSON.stringify(value))
    }
    removeCache(keyname) {
        localStorage.removeItem(keyname)
    }
    clear() {
        localStorage.clear()
    }
    getLength() {
        return localStorage.length
    }

}
export default new localCache()