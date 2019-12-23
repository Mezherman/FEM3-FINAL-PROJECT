function getAllCards () {
  return fetch('./items.json')
    .then((response) => response.json())
}

export default getAllCards;