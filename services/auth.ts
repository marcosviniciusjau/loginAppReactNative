interface Response{
  user:{
    name:string;
    email:string;
    password:string;
  }
}

export function signIn():Promise<Response>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve({
        user:{
          name:'Marcos',
          email:'marcos@teste.com',
          password:'teste123'
        }
      })
    },1000)
  })
}