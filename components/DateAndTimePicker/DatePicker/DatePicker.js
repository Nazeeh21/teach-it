import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.handleDayChange = this.handleDayChange.bind(this)
    this.state = {
      selectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
      monthNumber: null,
    }
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput()
    console.log('HandleDayCHange', selectedDay)
    let monthNumber = null
    switch (selectedDay.toString().slice(4, 7)) {
      case 'Jan':
        monthNumber = '01'
        break
      case 'Feb':
        monthNumber = '02'
        break
      case 'Mar':
        monthNumber = '03'
        break
      case 'April':
        monthNumber = '04'
        break
      case 'May':
        monthNumber = '05'
        break
      case 'Jun':
        monthNumber = '06'
        break
      case 'Jul':
        monthNumber = '07'
        break
      case 'Aug':
        monthNumber = '08'
        break
      case 'Sep':
        monthNumber = '09'
        break
      case 'Oct':
        monthNumber = '10'
        break
      case 'Nov':
        monthNumber = '11'
        break
      case 'Dec':
        monthNumber = '12'
        break
      default:
        break
    }

    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
      monthNumber: monthNumber,
    })

    // console.log('[day Selected]', this.state.selectedDay)
  }

  render() {
    const { selectedDay, monthNumber } = this.state
    console.log('[day Selected]', selectedDay)
    this.props.handleDayChange(selectedDay + ' ' + monthNumber)

    return (
      <div>
        {/* <p>
          {isEmpty && 'Please type or pick a day'}
          {!isEmpty && !selectedDay && 'This day is invalid'}
          {selectedDay && isDisabled && 'This day is disabled'}
          {selectedDay &&
            !isDisabled &&
            `You chose ${selectedDay.toLocaleDateString()}`}
        </p> */}
        <DayPickerInput
          value={selectedDay}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
    )
  }
}
