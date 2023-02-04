import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../components/home/ImageCarousel';
import { venueList } from '../fakeDb/venuelist';

export default function DetailPage() {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const venueDetail = venueList.filter((item) => item.id == id);
    setDetail(venueDetail[0]);
  });
  console.log(id);
  return (
    <>
      {Object.keys(detail).length > 0 ? (
        <div className='row'>
          <div className='detail-image'>
            {/* <img
          src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
          alt="Login"
        /> */}
            <ImageCarousel data={detail.venue_image} />
          </div>

          <div className='detail-image-right'>
            <div className='Venue-text'>
              Sports Type:{' '}
              <div style={{ marginLeft: '20px' }}>
                {detail.sports_category.map((item, index) => (
                  <span>{item + ''}</span>
                ))}
              </div>
            </div>
            <div className='Venue-text-location'>
              location : {detail.venue_location}
            </div>
            <div className='Venue-text-location'>
              Contact No : {detail.venue_contact_no}
            </div>
            <div className='Venue-text-location'>
              Available Days:{' '}
              {detail.venue_available_days.map((item) => (
                <>
                  <span>{days[item - 1] + ','}</span>
                </>
              ))}
            </div>
            <div className='Venue-text-location'>Price:2000 rs</div>
            <div className='Venue-text-location'>Description:</div>

            <div className='submit-button'>
              <Form>
                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='submit-button'
                  >
                    Book now
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
