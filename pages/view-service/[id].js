import React, { useEffect, useState } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ViewService from '../../views/Common/ViewService/ViewService'
import ExpertOverview from '../../views/Common/ViewService/ExpertOverview/ExpertOverview'
// import api from '../../api'
import { useRouter } from 'next/router'
import { fetchViewService } from '../../store/actions/appActions'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMilestone } from '../../services/settings'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const id = router.query.id
  const viewServiceData = useSelector((state) => state.app.viewServiceData)
  const [milestoneData, setMilestoneData] = useState(null)
  // console.log('Outside', id)

  useEffect(() => {
    // const id = router.query.id

    // console.log(router.query.id)
    console.log('ID', id)
    dispatch(fetchViewService(id))
    fetchMilestone(id)
      .then((res) => {
        // console.log(res)
        setMilestoneData(res)
      })
      .catch((e) => console.log(e))
  }, [id])

  if (!id) {
    return null
  }

  return (
    <LayoutProvider
      rightContent={
        <ExpertOverview
          providerPk={viewServiceData && viewServiceData.provider}
        />
      }
    >
      {viewServiceData && milestoneData && <ViewService response={viewServiceData} milestoneData={milestoneData} />}
    </LayoutProvider>
  )
}

export default Index
