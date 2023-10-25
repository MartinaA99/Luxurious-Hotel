import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
}

interface IStateServices {
    services: Service[];
}

export default class Services extends Component<{}, IStateServices> {

    public readonly state: Readonly<IStateServices> = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: " At times illusion is better than reality, at least you’re getting unlimited cocktail over there."
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: " It’s not all about the views from the top of the mountain, there are so many beautiful things you pass on your journey to the top. Appreciate the beauty of the path "
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttles",
                info: "Gone exploring, leave a message after the beep."
            },
            {
                icon: <FaBeer />,
                title: "strongest beers",
                info: "Beer: The cause of, and solution to, all of life's problems."
            },
        ]
    }

    public render() {
        const { services } = this.state;
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {services.map((item: Service, index: number) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
