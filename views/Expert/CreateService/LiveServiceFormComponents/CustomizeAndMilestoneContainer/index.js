import React, { useEffect, useState } from 'react'
import Container from './Container/Container'
import TimeSelector from '../TimeSelector/TimeSelector'
import DurationSelector from '../DurationSelector/DurationSelector'
import loremIpsum from '../../../../../utility/loremIpsum'
import { SecondaryButton } from '../../../../../components/Buttons/Index'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft: '-0.5rem',
  },
  textField: {
    backgroundColor: '#f3f4f8',
    padding: '0.5rem',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}))

const Index = ({ mileStoneData, setMileStoneData }) => {
  const [arr, setArr] = useState([0])
  const [activeMileStone, setActiveMilestone] = useState(false)
  const [activeCustomize, setActiveCustomize] = useState(false)
  const classes = useStyles()
  const [startTimeLocal, setStartTimeLocal] = useState(null)
  const [endTimeLocal, setendTimeLocal] = useState(null)

  const [formData, setFormData] = useState([
    {
      sessions_number: '',
      description: '',
      // title: '',
    },
  ])

  const addMileStone = () => {
    const newArr = [...arr]
    newArr.push(0)

    const newFormData = [...formData]

    newFormData.push({
      sessions_number: '',
      description: '',
      title: '',
    })

    setFormData(newFormData)
    setArr(newArr)
  }

  const sessionChangeHandler = (index, value) => {
    const newFormData = [...formData]
    newFormData[index].sessions_number = value
    newFormData[index].title = 'Milestone ' + (index + 1).toString()
    setFormData(newFormData)
    setMileStoneData(formData)
  }

  const descriptionChangeHandler = (index, value) => {
    const newFormData = [...formData]
    newFormData[index].description = value
    setFormData(newFormData)
    setMileStoneData(newFormData)
  }

  // const disableMilestone = () => {
  //   const newData = []
  //   const newArr = [0]
  //   setMileStoneData(newData)
  //   setArr(newArr)
  // }

  const toggleMileStone = () => {
    const previouslyActive = activeMileStone
    setActiveMilestone((prevState) => !prevState)

    const newData = []
    const newFormData = [
      {
        sessions_number: '',
        description: '',
        // title: '',
      },
    ]
    setFormData(newFormData)
    const newArr = [0]
    if (!previouslyActive) {
      setMileStoneData(newFormData[0])
    } else {
      setMileStoneData(newData)
    }
    setArr(newArr)
  }
  const toggleCustomize = () => {
    setActiveCustomize((prevState) => !prevState)
  }
  useEffect(() => {}, [])
  return (
    <div className="w-full text-lg font-medium">
      <Container
        active={activeCustomize}
        toggleActive={toggleCustomize}
        label={
          <div>
            <p className="">Customize</p>
            <p className="mt-4 font-semibold text-sm text-darkGrey">MONDAY</p>
            <div className="flex mt-4">
              <div className="w-6/12">
                {/* <TimeSelector /> */}
                <p className="mb-2 font-medium">Start Time</p>
                <form className={classes.container} noValidate>
                  <TextField
                    id="time"
                    onChange={(e) => setStartTimeLocal(e.target.value)}
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </form>
              </div>
              <div className="w-6/12 ml-4">
                <DurationSelector />
              </div>
            </div>
            <p className="mt-6 font-semibold text-sm text-darkGrey">THURSDAY</p>
            <div className="flex mt-4">
              <div className="w-6/12">
                {/* <TimeSelector /> */}
                <p className="mb-2 font-medium">End Time</p>
                <form className={classes.container} noValidate>
                  <TextField
                    id="time"
                    onChange={(e) => setendTimeLocal(e.target.value)}
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </form>
              </div>
              <div className="w-6/12 ml-4">
                <DurationSelector />
              </div>
            </div>
          </div>
        }
      />
      <p className="mt-6">Milestones</p>
      <p className="text-sm text-darkGrey mt-4 mb-6">
        You can break your service into multiple milestones and let the learners
        know what each milestone will be covering and in how many sessions.{' '}
      </p>
      {arr.map((val, index) => (
        <div key={index} className="mt-5">
          <Container
            key={index}
            active={activeMileStone}
            toggleActive={toggleMileStone}
            label={
              <div>
                <p className="">Enable Milestones</p>
                <p className="mt-4 font-semibold text-sm text-darkGrey">
                  MILESTONE {index + 1}
                </p>
                <div className="bg-lightGrey rounded-lg w-full p-4 mt-4">
                  <p className="text-lg">Sessions</p>
                  <input
                    value={formData[index].sessions_number}
                    className="p-2 text-lg mt-2 w-16"
                    placeholder="4"
                    onChange={(e) =>
                      sessionChangeHandler(index, e.target.value)
                    }
                  />
                  <p className="text-lg mt-4">Description</p>
                  <textarea
                    value={formData[index].description}
                    className="p-2 text-sm mt-2 w-full text-black"
                    rows="4"
                    placeholder={loremIpsum}
                    onChange={(e) =>
                      descriptionChangeHandler(index, e.target.value)
                    }
                  />
                </div>
                <div className="grid grid-cols-2 grid-rows-1 mt-4">
                  <div></div>
                  <div className="justify-self-end">
                    <SecondaryButton
                      label="Add another milestone"
                      clickHandler={addMileStone}
                      disabled={!activeMileStone}
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      ))}
    </div>
  )
}

export default Index
