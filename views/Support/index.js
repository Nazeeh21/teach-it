import React, { useEffect, useState } from 'react'
import api from '../../api'
import { PrimaryButton } from '../../components/Buttons/Index'
import Pills3 from '../../components/Misc/3Pills/3Pills'
import Question from '../Learner/RichMediaService/Question'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Support = () => {
  const router = useRouter()

  const [filter, setFilter] = useState('open')
  const [tickets, setTickets] = useState([])
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const fetchTickets = async () => {
    try {
      const res = await api.get('support/', {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      })

      console.log('Fetched support tickets', res.data)

      return res.data
    } catch (e) {
      console.log('Error while fetching support tickets', e)
      return null
    }
  }

  useEffect(() => {
    if (token && currentProfileId) {
      fetchTickets()
        .then((res) => setTickets(res))
        .catch((e) => console.log(e))
    }
  }, [token, currentProfileId])

  return (
    <div className="w-full">
      <p className="text-2xl font-medium">Support</p>
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:girid-rows-1">
        <div className="hidden lg:block" />
        <Pills3
          activeLabel={filter}
          setLabel={setFilter}
          color="white"
          width="w-full"
          label1="Open"
          label2="Closed"
          label3="Escalated"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-6 mt-6">
        {/* <Question question={loremIpsum.substring(100)} />
        <Question question={loremIpsum.substring(100)} />
        <Question question={loremIpsum.substring(100)} /> */}
        {tickets
          .filter((ticket) => ticket.status.toLowerCase() === filter)
          .map((ticket) => (
            <Question
              key={ticket.chat_id}
              question={ticket.title}
              time={ticket.created_at}
              clickHandler={() => router.push(`/support/${ticket.chat_id}`)}
            />
          ))}
      </div>
      <div className="mb-20 md:mb-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center mt-5">
        <div className="w-full md:w-11/12">
          <PrimaryButton label="New ticket" />
        </div>
      </div>
    </div>
  )
}

export default Support
