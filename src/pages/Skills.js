import React from 'react'
import Card from './Card'
import img1 from "../image/UIUXdesign.jpg"
import img2 from "../image/SEO.jpg"
import img3 from "../image/Github.jpg"
const Skills = (props) => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Skills</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mx-5">
            <Card imgsrc={img1} title="UI/UX designing" desc="Designing Websites using frontend technologies"></Card>
          </div>
          <div className="col-3 mx-5 ">
            <Card imgsrc={img2} title="SEO" desc="Good information of SEO for increasing traffic in the Site "></Card>
          </div>
          <div className="col-3 mx-5">
            <Card imgsrc={img3} title="GIT" desc="Good knowledge of GIT and Github for Version Control"></Card>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
