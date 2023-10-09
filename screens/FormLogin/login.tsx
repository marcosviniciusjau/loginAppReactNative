import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./style"
import { useAuth } from "../../contexts/auth"
import * as auth from "../../services/auth"

const FormLogin: React.FC = () => {
  const { signIn } = useAuth()
  const [email_input, setEmailInput] = useState("")
  const [password_input, setPasswordInput] = useState("")
  const [errorMessage,setErrorMessage]= useState(null)
  async function handleSignIn() {
    try {
      const response = await auth.signIn()
      if (
        response.user.email === email_input &&
        response.user.password === password_input
      ) {
        signIn()
      } if(email_input==='' && password_input === ''){
        setErrorMessage("Campos obrigatórios!")
      }
      else {
        alert("Email ou senha incorretos")
      }
    } catch (error) {
      alert("Ocorreu um erro durante o login.")
    }
  }

  return (
    <View style={styles.form}>
      <Text style={styles.formLabel}>Email</Text>

      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="example@email.com"
        value={email_input}
      />

      <Text style={styles.formLabel}>Senha</Text>

      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha aqui"
        secureTextEntry
        value={password_input}
      />

      <TouchableOpacity style={styles.buttonCalculator} onPress={handleSignIn}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormLogin
