import { SAVEDATA } from '../actionTypes'

export const continueHandler = ( formData ) => {
  return dispatch => {
  
  console.log(formData)
  // dispatch(saveData(formData[0]))
  formData.map(data => dispatch(saveData(data)))
}

}

const saveData = (data) => {
  console.log('[SAVEDATA]', data)
  return {
    type: SAVEDATA,
    formData: data
  }
}