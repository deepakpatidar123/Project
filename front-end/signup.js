// async function signup(e) {
//     try{
//         e.preventDefault();
//         console.log(e.target.email.value); 
        
//         const signupDetails = {
//             name: e.target.name.value,
//             email: e.target.email.value,
//             password: e.target.password.value
//         }
//         console.log(signupDetails)
//         const response = await axios.post('http://localhost:3000/signup',signupDetails)
//         if(response.status === 201){
//             window.location.href = "../Login/login.html" // change the page on successful login
//         }else {
//             throw new Error('failed to login')
//         }

//     }catch(err){
//         document.body.innerHTML += `<div style="color:red;">${err} <div>`;   
//      }
//     }
async function signup(event) {
    event.preventDefault();
      try{
         // console.log(event.target.email.value);
  
          const signupDetails = {
              name: event.target.name.value,
              email: event.target.email.value,
              password: event.target.password.value
          }
          console.log(signupDetails);
          const response = await axios.post('http://localhost:3000/user/signup', signupDetails)
          console.log(response.data)
            if(response.status ===201){
              window.location.href = "../Login/login.html"
            }else{
               throw new Error('Failed to login');
            }
      } catch(err){
          document.body.innerHTML += `<div style="color:red">${err} </div>`
      }
  }