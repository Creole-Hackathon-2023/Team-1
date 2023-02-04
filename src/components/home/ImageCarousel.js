import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const ImageCarousel = (data) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  console.log(data);
  return (
    <Carousel afterChange={onChange} autoplay>
      {data?.data?.map((item) => (
        <div>
          <img src={item} />
        </div>
      ))}
    </Carousel>
  );
};
export default ImageCarousel;
