import {Component} from 'react'
import './index.css'
import SlideItemDetails from '../SlideItemDetails'
import NxtSlideContext from '../../context'
import Slides from '../Slides'

class NextSlides extends Component {
  render() {
    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideItemDetails
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slides />
            </div>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default NextSlides
