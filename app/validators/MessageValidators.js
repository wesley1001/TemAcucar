export default DemandValidators = {
  text: {
    title: 'Texto',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  errorMessage: (error) => {
    switch (error.id) {
      default:
        return 'Oops! Ocorreu um erro. Tente novamente.'
    }
  }
}
