
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './Loading';
import Swiper from 'react-id-swiper';
import Icon from './Icon';

import '../../node_modules/swiper/dist/css/swiper.min.css';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    this.VARIABLES = {
      id: this.props.id,
    };

    this.CONTENT_QUERY = gql`
      query getFlightDetails($id: ID!) {
        flightses(where: {id: $id}) {
          images {
            id
            url
          }
        }
      }
    `;    
    
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return (
      <div className="more-details">
        <div className="md-overlay"></div>
        <div className="md-details">
          <div className="md-content">
            <Query query={this.CONTENT_QUERY} variables={this.VARIABLES}>
              {({ loading, error, data }) => {
                if (loading) return <Loading />
                if (error) return <div>Error</div>
                return (
                  <div className="md-gallery">
                    <Swiper {...params}>
                    {
                        data.flightses[0].images.map((currentItem, key) => (
                          <div key={key} className="swiper-image">
                            <img
                              src={currentItem.url}
                              alt={currentItem.url}
                            />
                          </div>
                      ))
                    }
                    </Swiper>
                  </div>
                );
        
              }}
            </Query>
          </div>
          <div className="md-actions">
            <button className="btn btn-default close" onClick={this.props.closeDetailViewer}><Icon id="times" /> Schließen</button>
          </div>
        </div>
      </div>
    )  
  }
}

export default Details;
