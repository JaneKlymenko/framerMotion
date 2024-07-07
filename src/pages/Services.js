import React from 'react';
import { Card } from 'react-bootstrap';
import project1 from '../img/project1.jpeg';
import project2 from '../img/project2.jpeg';
import { motion } from 'framer-motion';

const Services = () => {
    const ProjectList =[
        {
            id: 1,
            name: 'Web dev',
            imageUrl: project1,
        },
        {
            id: 2,
            name: 'New site',
            imageUrl: project2,
        },
        {
            id: 3,
            name: 'Work with old site',
            imageUrl: project1,
        }
        ]

    return (
        <motion.div 
            initial={{ scaleY: 0 }} 
            animate={{ scaleY: 1 }} 
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
            >
            <div className='projects'>
                <h2>Services</h2>
                <div className='wrapper'>
                    {ProjectList.map((item) => {
                        return (
                            <motion.div 
                                key={item.id} 
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.5 }
                                }}>
                                <Card>
                                    <Card.Img variant='top' src={item.imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{ item.name }</Card.Title>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;