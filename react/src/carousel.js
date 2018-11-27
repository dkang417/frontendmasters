import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    //before getting api data we say loading true
    this.state = {
      photos: [],
      active: 0
    };
  }
  // new static method - takes props and updates state
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }
  // click on image from gallery
  // arrow function refers to whatever lexical scope its in. doesnt create a new scope outside
  handleIndexClick = event => {
    this.setState({
      // + takes a string and makes it a number. coercion
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    let hero = "http://placecorgi.com/300/300";
    if (photos[active] && photos[active].value) {
      hero = photos[active].value;
    }

    return (
      <div className="carousel">
        <img src={hero} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
