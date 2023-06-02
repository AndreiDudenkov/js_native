const server = {
    getData(num) {
        return new Promise((resolve, reject) => {
           num === 1 ?reject('fail') : resolve('success')

        })
    }
}

server.getData(2)
    .then(() => {
        console.log('then1')
    })
    .then(() => {
        console.log('then2')
    })
    .then(() => {
        console.log('then3')
    })
    .catch(() => {
        console.log('error1')
        return a
    })
    .then(() => {
        console.log('then4')
        return a
    })
    .catch(() => {
        console.log('error2')
    })
    .finally(()=>{
        console.log('final')
    })

