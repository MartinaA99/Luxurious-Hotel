import React from 'react';
import RoomsFilter from '../components/RoomsFilter';
import RoomsList from '../components/RoomsList';
import { withRoomConsumer } from '../store/context';
import Loading from '../components/Loading';
import { RoomsObject } from '../models/models';

interface IPropsRoomsContainer {
    context: RoomsObject
}

const RoomsContainer: React.FC<IPropsRoomsContainer> = ({context}) => {

    const {loading, rooms, sortedRooms} = context;
    
    if (loading) {
        return <Loading />
    }
    return (
        <React.Fragment>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/> 
        </React.Fragment>
    );
}

export default withRoomConsumer(RoomsContainer);