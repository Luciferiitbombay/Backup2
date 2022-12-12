import './testimonials.scss'

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
    <h1>TESTIMONIALS</h1>
    <div className="container">
      <div className="card">
        <div className="top">
            <img className='left' src="" alt="" />
            <img className='user' src="/assets/mypic.jpg" alt="" />
            <img className='right' src="/assets/youtube.png" alt="" />
        </div>
        <div className="center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, distinctio! Cupiditate ipsam aliquam repudiandae in earum rerum harum hic itaque autem adipisci, doloremque ex quas cumque perferendis, aperiam omnis. Blanditiis.

        </div>
        <div className="bottom">
          <h3>LUCIFER&#123; IIT BOMBAY &#125;</h3>
          <h4>Channel Name</h4>

        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Testimonials
