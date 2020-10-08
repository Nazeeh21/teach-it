import {  SAVEDATA } from '../actionTypes/index'

const initialState = {
  profileData: []
}

const saveHandler = (state, formData) => {
  console.log('state', state.profileData)
  console.log('formData', formData)
  const newProfileData = [...state.profileData]

  newProfileData.push(formData)
  return {
    profileData: newProfileData
  }
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case SAVEDATA:
      return saveHandler(state, action.formData)
    default:
      return state
  }
}

export default reducer