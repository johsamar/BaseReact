import axios from 'axios'

    const checkAuthentication = async(user, password) => {

        let URL = "http://localhost:8081/api/auth/login";

        const userCheck =  axios.post(URL,{
            "user": `${user}`,
            "password": `${password}`
        }).then( response => 
            response.object
        ).catch(e => console.log(e))

        const authenticatedUser = userCheck === null ? null : {
            token : userCheck.token,
            firstName : userCheck.firstName,
            secondName : userCheck.secondName,
            email: userCheck.email
        };

        return authenticatedUser
    }  
    
    export {checkAuthentication};



