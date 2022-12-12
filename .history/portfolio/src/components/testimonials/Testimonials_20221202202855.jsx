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
      name: "Subram Das",
      title: "LinkedIn Profile",
      img:
        "assets/mypic4.jpg",
      icon: "assets/linkedin.png",
      desc:
        " My interests lies in Web Development and Data Science. Learning Blockchain and web dev during the past few months and looking forward to enhance my skills under the same. I have gained knowledge in C++, AI Ml, Web Dev - HTML, CSS, JAVA and Blockchain like solidity, ethers library till now.",
      
      featured: true,
    },
    {
      id: 3,
      name: "LUCIFER{IIT BOMBAY}",
      title: "Youtube Profile",
      img:
        "assets/mypic3.jpg",
      icon: "assets/youtube.png",
      desc:
        "You can find videos of me singing and playing the guitar till these incredible 4 years of my life takes a new turn at the Convocation Hall ",
     
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
    <h1>TESTIMONIALS</h1>
    <div className="container" onClick={}>
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
