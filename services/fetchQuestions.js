import React from 'react'
import api from '../api'

export const fetchQuestions = async (serviceId) => {
  try {
    const res = await api.get(`/service/${serviceId}/questions/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
      },
    })

    console.log('fetchQuestions', res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}
