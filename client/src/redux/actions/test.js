export default function changeLogStatus(status) {
  return {
    type: 'CHANGE_LOG_STATUS_SUCCESS',
    payload: status
  }
}