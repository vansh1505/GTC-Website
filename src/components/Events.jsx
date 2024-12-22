import React from 'react';

const card = [
    { text: 'Event 1', image: 'core1.jpeg' },
    { text: 'Event 2', image: 'core2.jpeg' },
    { text: 'Event 3', image: 'core3.jpeg' },
    { text: 'Event 4', image: 'core1.jpeg' }
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
