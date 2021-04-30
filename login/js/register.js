

const register = async()=>{
const first_name = document.getElementById('fname').value
const last_name = document.getElementById('lname').value
const meter_number = checkPassword(document.getElementById('pass').value, document.getElementById('re_pass').value)
    const response = await fetch('https://water-billing2020.herokuapp.com/register/', {
		method: 'POST',
		body: JSON.stringify({
			first_name: first_name,
			last_name: last_name,
			meter_number: meter_number,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

    const responseData = await response.json()
    console.log(responseData)
    if(response.ok){
        localStorage.setItem('token', responseData.user.token)
        localStorage.setItem('username', responseData.user.username)
        location.href="../../dashboard.html"

    }else{
        alert("Provide correct credentials")
    }

}

const checkPassword = (first, last) =>{
    if(first===last){
        return first
    }else{

        alert("The two Password numbers are not the same please")
        return
    }
}



document.getElementById('signup').addEventListener('click', register)