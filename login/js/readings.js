// functions
const make_bill =async()=>{
    const readings = document.getElementById('readings').value
    if(readings>0){
        const token = localStorage.getItem('token')
        const response = await fetch('https://water-billing2020.herokuapp.com/make-bill/'+token,{
            method:"POST",
            body:JSON.stringify({
                volume:readings
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })

        const responseData = await response.json()
        console.log(responseData)
        if(response.ok){
            location.href="../../dashboard.html"
        }else{
            alert(responseData.error)
        }
    }
}


// events

document.getElementById('submit').addEventListener('click',make_bill)