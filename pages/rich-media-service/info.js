import React, { useEffect, useState } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import ViewService from '../../views/Common/ViewService/ViewService'
import { richService as navItems } from '../../constants/nav_items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchViewService } from '../../store/actions/appActions'
import { fetchMilestone } from '../../services/settings'
import { useRouter } from 'next/router'

const Settings = () => {
  const viewServiceData = useSelector((state) => state.app.viewServiceData)
  const router = useRouter()
  const dispatch = useDispatch()
  const [milestoneData, setMilestoneData] = useState(null)
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)
  // const id = router.query.id
  const id = 113

  useEffect(() => {
    if (token && currentProfileId) {
      dispatch(fetchViewService(id, token, currentProfileId))
      fetchMilestone(id, token, currentProfileId)
        .then((res) => {
          setMilestoneData(res)
        })
        .catch((e) => console.log(e))
    }
  }, [token, currentProfileId, id])

  return (
    <LayoutProvider
      alternate
      rightContent={
        <InnerNav navItems={navItems} destructiveAction="Unsubscribe" />
      }
    >
      {/* {console.log('Logging view service from Info.js', <ViewService />)} */}
      {viewServiceData && milestoneData && (
        <ViewService response={viewServiceData} milestoneData={milestoneData} />
      )}
    </LayoutProvider>
  )
}

export default Settings
