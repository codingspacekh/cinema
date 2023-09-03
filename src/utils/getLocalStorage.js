function setLocalData(item, value) {
  localStorage.setItem(item, value)
}

function getLocalData(item) {
  return localStorage.getItem(item)
}


export {
  setLocalData,
  getLocalData
}