import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./style"
import { useAuth } from "../../contexts/auth"

const FormLogin: React.FC = () => {
  const { signIn } = useAuth()
  const [email_input, setEmailInput] = useState("")
  const [password_input, setPasswordInput] = useState("")

  async function handleSignIn() {
    try {
      const response = { email: "marcos@teste.com", password: "teste123" }

      if (
        response.email === email_input &&
        response.password === password_input
      ) {
        signIn()
      } else {
        alert("Credenciais inválidas")
      }
    } catch (error) {
      console.error("Erro durante o login:", error)
      alert("Ocorreu um erro durante o login.")
    }
  }

  return (
    <View style={styles.form}>
      <Text style={styles.formLabel}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@email.com"
        value={email_input}
        onChangeText={(text) => setEmailInput(text)}
      />

      <Text style={styles.formLabel}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha aqui"
        secureTextEntry
        value={password_input}
        onChangeText={(text) => setPasswordInput(text)}
      />

      <TouchableOpacity style={styles.buttonCalculator} onPress={handleSignIn}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.rodape}>Criar conta</Text>
    </View>
  )
}

export default FormLogin
