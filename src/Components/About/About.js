import React from 'react';
import './About.css';
import AboutEmployee from '../AboutEmployee/AboutEmployee';

const employees = [
    {
        name:"Anna Kowalska",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sem imperdiet purus congue lacinia ac ut diam.",
        pic:"https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg"
    },

    {
        name:"Maria Nowak",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sem imperdiet purus congue lacinia ac ut diam.",
        pic:"https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_1280.jpg"
    },

    {
        name:"Marek Wiśniewski",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sem imperdiet purus congue lacinia ac ut diam.",
        pic:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
    }
]

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h1> Nasi specjaliści </h1>
                    {
                        employees.map(employee => {
                          return <AboutEmployee name={employee.name} desc={employee.desc} pic={employee.pic}/>  
                        })
                    }
            </div>
        </section>
    )
} 

export default About; 