export const checkFormValidation = (state, formName) => {
    const formState = state[formName];
    const errorsArray = Object.values(formState.errors);
    
    const isErrorExist = errorsArray.some(item => !item.isRequired && item.message);
    console.log(isErrorExist);
    const requiredItems = formState.errors.filter(item => item.isRequired);
    const isRequiredFieldsFilled = '';
    
    const isFormValid = formState;
    
    return {
        ...state,
        [formName]: {
            ...formState,
            isFormValid
        }
    }
}
