import React from 'react'
import api from '../api'

export const fetchQuestions = async (serviceId, token, currentProfileId) => {
  try {
    const res = await api.get(`/service/${serviceId}/questions/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    console.log('fetchQuestions', res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const fetchQuestionCreator = async (
  createrId,
  token,
  currentProfileId
) => {
  try {
    const res = await api.get(`/seeker/${createrId}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })
    console.log('fetchQuestionCreator', res.data.name)
    return res.data
  } catch (e) {
    console.log('fetchQuestionCreator', e)
  }
}
