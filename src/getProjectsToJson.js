export default function getProjectsToJson() {
    return (
        [
            {
                "title" : "Junior Workers",
                "name": "junior-workers",
                "numberOfImages": 9,
                "imagePath" : './images/junior-workers_0.png',
                "sourceLink" : "https://github.com/JohnDelta/junior-workers",
                "viewLink" : "",
                "description" : `Junior Workers is a concept project of a professional networking web app platform used by undergraduate/postgraduate students and hirers. The main goal of the platform is to help both students and hirers cover their job search needs. Students can create their personal profiles and upload their CVs. Also, they can search job posts created by hirers. Hirers can search for students based on the position requirements they want to cover and create job posts to let students communicate with them.`,
                "utilized" : ["PHP","MySQL","React","Javascript","HTML5","CSS"],
            },
            {
                "title" : "Examination Centers",
                "name": "examinationcenters",
                "numberOfImages": 18,
                "imagePath" : './images/examinationcenters_7.png',
                "sourceLink" : "https://github.com/JohnDelta/ExaminationCenters",
                "viewLink" : "",
                "description" : "Concept project of an online examinations system. Students can see the classes they're assigned to and the date which the examination is to be taken. When they finish their exam, they can see the results of their answers. Supervisors handle examination classes. They can add students to classes, start, stop and reset examinations. When an exam is over, they can close it and see the results (or download) of all the students who participated in it. Administrators can create/remove all entities of the system and assign supervisors to examination centers. They can also see (or download) results of student exams per examination. Both Supervisors and Admins can also add or remove records with excel files.",
                "utilized" : ["Java","RESTful","JSP","Servlet","Swing","MySQL","Maven","Javascript","HTML5","CSS3"],
            },
            {
                "title" : "Biriba Notes",
                "name": "biriba-notes",
                "numberOfImages": 4,
                "imagePath" : './images/biriba-notes_0.png',
                "sourceLink" : "https://github.com/JohnDelta/biriba",
                "viewLink" : "https://johndelta.github.io/biriba",
                "description" : `Web app in React.js which keeps notes for the card game "biriba" including scores, teams, etc. To save the notes the app utilizes the Google Drive API.`,
                "utilized" : ["React","Javascript","Google API", "Google Drive API","HTML5","CSS"],
            },
            {
                "title" : "Pomodoro Clock",
                "name": "pomodoro-clock",
                "numberOfImages": 2,
                "imagePath" : './images/pomodoro-clock_0.png',
                "sourceLink" : "https://github.com/JohnDelta/pomodoro-clock",
                "viewLink" : "https://johndelta.github.io/pomodoro-clock",
                "description" : `A responsive pomodoro clock app created using 
                react, which also includes a break length operation.`,
                "utilized" : ["React","Javascript","HTML5","CSS"],
            },
        ]
    );
};