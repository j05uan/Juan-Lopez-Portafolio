const aboutMe= async ()=>{
   
    const contenedor = document.getElementById('ChangePage');
    contenedor.innerHTML = `
      
    <div class="content-about">
        <div class="about-title">
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
