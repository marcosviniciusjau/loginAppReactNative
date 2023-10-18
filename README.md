# Readme - Formulário de Login em React Native

Este repositório abriga um componente React Native para formulário de login. É uma parte do nosso projeto maior e desempenha um papel fundamental na autenticação de usuários. Aqui, oferecemos uma breve visão técnica do componente e como ele funciona.

## Descrição Técnica

Este formulário de login é construído com base na biblioteca React Native e utiliza várias tecnologias para fornecer uma experiência de login segura e eficiente. Abaixo estão as principais características técnicas:

- **React Native**: Utilizamos o React Native como framework principal para desenvolver a interface do usuário e a lógica do aplicativo.

- **useState**: O hook `useState` é empregado para gerenciar o estado do componente, tornando-o reativo às ações do usuário.

- **TextInput**: O componente `TextInput` do React Native é usado para coletar o email e a senha do usuário.

- **TouchableOpacity**: O componente `TouchableOpacity` é utilizado para criar o botão "Entrar," proporcionando uma resposta tátil ao toque do usuário.

- **Context API**: Fazemos uso do Context API para gerenciar a autenticação do usuário, permitindo que o componente saiba quando o usuário está autenticado.

- **auth Service**: O serviço `auth` é uma parte crítica do projeto e lida com a lógica de autenticação do usuário.

## Funcionalidades

Este formulário de login permite aos usuários inserirem seu email e senha. Ele realiza as seguintes validações:

- Verifica se o email e a senha inseridos correspondem às credenciais armazenadas no serviço de autenticação.
- Exibe uma mensagem de erro se as credenciais estiverem incorretas.
- Informa ao usuário para preencher ambos os campos se eles estiverem vazios.
- Caso todas as validações sejam aprovadas, permite que o usuário entre com sucesso.

# Esse é um vídeo demonstrativo:


https://github.com/marcosviniciusjau/loginAppReactNative/assets/82465988/43d832d0-41a6-45b2-b918-3f0556ebce08

