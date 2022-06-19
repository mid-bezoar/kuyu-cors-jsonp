// CORS 请求
// const request = new XMLHttpRequest()
// request.open('GET', 'http://qq.com:8888/frank.json')
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(JSON.parse(request.responseText))
//   }
// }
// request.send()

// function ajax(method, url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.open(method, url)
//     request.onreadystatechange = () => {
//       if (request.readyState === 4 && request.status === 200) {
//         resolve(request.response)
//       } else {
//         reject(request)
//       }
//     }
//     request.send()
//   })
// }
// ajax('GET', 'http://qq.com:8888/frank.js').then((data) => {
//   console.log('这是 AJAX')
//   console.log(data, '---->data')
// })

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = 'JSONPCallbackName' + Math.random()
    window[random] = (data) => {
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = url + '?callback=' + random
    script.onload = () => {
      script.remove()
    }
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script)
  })
}

jsonp('http://qq.com:8888/frank.js').then((data) => {
  console.log('这是 JSONP')
  console.log(data, '---->data')
})

// function jsonp(url) {
//   return new Promise((resolve, reject) => {
//     const random = 'frankJSONPCallbackName' + Math.random()
//     window[random] = (data) => {
//       resolve(data)
//     }
//     const script = document.createElement('script')
//     script.src = `${url}?callback=${random}`
//     script.onload = () => {
//       script.remove()
//     }
//     script.onerror = () => {
//       reject()
//     }
//     document.body.appendChild(script)
//   })
// }

// jsonp('http://qq.com:8888/frank.js').then((data) => {
//   console.log(data)
// })
