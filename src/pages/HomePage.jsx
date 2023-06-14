import CarouselCom from "../components/CarouselCom";

function HomePage() {
  const images = [
    'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
  return (
    <>
      <div className="homepage">
        <h1 >Welcome to My Website</h1>
        <p>Enjoy exploring and discovering amazing things!</p>
        <CarouselCom images={images} />
      </div>
    </>
  );
}

export default HomePage;
