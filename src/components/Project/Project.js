import React from 'react';
//import Data from '../Data/Data';
import Burger from '../images/Burger.png';
import Elearning from '../images/ela.png';
import Video from '../images/videostream.png';
import Github from '../images/project1.jpg';
import Shopping from '../images/project2.jpg';
import restaurant from '../images/restaurent.png';
const Project = () => {
    const Data = [
        {

            name: 'Burger Builder React',
            image: Burger,
            Url: 'https://rimi-burger-shop.web.app/',
        },
        {

            name: 'Video Stream Website ',
            image: Video,
            Url: 'http://videostream.pythonanywhere.com/',
        },
        {

            name: 'Elearning Website Django',
            image: Elearning,
            Url: 'http://elearningnahid.pythonanywhere.com',
        },
        {

            name: 'Github Finder',
            image: Github,
            Url: 'https://nahid2194.github.io/Github_Finder_JavaScript/',
        },
        {

            name: 'Shopping Cart_JavaScript',
            image: Shopping,
            Url: 'https://nahid2194.github.io/Shopping-Cart_JavaScript/',
        },
        {

            name: 'Restaurent Website React',
            image: restaurant,
            Url: 'https://restaurent-react.netlify.app/',
        }
    ];
    return (
        <div className="container pb-5">
            <h2 style={{ borderBottom: "4px solid #2cd0f5", width: "120px", margin: "auto auto", marginTop: "3%", textAlign: "center" }}>Project</h2>
            <div className="row">
                <div className="card-deck card-box">
                    {
                        Data.map((project, index) => {
                            if (index < 6) {
                                return (

                                    <div className="col-lg-4 col-md-4 col-sm-6">

                                        <div className="card ">
                                            <img src={project.image} style={{ height: "210px" }} class="card-img-top" alt={project.name} />
                                            <a target='_blank' rel="noopener noreferrer" href={project.Url}>
                                                <div className="card-body">
                                                    <h5 class="card-title" >{project.name}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                )
                            }

                        })

                    }
                </div>

            </div>
        </div>

    );
};

export default Project;