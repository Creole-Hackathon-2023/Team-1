import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLayout from '../components/layout';
import { venueList } from '../fakeDb/venuelist';

export default function HomePage() {
  console.log(venueList);
  const navigate = useNavigate();
  const token = localStorage.getItem('token-sport');
  const handleClick = () => {
    if (token) {
      navigate('/');
    } else {
      navigate('/register');
    }
  };
  return (
    <CustomLayout>
      <Row gutter={[10, 10]}>
        {venueList.map((item, index) => (
          <Col sm={6}>
            <Card>
              <div className='venue-card'>
                <div className='venue-list-img'>
                  <img src={item.venue_image[0]} />
                </div>
                <div className='list-content'>
                  <h3>{item.venue_name}</h3>
                  <p>
                    <b>Price: </b>
                    {item.venue_price}
                  </p>
                  <p>
                    <b>Location: </b>
                    {item.venue_location}
                  </p>
                </div>
                <div className='list-button'>
                  <Link to={`/details/${item.id}`}>
                    <Button type='primary' className='button'>
                      View Detail
                    </Button>
                  </Link>
                  <Button
                    type='primary'
                    danger
                    onClick={handleClick}
                    className='button'
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </CustomLayout>
  );
}
