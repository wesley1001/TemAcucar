export default UserValidators = {
  first_name: {
    title: 'Nome',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  last_name: {
    title: 'Sobrenome',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  email: {
    title: 'Email',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    },
    {
      validator: 'isEmail',
      message: '{TITLE} deve ser válido',
    }]
  },
  password: {
    title: 'Senha',
    validate: [{
      validator: 'isLength',
      arguments: [8, 255],
      message: 'Senha muito curta',
    }]
  },
  reset_password_token: {
    title: 'Código enviado',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  errorMessage: (error) => {
    switch (error.id) {
      case 'not_found':
        return 'Usuário não encontrado.'
      case 'email_is_already_taken':
        return 'Email já cadastrado para outro usuário.'
      case 'unauthorized':
        return 'Código inválido. Confira seu email ;)'
      default:
        return 'Oops! Ocorreu um erro. Tente novamente.'
    }
  }
}
