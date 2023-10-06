import React from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native"
import styles from "./style"
import {useAuth} from "../../contexts/auth";

const FormLogin: React.FC= ()=>{
  const {signed,user, signIn}= useAuth()

  console.log(signed)

  console.log(user)

   function handleSignIn(){
    signIn();
  }

  return (
    <View style={styles.form}>
      <Text style={styles.formLabel}>Email</Text>
      <TextInput style={styles.input} placeholder="example@email.com" />

      <Text style={styles.formLabel}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha aqui"
        secureTextEntry
      />

      <TouchableOpacity style={styles.buttonCalculator} onPress={handleSignIn}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.rodape}>Criar conta</Text>
    </View>
  )}

export default FormLogin