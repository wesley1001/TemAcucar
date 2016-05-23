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
    title: 'E-mail',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    },
    {
      validator: 'isEmail',
      message: 'Complete seu e-mail',
    }]
  },
  password: {
    title: 'Senha',
    validate: [{
      validator: 'isLength',
      arguments: [8, 255],
      message: 'Crie uma senha maior',
    }]
  },
  reset_password_token: {
    title: 'Código enviado',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  address_thoroughfare: {
    title: 'Logradouro',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  address_sub_thoroughfare: {
    title: 'Número',
    validate: [{
      validator: () => true,
    }]
  },
  address_complement: {
    title: 'Complemento',
    validate: [{
      validator: () => true,
    }]
  },
  address_sub_locality: {
    title: 'Complemento',
    validate: [{
      validator: () => true,
    }]
  },
  address_locality: {
    title: 'Cidade',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  address_administrative_area: {
    title: 'Estado',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  address_country: {
    title: 'País',
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
        return 'E-mail já cadastrado para outro usuário.'
      case 'unauthorized':
        return 'Código inválido. Confira seu e-mail ;)'
      default:
        return 'Oops! Ocorreu um erro ao acessar nosso servidor. Por favor, tente novamente.'
    }
  }
}
