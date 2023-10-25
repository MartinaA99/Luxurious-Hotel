import React, { Component} from 'react';
import { RoomContext} from '../store/context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

  interface Room {
    id: number;
    name: string;
    slug: string;
    images: string[];
    price: number;
  }
  
 
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    context!: React.ContextType<typeof RoomContext>

    public render() {
        const { loading = false, featuredRooms =[] } = this.context || {};

        const rooms = featuredRooms.map((room: any) => {
            return <Room key={room.id} room={room} />;
        })
        return (
            <section className="featured-rooms"> 
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
                
            </section>
        )
    }
}
FeaturedRooms.contextType = RoomContext;