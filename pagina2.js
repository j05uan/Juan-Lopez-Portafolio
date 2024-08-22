
const aboutMe= async ()=>{
   
    const contenedor = document.getElementById('ChangePage');
    contenedor.innerHTML = `
      
    <div class="content-about">
        <div class="about-title">
            <h4 class="back" onclick=home() > Come Back Home</h4>
            <h2 class="tag">About &amp;Services</h2>
            <p>
                <span class="outline-title">Hello &nbsp;! I'm &nbsp;Juan Pablo</span>
                <br>and I’m a freelance full stack developer &amp; my dream is to become a web designer
            </p>
        </div>
        <div class="about-intro">
            <div class="about-text">
                <p>
                    <span class="intro-text">I’m Juan Pablo Lopez, currently living in Colombia.
                        <br>a freelance Product / full stack developer Turning Your Paperball Into Paperplane</span>
                    <br>
                </p>
            </div>
            <div class="about-picture">
                <img alt="" src="img/about/about-photo.jpg">
            </div>
        </div>
        <div class="about-services">
            <div class="content-services">
                <h1>My History and Services</h1>
                <p class="text"> Despite my skills, passion, and admiration for back-end development, including the functionality and task management of applications and websites, my focus is on working in interface design and the digital realm, primarily on the creation of products, brands, and websites. <br>
                Since I was young, I have studied my passion for web design, focusing on areas such as marketing, branding, interface design, and user experience. Currently, I am studying in a programming bootcamp to strengthen my knowledge in web development, with the goal of working with brands and companies, solving brand and product issues, and successfully launching new brands, designs, and products.
                </p>
                <ul>
                    <li>
                        DataBase
                <p>  
                    Studying the system to identify needs for designing and deploying databases, ensuring large capacity and security for data persistence.                </p>
                    </li>
                    <li>
                        Design System
                <p>Working on your product concistency and helping others getting onboard. </p>
                    </li>
                    <li>
                        Website
                <p>Telling a story that will engage your target audience to your product.</p>
                    </li>
                    <li>
                        Task Management and Application Development
                <p>
                    I manage tasks and develop applications, ensuring each one meets product needs and uses the right technologies.
                </p>                
                </li>
                </ul>
            </div>
            <div class="resume">
                <h3>
                    <svg width="22" height="30" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 29.5h22V0H0v29.5zM19.5 27h-17V2.5h17V27z" fill="#18033C" fill-rule="nonzero"/>
                            <path fill="#F3F2F4" d="M5.1 6.9h12.1v1.3H5.1zM5.1 10.7h12.1V12H5.1z"/>
                            <path fill="#EEA1BE" d="M5.1 14.6H7v1.3H5.1zM5.1 18.4H7v1.3H5.1zM5.1 22.2H7v1.3H5.1z"/>
                            <path fill="#F3F2F4" d="M8.8 14.6h8.3v1.3H8.8zM8.8 18.4h8.3v1.3H8.8zM8.8 22.2h8.3v1.3H8.8z"/>
                        </g>
                    </svg>
                    More&nbsp;Of Me
                </h3>
                <p>Want to know more about my education and experience.</p>
                <a href="file:///C:/Users/felia/Downloads/Juan%20Pablo%20L%C3%B3pez%20Amaya%20Hoja%20de%20vida.pdf">My Resume</a>
            </div>
        </div>
        <div class="about-process">
            <div class="outline-title">
                Values <br>&amp;Process

            </div>
            <div class="process-content">
                <span class="intro-text">Using the right tools with a well structured process leads to the collaboration’s success</span>
                <div class="process-list">
                    <ul>
                        <li>
                            <div class="number">1.</div>
                            <h3>Research</h3>
                            <p>
                                I research your product and objectives, and analyze your industry and competitors in depth.
                            </p>
                        </li>
                        <li>
                            <div class="number">2.</div>
                            <h3>Prototype</h3>
                            <p>
                                Based on the research, I find a solution that meets your goals, stands out against competitors, and is efficient. 
                            </p>
                        </li>
                        <li>
                            <div class="number">3.</div>
                            <h3>Design</h3>
                            <p>
                                I integrate design and functionality to ensure that your solution meets objectives and delivers optimal performance.
                            </p>
                        </li>
                        <li>
                            <div class="number">4.</div>
                            <h3>Build</h3>
                            <p>
                                Ensuring that every aspect of the development plan is executed precisely, while making sure the final project meets the company's quality standards and objectives.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="yeah">
            <div class="tag">Lets work together &nbsp;</div>
            <span class="title">
                Interested &nbsp;?<br>Lets Get In Touch &nbsp;!
            </span>
            <div class="contact">
                <div class="icon">
                    <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z" fill="#FFFFFF" fill-rule="evenodd"/>
                    </svg>
                </div>
                <span class="mail" data-status="Click to Copy!">lopezamayajuanpablo@gmail.com</span>
            </div>
        </div>
        <section id="contact">
            <h2>Contacto</h2>
            <p>Juan Pablo López Amaya</p>
            <p>Email: <a href="mailto:lopezamayajuanpablo@gmail.com">lopezamayajuanpablo@gmail.com</a></p>
            <p>Ubicación: Bucaramanga, Colombia</p>
            <a href="mailto:lopezamayajuanpablo@gmail.com" class="contact-button2">Enviar Correo</a>
            <div class="social-links">
                <a href="https://linkedin.com/in/juanpablo" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/j05uan" target="_blank"><i class="bi bi-github"></i> GitHub</a>
                <a href="tel:+573001234567"><i class="bi bi-telephone-fill"></i> Teléfono</a>
            </div>
        </section>
    </div>
    
`;
    
}

const home= async ()=>{
   
    const contenedor2 = document.getElementById('ChangePage');
    contenedor2.innerHTML = `
    <section id="section-home" class="section-home">
    <div class="text-zone">
        <h1>
            <span id="juan">
                Hi, <br> I'm Juan 
            </span>
            
                <div class="svg-container">
                    <svg width="90" height="68" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#EEA1BE" d="M5.303 28.672L9.16 18.384 77.742 0 90 45.762 7.038 68 0 41.726z"/>
                            <text transform="rotate(-15 47.263 34.018)" font-family="Averta-Bold, Averta" font-size="18" font-weight="bold" fill="#18033C">
                                <tspan x="13.263" y="40.518">UI / UX</tspan>
                            </text>
                            <path fill="#C26A8B" d="M20 25.54L0 42l8.615-23z"/>
                        </g>
                    </svg>
                </div>
                <span id="lopez">
                    López, <br> Full Stack Developer
                </span>
        </h1>
        <p class="gray-text">Front End Developer / Back End Developer</p>

        
        <a href="#" class="contact-button">
            <div>
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text">
                ¡ Contact me !
                </span>

            </div>
        </a>
    </div>
    <div class="scroll-down">
        <span>Scroll down</span>
        <i class="bi bi-arrow-right"></i>
    </div>

    <div class="scroll-down scroll-down--left">
        <span>Scroll down</span>
        <i class="bi bi-arrow-right"></i>
    </div>
</section>

<section id="section-works">
    <div id="header">
        <h2 id="case">Case Studies & Projects</h2>
    </div>
    <div class="text-zone-2">
        <div>
            <p>A small gallery showcasing a selection of projects I've worked on, reflecting my commitment to excellence and my passion for design and innovation.</p>
        </div>
        <a href="#" class="contact-button" class="buttoemai">
            <div id="email">
                <span class="bg"></span>
                <span class="base"></span>
                <span class="icon"><i class="bi bi-envelope"></i></span>
                <span class="mail" data-status="Click to Copy!" class="text">lopezamayajuanpablo@gmail.com</span>
            </div>
        </a>
    </div>
    <div class="fake-big-2">My Work</div>
</section>

<section id="home-magicwall" class="fake-magicwall" >
    
        <section class="project project-1">
            <div class="magic-wall_item lazyload">
                <img src="./CarmenTea-1-logo-03.png" alt="Proyectos">
                <div class="hover-content">
                    <div class="description">
                        <span class="duracion">2024</span>
                        <i class="bi bi-arrow-right"></i>
                        <span class="empresa">CarmenTea</span>
                    </div>
                    <span>
                        Web Page</span>
                    <p>I designed, laid out, and created the website for CarmenTea, a regionally recognized restaurant. The site features a visually appealing design that reflects the restaurant's brand and ambiance, with an intuitive layout that enhances user experience. By incorporating HTML, CSS, and JavaScript, I developed a functional and engaging platform that showcases CarmenTea's menu, ambiance, and services, providing visitors with easy access to information and a seamless browsing experience. </p>
                </div>
                <a href="https://github.com/j05uan/Carmentea.github.io" class="colorbox"></a>
            </div>
        </section>
    
        <section class="project project-2">
            <div class="magic-wall_item lazyload">
                <img src="./vuelos.jpeg" alt="Proyectos">
                <div class="hover-content">
                    <div class="description">
                        <span class="duracion">2024</span>
                        <i class="bi bi-arrow-right"></i>
                        <span class="empresa">Personal Project</span>
                    </div>
                    <span>Flight Agency</span>
                    <p>I developed a console system using Java for managing entities such as flights, airports, clients, departures, and seats, as well as handling flight reservations for an agency. The system streamlines the booking process and enhances operational efficiency by providing a robust platform for managing key data and transactions.</p>
                </div>
                <a href="https://github.com/j05uan/Flight-Agency" class="colorbox"></a>
            </div>
        </section>
        <section class="project project-3">
            <div class="magic-wall_item lazyload">
                <img src="./baseDatos.jpeg" alt="Proyectos">
                <div class="hover-content">
                    <div class="description">
                        <span class="duracion">2024</span>
                        <i class="bi bi-arrow-right"></i>
                        <span class="empresa">Personal Project</span>
                    </div>
                    <span> DataBase </span>
                    <p>Creation, normalization of the database for a repair shop whit MySQL</p>
                </div>
                <a href="https://github.com/j05uan/proyectoMySQL/tree/main" class="colorbox"></a>
            </div>
        </section>
        <section class="project project-4">
            <div class="magic-wall_item lazyload">
                <img src="./universidad.jpeg" alt="Proyectos">
                <div class="hover-content">
                    <div class="description">
                        <span class="duracion">2024</span>
                        <i class="bi bi-arrow-right"></i>
                        <span class="empresa">Personal Project</span>
                    </div>
                    <span>University</span>
                    <p>I developed a website for [University Name] using HTML, CSS, and JavaScript, with the aim of providing an intuitive and accessible platform. The design focuses on a smooth user experience, enabling easy and efficient navigation. HTML provides the basic content structure, CSS handles visual presentation and responsive design, while JavaScript adds interactivity and advanced functionalities. This approach ensures a modern and functional website that supports institutional communication and facilitates access to academic and administrative information.</p>
                </div>
                <a href="https://github.com/j05uan/Universidad.gthub.io" class="colorbox"></a>
            </div>
        </section>
        <section class="project project-5">
            <div class="magic-wall_item lazyload">
                <img src="./portafolio.jpeg" alt="Proyectos">
                <div class="hover-content">
                    <div class="description">
                        <span class="duracion">2024</span>
                        <i class="bi bi-arrow-right"></i>
                        <span class="empresa">Juan Lòpez</span>
                    </div>
                    <span>Portfolio</span>
                    <p>
                        I created a personal portfolio website using Bootstrap, HTML, CSS, and JavaScript to showcase my skills and projects. The website features a responsive design, enabled by Bootstrap, that ensures compatibility across various devices. HTML and CSS were utilized for structuring and styling the content, while JavaScript was employed to add interactive elements and enhance user experience. The result is a modern, visually appealing portfolio that effectively highlights my work and professional background. </p>
                </div>
                <a href="#" class="colorbox"></a>
            </div>
        </section>
    
</section>


<section id="section-about">

    <div class="text-zone3">
        <div id="header2">
            <h2>Me, Myself and I</h2>
        </div>
        <div id="textp">
            <p>Since I was young, I’ve been impressed by the skills required to be a programmer and intrigued by the underlying details of every application, from backend to frontend.
                The front end identifies me, and I have filled myself with knowledge and technological skills to one day become a web designer. At the moment,. Currently,
            </p>
            <p>
                I am in my first programming bootcamp, marking my entry into
                <a href="#" class="tech"> the world of web technologies</a> 
                Throughout this process, I have learned the importance of consistent practice and maintaining a mindset of continuous learning.
            </p>
        </div>
    </div>

    <div class="skills-charts">
        <div id="myCanvasContainer">
            <canvas width="500" height="500" id="myCanvas">
                <ul id="tags">
                    <li><a href="#" target="_blank">HTML</a></li>
                    <li><a href="#" target="_blank">CSS</a></li>
                    <li><a href="#" target="_blank">JavaScript</a></li>
                    <li><a href="#" target="_blank">Java</a></li>
                    <li><a href="#" target="_blank">MySQL</a></li>
                    <li><a href="#" target="_blank">JSON</a></li>
                    <li><a href="#" target="_blank">Python</a></li>
                    <li><a href="#" target="_blank">PostgreSQL</a></li>
                    <li><a href="#" target="_blank">Spring Boot</a></li>
                    <li><a href="#" target="_blank">GitHub</a></li>
                    <li><a href="#" target="_blank">bootstrap</a></li>
                    <li><a href="#" target="_blank">Postman</a></li>

                </ul>
            </canvas>
        </div>
    </div>
</section>
<section id="contact">
<h2>Contacto</h2>
<p>Juan Pablo López Amaya</p>
<p>Email: <a href="mailto:lopezamayajuanpablo@gmail.com">lopezamayajuanpablo@gmail.com</a></p>
<p>Ubicación: Bucaramanga, Colombia</p>
<a href="mailto:lopezamayajuanpablo@gmail.com" class="contact-button2">Enviar Correo</a>
<div class="social-links">
    <a href="https://linkedin.com/in/juanpablo" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
    <a href="https://github.com/j05uan" target="_blank"><i class="bi bi-github"></i> GitHub</a>
    <a href="tel:+573001234567"><i class="bi bi-telephone-fill"></i> Teléfono</a>
</div>
    `;
    
}
