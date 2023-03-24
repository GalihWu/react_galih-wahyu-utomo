import imgPlants from './img/pexels-designecologist-1005058.jpg';

const AboutUs = () => {
  return (
    <>
      <div
        className="text-center pt-5 pb-5"
        style={{
          boxSizing: 'border-box',
          margin: '0',
          padding: '0 90px',
          backgroundColor: '#EFEDEA',
          width: '100%',
          color: '#4e731d',
        }}
      >
        <h2>About Us</h2>
        <div className="row mt-5 ">
          <div className="col-6 text-start">
            <h3>
              Percantik ruangan Anda dengan koleksi tanaman hias terbaik dari
              kami.
            </h3>
            <p className="mt-4">
              Kami memiliki tim ahli yang berpengalaman dalam bidang perawatan
              dan pengembangan tanaman hias, sehingga Anda dapat yakin bahwa
              setiap produk yang kami jual telah melewati proses seleksi yang
              ketat. Kami berusaha untuk memberikan pengalaman belanja yang
              menyenangkan dan memuaskan bagi semua pelanggan kami.
            </p>
          </div>
          <div className="col-6 text-end">
            <img src={imgPlants} alt="img-plants" style={{ width: '450px' }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
