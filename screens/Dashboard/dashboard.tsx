import React, { useState, useContext } from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import { signIn } from "../../services/auth"
import styles from "./style"
import {useAuth} from "../../contexts/auth"

const Dashboard: React.FC = () => {
const {user, signOut}= useAuth()
  function handleSignOut() {
    signOut()
  }

  return (
    <View style={styles.form}>
      <Text>Bem vindo {user?.name}!</Text>
      <TouchableOpacity style={styles.buttonCalculator} onPress={handleSignOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard
