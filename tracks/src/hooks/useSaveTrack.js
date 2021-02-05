import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';


//Pulling info out of the location/track and creating an action 
//goal is as always....to make this a reusable hook for the component to call on

export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        state: { locations, name },
        reset
    } = useContext(LocationContext);

    const saveTrack = async () => {
        //what info do we care about?
        await createTrack(name, locations);
        //we awaited the sucess of the created Action and reset/navigated
        reset();
        navigate('TrackList');
    };

    return [saveTrack];
};