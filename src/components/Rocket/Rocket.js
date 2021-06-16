import './Rocket.scss'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const getStars = () => {
  let positions = []
  for (let starNumber = 100; starNumber > 0; starNumber--) {
    positions.push({
      left: getRandomInt(100),
      top: getRandomInt(100),
      size: getRandomInt(5),
      id: starNumber,
    })
  }
  const renderStars = () =>
    positions.map((position) => (
      <div
        key={position.id}
        className='star'
        style={{
          left: position.left + '%',
          top: position.top + '%',
          width: position.size / 10 + 'rem',
          height: position.size / 10 + 'rem',
        }}
      />
    ))
  return <div className='stars'>{renderStars()}</div>
}

const Rocket = () => (
  <div className='space col-12'>
    {getStars()}
    <div className='rocket'>
      <div className='rocket__head'></div>
      <div className='rocket__body'></div>
      <div className='rocket__porthole'></div>
      <div className='rocket__flipper rocket__flipper_right'></div>
      <div className='rocket__flipper rocket__flipper_left'></div>
      <div className='rocket__flipper rocket__flipper_middle'></div>
      <div className='rocket__flame rocket__flame_1'></div>
      <div className='rocket__flame rocket__flame_2'></div>
    </div>
  </div>
)

export default Rocket
