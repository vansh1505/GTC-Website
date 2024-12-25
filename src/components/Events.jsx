import React from 'react';

const card = [
    { text: 'Swift challange', image: 'https://media.licdn.com/dms/image/v2/D5622AQFlm8vFFFF4vQ/feedshare-shrink_800/B56ZO7qRa_GcAk-/0/1734020242268?e=1737590400&v=beta&t=vE7dnYcCtSIzUd-2FlWHCM4L6qxD1fSYtNOZQ7A5sVE' },
    { text: 'Startup', image: 'https://media.licdn.com/dms/image/v2/D5622AQG0Q3Dx8huuOw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733315785704?e=1737590400&v=beta&t=kJffPy6vT-XiZqrUdV0yMQvXdBAH5DhWSGbqw0tKERU' },
    { text: 'Anveshan', image: 'https://media.licdn.com/dms/image/v2/D5622AQELnrjl8ke7ig/feedshare-shrink_800/feedshare-shrink_800/0/1732722448966?e=1737590400&v=beta&t=Hn5ugCruyd7lwjidi1arYkMbav-lwiSSibeSrpNyJBk' },
    { text: 'Tech Exibiton', image: 'https://media.licdn.com/dms/image/v2/D5622AQG2UJyulm_LLA/feedshare-shrink_800/feedshare-shrink_800/0/1732129066817?e=1737590400&v=beta&t=rUtEpvbTaXXZZDWK6fdkjD6WFEtEACftOHNh6auK95Q' }
];

const Events = () => {
    return (
        <>
            <div className="flex mt-8 relative">
                <div className="w-1/2 h-72 relative">
                    <img
                        src="https://img.freepik.com/free-photo/person-working-laptop-desk_9975-24478.jpg?t=st=1734810220~exp=1734813820~hmac=6115ca9855ed12d860dc9c0b7fd4a2046101daf71b3d66e79d83b7f93cc17192&w=1060"
                        alt="pic"
                        className="w-full h-full object-cover opacity-50 rounded-md"
                        style={{
                            filter: 'brightness(0.5) sepia(1) hue-rotate(-50deg) saturate(5)'
                        }}
                    />
                    <h1 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        Events
                    </h1>
                </div>
                <div className="relative overflow-hidden w-full mt-4">
                    <div className="flex animate-scroll">
                        {card.concat(card).map((item, index) => (
                            <div
                                key={index}
                                className="inline-block bg-gray-200 p-4 rounded-lg mr-4 min-w-[300px]"
                            >
                                <h2 className="text-xl font-bold mt-2">{item.text}</h2>
                                <img
                                    src={item.image}
                                    className="w-full h-48 object-cover"
                                    alt={item.text}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
