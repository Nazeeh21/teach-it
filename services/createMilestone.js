import api from '../api'

export const createMilestone = async (milestoneData) => {
  try {
    const res = await api.post(
      `service/1/milestone/`,
      {
        milestoneData,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile'),
        },
      }
    )

    console.log('Create Milestone', res.data)
  } catch (e) {
    console.log(e)
  }
}
