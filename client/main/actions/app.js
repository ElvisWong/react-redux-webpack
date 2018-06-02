import {
  APP_POP_SNACK_BAR_MESSAGE,
  APP_PUSH_SNACK_BAR_MESSAGE,
  APP_SET_IS_SNACK_BAR_OPEN,
  APP_SET_USER
} from '../actionTypes'
import { getUserInfo } from '../services/api'
import { updateIntl } from 'react-intl-redux'
import zhHant from '../locales/zhHant'
import en from '../locales/en'
import { DEFAULT_LOCALE } from '../configs/app'

const localeMessages = {
  'zh-Hant': zhHant,
  'en': en
}

export function loadAppUser () {
  return async (dispatch, getState) => {
    const response = await getUserInfo()
    dispatch({type: APP_SET_USER, payload: {user: response.user}})
  }
}

function processSnackBarQueue () {
  return (dispatch, getState) => {
    const {app} = getState()
    if (app.snackBarMessages.length > 0) {
      dispatch({type: APP_POP_SNACK_BAR_MESSAGE})
      dispatch({type: APP_SET_IS_SNACK_BAR_OPEN, payload: {isSnackBarOpen: true}})
    }
  }
}

export function openSnackBar (message) {
  return (dispatch, getState) => {
    dispatch({type: APP_PUSH_SNACK_BAR_MESSAGE, payload: {message}})

    const {app} = getState()

    if (app.isSnackBarOpen) {
      dispatch({type: APP_SET_IS_SNACK_BAR_OPEN, payload: {isSnackBarOpen: false}})
    } else {
      dispatch(processSnackBarQueue())
    }
  }
}

export function onSnackBarClose () {
  return {
    type: APP_SET_IS_SNACK_BAR_OPEN,
    payload: {
      isSnackBarOpen: false
    }
  }
}

export function onSnackBarExited () {
  return (dispatch) => {
    dispatch(processSnackBarQueue())
  }
}

export function setLocale (locale = DEFAULT_LOCALE) {
  return (dispatch, getState) => {
    // todo: change messages when language change
    dispatch(updateIntl({
      locale: locale,
      messages: localeMessages[locale]
    }))
  }
}