import React, { useEffect } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ViewService from '../../views/Common/ViewService/ViewService'
import ExpertOverview from '../../views/Common/ViewService/ExpertOverview/ExpertOverview'
import api from '../../api'
import { useRouter } from 'next/router'
import { fetchViewService } from '../../store/actions/appActions'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const id = router.query.id
  const viewServiceData = useSelector(state => state.app.viewServiceData)

  // console.log('Outside', id)

  useEffect(() => {
    // const id = router.query.id

    // console.log(router.query.id)
    console.log('ID', id)
    dispatch(fetchViewService(id))
  }, [id])

  if (!id) {
    return null
  }

  return (
    <LayoutProvider rightContent={<ExpertOverview />}>
      {viewServiceData && <ViewService response={viewServiceData} />}
    </LayoutProvider>
  )
}

export default Index
