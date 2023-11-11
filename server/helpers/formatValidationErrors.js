function formatValidationErrors(errors) {
  const formatedErrors = errors
    .formatWith((error) => {
      return { error: error.msg, field: error.path };
    })
    .mapped();
  return formatedErrors;
}

module.exports = formatValidationErrors;
