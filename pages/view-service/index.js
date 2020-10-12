import React, { useEffect } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ViewService from '../../views/Common/ViewService/ViewService'
import ExpertOverview from '../../views/Common/ViewService/ExpertOverview/ExpertOverview'
import api from '../../api'

const Index = () => {
  let viewService = null
  let response
  useEffect(async () => {
    try {
      const res = await api.get('/service/1/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      console.log('VIEW_SERVICE' , res.data)
      response = res.data
      viewService= <ViewService response={res.data} />
    } catch (error) {
      console.log(error)
    }

  }, [])
  return (
    <LayoutProvider rightContent={<ExpertOverview />}>
      {viewService}
      {/* <ViewService response={response} /> */}
    </LayoutProvider>
  )
}

export default Index
