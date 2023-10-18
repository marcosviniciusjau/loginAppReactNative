interface Response {
  user: {
    name: string
    email: string
    password: string
  }

  token: string
}

export function signIn():Promise<Response>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve({
        token:
          "esrEfckfinIBYJI7vEpoEpDz6NdNtvjgMfo1YDbZBeRFptnTFtGGKnjNSzz6NC3v",
          
        user: {
          name: "Marcos",
          email: "marcos@teste.com",
          password: "teste123",
        },
      })
    })
  })
}