import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import NavigationBar from '../../components/PublicComponent/NavigationBar';

const Product = ({ data, title }) => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        {model ? '' : <NavigationBar />}
        {model ? (
          ' '
        ) : (
          <h3 className="gradient-text" style={{ textAlign: 'center', color: 'black', marginTop: '60px' }}>
            {title}
          </h3>
        )}
      </div>

      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="img" />
        <CloseIcon className="close-icon" onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => (
          <button
            className="pics"
            key={index}
            onClick={() => getImg(item.imgSrc)}
            style={{ border: 'none', background: 'transparent', padding: 0 }}
          >
            <img src={item.imgSrc} alt="img" style={{ width: '100%' }} />
          </button>
        ))}
      </div>
    </>
  );
};

export default Product;
