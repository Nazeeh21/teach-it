import React, { useEffect, useState } from 'react'
import Pills3 from '../../../components/Misc/3Pills/3Pills'
import Pills2 from '../../../components/Misc/3Pills/2Pills'
import DatePicker from '../../Expert/CreateService/LiveServiceFormComponents/DateSelector/DatePicker/DatePicker'
import { PrimaryButton } from '../../../components/Buttons/Index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../../../store/actions/appActions'

const Index = () => {
  const dispatch = useDispatch()

  const initialFetch = useSelector(
    (state) => state.app.initialSearchResultFetched
  )

  const [activeTypeLabel, setTypeLabel] = useState('live')
  const [activeTimingLabel, setTimingLabel] = useState('anytime')
  const [maxCost, setMaxCost] = useState('')
  const [minRating, setMinRating] = useState(2)
  const [expertType, setExperType] = useState('ANY')
  const [language, setLanguage] = useState('')
  const [duration, setDuration] = useState('00:00:00')
  const [expertLocation, setExpertLocation] = useState('')

  // Issue with the format
  const [date, setDate] = useState()

  useEffect(() => {
    console.log('Sending the request')
    // const convertedDate = new Date(date)
    if (!initialFetch) {
      dispatch(
        fetchSearchResults({
          type: activeTypeLabel,
          max_cost: maxCost,
          // rating: minRating,
          provider_type: expertType,
          language,
          min_duration: duration,
          max_duration: duration,
          provider_location: expertLocation,
          // starts_after: convertedDate,
        })
      )
    }
  }, [
    activeTypeLabel,
    activeTimingLabel,
    maxCost,
    minRating,
    expertType,
    language,
    duration,
    expertLocation,
    date,
  ])

  return (
    <div className="w-full rounded-lg bg-white px-3 py-2">
      <p className="mb-2 text-lg font-medium">Type of Service</p>
      <Pills2
        activeLabel={activeTypeLabel}
        setLabel={setTypeLabel}
        width="full"
        color="white"
        label1="live"
        label2="rich"
      />

      <p className="text-lg font-medium mt-6">Maximum Cost</p>
      <input
        className="mt-2 w-full bg-lightGrey rounded-md h-10 p-2"
        type="number"
        value={maxCost}
        onChange={(e) => setMaxCost(e.target.value)}
      />

      <p className="text-lg font-medium mt-6">Duration</p>
      <select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey"
      >
        <option value="00:00:00" label="Any" />
        <option value="00:02:00" label="2 hours" />
        <option value="00:03:00" label="3 hours" />
        <option value="00:04:00" label="4 hours" />
        <option value="00:05:00" label="5 hours" />
      </select>

      <p className="text-lg font-medium mt-6">Categories</p>
      <a style={{ color: '#4968FF' }} className="mt-4 text-sm" href="/">
        Add categories
      </a>

      <p className="text-lg font-medium mt-6">Rating</p>
      <select
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        className="h-10 mt-2 pl-3 w-full rounded-md bg-lightGrey"
      >
        <option value="2" label="2 & above" />
        <option value="3" label="3 & above" />
        <option value="4" label="4 & above" />
        <option value="5" label="5 & above" />
      </select>

      <p className="text-lg font-medium mt-6 mb-2">Timings</p>
      <Pills3
        activeLabel={activeTimingLabel}
        setLabel={setTimingLabel}
        width="full"
        color="white"
        label1="Anytime"
        label2="First half"
        label3="Second half"
      />

      <p className="text-lg font-medium mt-6 mb-2">Date</p>
      <div className="-ml-2">
        <DatePicker
          value={date}
          changeHandler={(val) => {
            setDate(val)
          }}
        />
      </div>

      <p className="text-lg font-medium mt-6">Service Language</p>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey"
      >
        <option value="" label="Any" />
        <option value="en" label="English" />
        <option value="hi" label="Hindi" />
        <option value="ru" label="Russian" />
      </select>

      <p className="text-lg font-medium mt-6">Provider Location</p>
      <select
        value={expertLocation}
        onChange={(e) => setExpertLocation(e.target.value)}
        className="h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey"
      >
        <option value="" label="Any" />
        <option value="india" label="India" />
        <option value="germany" label="Germany" />
        <option value="USA" label="USA" />
      </select>

      <p className="text-lg font-medium mt-6">Type of Experts</p>
      <select
        value={expertType}
        onChange={(e) => setExperType(e.target.value)}
        className="h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey"
      >
        <option value="PRO" label="Pro only" />
        <option value="NON_PRO" label="Non-pro only" />
        <option value="ANY" label="Any" />
      </select>

      <div className="mt-8">
        <PrimaryButton
          clickHandler={() => window.scrollTo(0, 0)}
          label="Search"
        />
      </div>
    </div>
  )
}

export default Index
