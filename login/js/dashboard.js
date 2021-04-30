const logout =()=>{
    localStorage.clear()
    
}

document.getElementById('logout').addEventListener('click', logout)

document.getElementById('username').innerHTML=localStorage.getItem('username')

const fetchBills = async()=>{
    const token = localStorage.getItem('token')
    // $('#ftco-loader'
    document.getElementById('ftco-loader').classList.add('show')
    const response = await fetch('https://water-billing2020.herokuapp.com/dashboard/'+token,{
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    $('#ftco-loader').removeClass('show');
    const responseData = await response.json()
    console.log(responseData)

    if(response.ok){
        responseData.forEach((respo)=>{
            const date = new Date(respo.date).toUTCString()
            document.getElementById('table').innerHTML+=`
            <tr>
                <td>${respo.previous_reading} M3</td>
                <td>${respo.current_reading} M3</td>
                <td>${respo.consumption} M3</td>
                <td>${respo.cost} Frw</td>
                <td>${date}</td>
            </tr>
            `
        })

        
    }else{
        alert(responseData.error)
    }

}
fetchBills()
 
const login_button =  document.getElementById('login_bar')
const register_button = document.getElementById('register_bar')

if (localStorage.getItem('token')){
    login_button.style.display="none"
    register_button.style.display="none"
}else{
    login_button.style.display="block"
    register_button.style.display="block"

}