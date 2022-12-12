import './works.scss'

const Works = () => {

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (

    
    <div className='works' id='works'>
      <div className="slider">
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="d.itm" alt="" />
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
        ))}

      </div>
      <img src="/assets/leftarrow.png" className='arrow left' alt="" />
      <img src="/assets/leftarrow.png" className='arrow right' alt="" />
      
    </div>
  )
}

export default Works
