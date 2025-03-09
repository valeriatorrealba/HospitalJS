import { useState, useEffect } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocalización no soportada en este navegador.");
            return;
        }

        const success = (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        };

        const errorHandler = (err) => {
            setError(`Error obteniendo la ubicación: ${err.message}`);
        };

        const watcher = navigator.geolocation.watchPosition(success, errorHandler);

        return () => navigator.geolocation.clearWatch(watcher);
    }, []);

    return { location, error };
};

export default useGeolocation;
