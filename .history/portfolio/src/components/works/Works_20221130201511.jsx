import './works.scss'

const Works = () => {
  return (
    <div className='works' id='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum iusto molestiae exercitationem velit! Placeat repellendus, a corporis molestiae velit veniam illo voluptas laborum praesentium, accusamus porro quaerat eum vel!</p>
                <span>Projects</span>
              </div>

            </div>
            <div className="right">
              <img src="https://cdn.dribbble.com/users/387658/screenshots/15458608/media/e92ec1dd33dd1170ae3dc9c5272f2693.jpg?compress=1&resize=1200x900" alt="" />

            </div>
          </div>
        </div>
      </div>
      <img src="/assets/leftarrow.png" className='arrow' alt="" />
      
    </div>
  )
}

export default Works
