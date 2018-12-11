export default function dropboxReducer(state={}, action) {
  switch (action.type) {
    case 'DROPBOX_AUTH':
      return {
        token: action.payload
      }

    case 'SAVE_PROVIDERS':
      return {
        providers: action.payload
      }

    default:
      return state
  }
}