import './testimonials.scss'

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "@subramdas",
      title: "IG Profile",
      img:
        "assets/mypic2.jpg",
      icon: "assets/insta.png",
      desc:
        "A Music Enthusiast who plays the guitar and vocals compliments the other half...",
    },
    {
      id: 2,
      name: "LUCIFER{IIT BOMBAY}",
      title: "Youtube Profile",
      img:
        "assets/mypic3.jpg",
      icon: "assets/youtube.png",
      desc:
        " ",
      featured: true,
    },
    {
      id: 3,
      name: "Subram Das",
      title: "LinkedIn Profile",
      img:
        "assets/mypic4.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
    <h1>TESTIMONIALS</h1>
    <div className="container">
    {data.map((d)=>(

      <div className={d.featured? "card featured" :"card"}>
        <div className="top">
            <img className='left' src="" alt="" />
            <img className='user' src={d.img} alt="" />
            <img className='right' src={d.icon} alt="" />
        </div>
        <div className="center">
          {d.desc}

        </div>
        <div className="bottom">
          {/* <h3>LUCIFER&#123; IIT BOMBAY &#125;</h3> */}
          <h3>{d.name}</h3>
          <h4>{d.title}</h4>

        </div>
      </div>
    ))}
    </div>
      
    </div>
  )
}

export default Testimonials
