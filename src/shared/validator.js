class Validator {
  validateInputs(inputData) {
    let errorMsg = "";
    if (!inputData.id) {
      errorMsg += "Please enter employee id.\n";
    }
    if (!inputData.first_name) {
      errorMsg += "Please enter first_name of employee.\n";
    }
    if (!inputData.last_name) {
      errorMsg += "Please enter last_name of employee.\n";
    }
    if (errorMsg.length === 0) {
      return true;
    } else {
      alert(errorMsg);
      return false;
    }
  }
}
export default Validator;
