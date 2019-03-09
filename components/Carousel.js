import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    let items = [];
    function addImage(image) {
      items.push(image);
      
/*       for (let i=0; i<items.length; i++){
        if (items[i] === null) {
          console.log(items[i])
        } {
          
          console.log(items)
          return items
      }
    }
       */
    }
   
    const { activeIndex } = this.state;
    addImage(this.props.item);
    addImage(this.props.item2);
    addImage(this.props.item3);
   
    
    let items2 = [
      {
        src: `${this.props.item}`,
        altText: 'Slide 1',
        caption: 'Slide 1'
      },
      {
        src: `${this.props.item2}`,
        altText: 'Slide 2',
        caption: 'Slide 2'
      },
      {
        src: `${this.props.item3}`,
        altText: 'Slide 3',
        caption: 'Slide 3'
      }
    ];
    const slides = items.map((index) => {
      return (
        console.log(key={index})
/*         <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.handle}
        >
          <img src={`https://media.graphcms.com/resize=width:400/${item.handle}`} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem> */
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}

      </Carousel>
    );
  }
}


export default CustomCarousel;