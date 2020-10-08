import { SAVEDATA } from '../actionTypes'
import api from '../../api'

export const continueHandler = (formData) => {
  return (dispatch) => {
    console.log(formData)
    // dispatch(saveData(formData[0]))
    formData.map( async (data) => {
      try {
        const res = await api.put(
          '/user/',
          { ...formData[0], primary_type: 'seeker' },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            },
          }
        )
      } catch (error) {
        console.log(error)
      }
      dispatch(saveData(data))   
    })
  } 
}

const saveData = (data) => {
  console.log('[SAVEDATA]', data)
  return {
    type: SAVEDATA,
    formData: data,
  }
}
// dispatch(saveData(data))