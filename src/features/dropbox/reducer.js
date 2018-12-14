export default function dropboxReducer(state={}, action) {
  switch (action.type) {
    case 'DROPBOX_AUTH':
      return {
        ...state,
        token: action.payload
      }

    case 'PERSIST_PROVIDERS':
      return {
        ...state,
        providers: action.payload
      }

    case 'PERSIST_FILES':
      return {
        ...state,
        files: action.payload
      }

    default:
      return state
  }
}