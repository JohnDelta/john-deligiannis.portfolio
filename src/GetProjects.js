export default function GetProjects() {
    return (
        [
            {
                "title" : "Junior Workers",
                "name": "junior-workers",
                "numberOfImages": 9,
                "imagePath" : './images/junior-workers_0.jpg',
                "sourceLink" : "https://github.com/JohnDelta/junior-workers",
                "viewLink" : "",
                "description" : `Junior Workers is a concept project of a professional networking web app platform used by undergraduate/postgraduate students and hirers. The main goal of the platform is to help both students and hirers cover their job search needs. Students can create their personal profiles and upload their CVs. Also, they can search job posts created by hirers. Hirers can search for students based on the position requirements they want to cover and create job posts to let students communicate with them.
                \nFor this project, I:
                - Developed REST API controllers utilizing CRUD functions with Java (JAXRS-Jersey)
                - Applied JWT to ensure authentication
                - Developed a web application using React to handle the users'views
                - Utilized react-route for asynchronous routing through the web application
                - Designed normalized relational database`,
                "utilized" : ["RESTfull API", "Java", "Maven", "MySQL", "Web App", "React","Javascript","HTML5","CSS"],
            },
            {
                "title" : "Gym Equipment",
                "name": "gymequipment",
                "numberOfImages": 12,
                "imagePath" : './images/gymequipment_0.jpg',
                "sourceLink" : "https://github.com/JohnDelta/gym_equipment",
                "viewLink" : "",
                "description" : `Concept project of an e-shop that sells gym equipment created using the Spring MVC framework.
                \nFor this project, I:
                - Utilized Spring MVC and created controllers to handle requests about views, registrations, orders, eshop cart utilities and sessions
                - Implemented a JPA-Hibernate relational database to store products, users and orders
                - Developed the Front-End of the website using JSTL, HTML5, CSS3 and Javascript`,
                "utilized" : ["Spring MVC", "Java", "Maven", "MySQL", "JPA", "Hibernate","Javascript","HTML5","CSS"],
            },
            {
                "title" : "9laugh",
                "name": "9laugh",
                "numberOfImages": 13,
                "imagePath" : './images/9laugh_11.jpg',
                "sourceLink" : "https://github.com/JohnDelta/9laugh_webapp",
                "viewLink" : "",
                "description" : `9laugh is an entertaining web platform (like 9gag) in which users upload and share content. Other users can see the content and comment/like it. The content can be created by the users themselves or by other external sources. 
                \nFor this project I:
                - Utilized Spring boot and developed RESTfull API controllers to handle users'requests
                - Followed API security principles and implemented JWT authorization
                - Applied JPA and Hibernate to manage the relational MySQL database and models
                - Developed a web application using React to handle the users'views`,
                "utilized" : ["RESTful API", "Java", "Spring", "Spring-boot", "JPA", "Hibernate", "MySQL", "Maven", "Web App", "React", "Javascript", "HTML5", "CSS3"],
            },
            {
                "title" : "Examination Centers",
                "name": "examinationcenters",
                "numberOfImages": 18,
                "imagePath" : './images/examinationcenters_7.jpg',
                "sourceLink" : "https://github.com/JohnDelta/ExaminationCenters",
                "viewLink" : "",
                "description" : `Concept project of an online examinations system. Students can see the classes they're assigned to and the date which the examination is to be taken. When they finish their exam, they can see the results of their answers. Supervisors handle examination classes. They can add students to classes, start, stop and reset examinations. When an exam is over, they can close it and see the results (or download) of all the students who participated in it. Administrators can create/remove all entities of the system and assign supervisors to examination centers. They can also see (or download) results of student exams per examination. Both Supervisors and Admins can also add or remove records with excel files.
                \nFor this project I:
                - Developed RESTful services to manage the online exam and the query results
                - Added administrator mode to manage all entities
                - Included options to add, delete and display mutliple entity records using excel documents reducing the administrator's workload
                - Built a GUI desktop application which can be used by the system's admin and supervisors along with a dynamic web site available to all roles`,
                "utilized" : ["RESTful", "Java", "JSP", "Servlet", "Swing", "MySQL", "Maven", "Javascript", "HTML5", "CSS3"],
            },
            {
                "title" : "Ticket Support System",
                "name": "issues",
                "numberOfImages": 4,
                "imagePath" : './images/issues_3.jpg',
                "sourceLink" : "https://github.com/JohnDelta/Issues",
                "viewLink" : "",
                "description" : "A simple ticket support system which allows employers of organizations to create and submit reports concerning the organization. These reports can be issues and problems that employers have and they want a way to inform the department which is responsible, to handle and resolve them. The department which is responsible to handle these reports, can update their values and run filters to display only the desired ones for them. With this system users can have a centralized way to keep all their work documented and managed so they can work more efficiently.",
                "utilized" : ["PHP", "MySQL", "Javascript", "HTML5", "CSS3", "Bootstrap"],
            },
            {
                "title" : "Lab Exchanges",
                "name": "lab-exchange",
                "numberOfImages": 6,
                "imagePath" : './images/lab-exchange_2.jpg',
                "sourceLink" : "https://github.com/JohnDelta/LabExchange_WebApplication",
                "viewLink" : "",
                "description" : "This project is part of my diploma thesis. The final part of my thesis follows the design and development of a cloud-native application that automates the student enrollment process in laboratories, which is architecturally based on the 12-factor methodology. The application consists of four microservices developed in the Spring Boot framework that consist the system’s API, the web application that end-users will use, implement in the React.js framework, and two backing services, the No-SQL MongoDB database and RabbitMQ as a message broker. The cloud native application is initially deployed in a local developement environment using Docker, then, it’s deployed using the Kubernetes platform. Last, some of the available free cloud services that were studied in the second chapted are selected and used to deploy the application in a hosted cloud environment. The selected services are Azure Cosmos DB for MongoDB, Azure App Service for the microservices and a Google Cloud VM for hosting RabbitMQ.",
                "utilized" : ["React", "Javascript", "HTML5", "CSS3", "Spring Boot", "RESTFul API", "Microservices", "Cloud native application", "NoSQL", "Docker", "Kubernetes", "MongoDB", "RabbitMQ"],
            },
            {
                "title" : "Biriba Notes",
                "name": "biriba-notes",
                "numberOfImages": 4,
                "imagePath" : './images/biriba-notes_0.jpg',
                "sourceLink" : "https://github.com/JohnDelta/biriba",
                "viewLink" : "https://johndelta.github.io/biriba",
                "description" : `Web app in React.js which keeps notes for the card game "biriba" including scores, teams, etc. To save the notes the app utilizes the Google Drive API.`,
                "utilized" : ["React","Javascript","Google API", "Google Drive API","HTML5","CSS"],
            },
            {
                "title" : "Pomodoro Clock",
                "name": "pomodoro-clock",
                "numberOfImages": 2,
                "imagePath" : './images/pomodoro-clock_0.jpg',
                "sourceLink" : "https://github.com/JohnDelta/pomodoro-clock",
                "viewLink" : "https://johndelta.github.io/pomodoro-clock",
                "description" : `A responsive pomodoro clock app created using 
                react, which also includes a break length operation.`,
                "utilized" : ["React","Javascript","HTML5","CSS"],
            },
        ]
    );
};