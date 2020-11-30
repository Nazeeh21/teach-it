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
    // console.log('HandleDayCHange', selectedDay)
    // console.log('[day Selected in DatePicker]', selectedDay.toISOString())
    this.setState({
      selectedDay: selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    })

    // console.log('[day Selected]', this.state.selectedDay)
  }

  render() {
    const { selectedDay } = this.state
    this.props.handleDayChange(selectedDay)

    return (
      <div>
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
