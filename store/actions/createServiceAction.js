import { UPDATE_TITLE, UPDATE_DESCRIPTION } from "../actionTypes"

export const updateTitle = title => {
  return {
    type: UPDATE_TITLE,
    value: title
  }
}

export const updateDescription = description => {
  return {
    type: UPDATE_DESCRIPTION,
    value: description
  }
}