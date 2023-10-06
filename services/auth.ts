interface Response{
  user:{
    name:string;
    email:string;
  }
}

export function signIn():Promise<Response>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve({
        user:{
          name:'Marcos',
          email:'marcos@teste.com',
        }
      })
    },1000)
  })
}