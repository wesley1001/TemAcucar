export default DemandValidators = {
  name: {
    title: 'O que você precisa?',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  description: {
    title: 'Para que você vai usar?',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  errorMessage: (error) => {
    switch (error.id) {
      default:
        return 'Oops! Ocorreu um erro ao acessar nosso servidor. Por favor, tente novamente.'
    }
  }
}
