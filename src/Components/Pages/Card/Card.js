import React from 'react';
import InfoCard from './InfoCard';

const Card = () => {

    const cardData = [
        {
            id: 1,
            name: 'Business Consultation',
            description: 'We approach business solving from an entirely different perspective...',
            img: "https://img.freepik.com/free-photo/firm-handshake_1098-16548.jpg?w=1380&t=st=1672728029~exp=1672728629~hmac=91b9e983aa6cbb2fba4bc58785d934386a5c2f551809cc5e7ce4b23bc43c0ea4",

        },
        {
            id: 2,
            name: 'HR Consultation',
            description: 'Our company offers HR consultancy services to corporates and startups...',
            img: 'https://img.freepik.com/free-photo/handsome-businessman-signing-contract-with-partner_1163-5281.jpg?w=1380&t=st=1672728083~exp=1672728683~hmac=b0b3dd9b4fe169451b1548115e713452b9dd5e9dddbea0f59ad5ee3a314fa4f7'
        },
        {
            id: 3,
            name: 'Trainings',
            description: 'Vlaunchu is a company that provides training services...',
            img: 'https://img.freepik.com/free-photo/two-businessmen-shaking-hands-congratulating-promotion_23-2147923371.jpg?w=1380&t=st=1672728150~exp=1672728750~hmac=ca29a425a7bf77018ca48fe935ba29159d17f4f0dc1af6827753644aab03d2e1'
        },
        {
            id: 4,
            name: 'IT and Web Services',
            description: 'We use Agile methodology with focused project management...',
            img: 'https://img.freepik.com/free-photo/working-with-apps-cup-coffee_1134-93.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.2.1908891225.1665030381&semt=ais'

        },
        {
            id: 5,
            name: 'Marketing',
            description: 'Specializes in delivering digital transformation for companies...',
            img: 'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=1380&t=st=1672728324~exp=1672728924~hmac=0452436cd5a31c75e3e7d6f9e27f1458076867b148babd5bba8de551bb742394'

        },
        {
            id: 6,
            name: 'BPO Services',
            description: 'Passion drives every aspect of our culture...',
            img: 'https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?w=1380&t=st=1672728395~exp=1672728995~hmac=f73fe0eeb19bfc9cf179ed045a1d4802a18c9153a4ca90d46c77a564d2220750'

        },
    ]

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center mt-8 '>here is all business deal</h1>

                <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        cardData.map(card => <InfoCard
                            key={card.id}
                            card={card}
                        ></InfoCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;