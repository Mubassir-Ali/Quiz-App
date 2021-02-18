let swUrl=`${process.env.PUBLIC_URL}/sw.js`

export default function swDev(){
    navigator.serviceWorker.register(swUrl)
    .then((response)=>{
        console.warn('response',response);
    })
}