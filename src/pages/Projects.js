import React from 'react';
import { Card } from 'react-bootstrap';
import project1 from '../img/project1.jpeg';
import project2 from '../img/project2.jpeg';
import { motion } from 'framer-motion';


const Projects = () => {
    const ProjectList =[
        {
            id: 1,
            name: 'Maketing site and build',
            imageUrl: project1,
        },
        {
            id: 2,
            name: 'Maketing site and build',
            imageUrl: project2,
        },
        {
            id: 3,
            name: 'Maketing site and build',
            imageUrl: project1,
        },
        {
            id: 4,
            name: 'Maketing site and build',
            imageUrl: project2,
        },
        {
            id: 5,
            name: 'Maketing site and build',
            imageUrl: project1,
        },
        {
            id: 6,
            name: 'Maketing site and build',
            imageUrl: project2,
        }
    ]
    return (
        <motion.div 
            className='projects'
            animate={{scale:[2, 1], rotate: [90, 0]}}
            transition={{duration: 0.8, ease: 'easeInOut'}}>
            <h2>Project</h2>
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
        </motion.div>
    );
};

export default Projects;