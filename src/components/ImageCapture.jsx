import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageCapture = ({ onImageCapture }) => {
    const [image, setImage] = useState(null);

    const handleCapture = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); 
                onImageCapture(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleCapture} />
            {image && (
                <div>
                    <h4>Imagen Capturada:</h4>
                    <img src={image} alt="Captured" width="320" />
                </div>
            )}
        </div>
    );
};
ImageCapture.propTypes = {
    onImageCapture: PropTypes.func.isRequired,
};

export default ImageCapture;

