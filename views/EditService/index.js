import { useRouter } from 'next/router'
import React from 'react'

const EditService = () => {
  const router = useRouter()
  console.log('Query', router.query.id)
  return <div>Edit Service</div>
}

export default EditService
