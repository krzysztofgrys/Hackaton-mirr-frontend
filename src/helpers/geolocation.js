export const getLocation = (setBrowserLocation) => {
    navigator.geolocation.getCurrentPosition(
        ({coords}) => setBrowserLocation(coords),
        () => setBrowserLocation(null)
    );
};


export const defaultBrowserLocation = {
    latitude: 51.107883,
    longitude: 17.038538
};