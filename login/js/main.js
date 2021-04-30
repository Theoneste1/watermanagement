
//  functions
const login = async()=>{
    const username = document.getElementById('your_name').value
    const password = document.getElementById('your_pass').value
    //console.log(username, password)
    const response = await fetch('https://water-billing2020.herokuapp.com/login/',{
        method:"POST",
        body:JSON.stringify({
            user_name :username,
            password :password
        }),
        headers:{
            "Content-Type": "application/json",
        },

    });
//console.log(response);
    const responseData = await response.json()
    //console.log(responseData)

    if(response.ok){
        // console.log(responseData)
        localStorage.setItem('token', responseData.user.token)
        localStorage.setItem('username', responseData.user.username)
        location.href="../../dashboard.html"
    }else{
        alert("Un Authenticated")
    }
}


// form data



// events listeners
document.getElementById('signin').addEventListener('click',()=>{ login()})
