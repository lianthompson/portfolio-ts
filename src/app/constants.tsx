

export const JOBS_LIST = [
    ["https://www.pbteen.com/",
        [{
            start: "Oct 2025",
            end: "Present",
            title: "Web Developer",
            company: "Williams Sonoma (Contract)",
            description: "Collaborate with creative, site managers, and Frontend team to deliver pixel perfect UI for PotteryBarn teen and Dormify brands. Responsible for styling updates in a weekly deployment schedule along with ad-hoc deliverables.",
            skills: ['JavaScript', 'Tailwind', 'Scss/CSS', 'Jenkins', 'Figma', 'Adobe']
        }]
    ],
    ["https://www.ford.com/",
        [{
            start: "May 2023",
            end: "May 2025",
            title: "Software Engineer II",
            company: "Ford Motor Company",
            description: "Own feature development throughout entire development process. Maintain and develop critical components across two internal applications used by developers and support teams. Responsible for integrating new APIs into Javascript SDK, Console application, and ensure REST best practices were being followed.",
            skills: ['Javascript', 'React', 'Redux', 'Scss', 'Figma', 'Concourse']
        }]
    ],
    ["https://autonomic.com/#:~:text=Home%20%2D%20Autonomic,vehicle%20models%20and%20connectivity%20devices.",
        [{
            start: "Feb 2022",
            end: "May 2023",
            title: "Software Engineer II",
            company: "Autonomic",
            description: "Implement new features and bug fixes. Mentor incoming team members and interns through pair programming, code review, and 1:1s.",
            skills: ['Javascript', 'React', 'Redux', 'Scss', 'Figma', 'Concourse']
        },
        {
            start: "Oct 2019",
            end: "May 2022",
            title: "Software Engineer",
            company: "Autonomic",
            description: "Maintain and enhance components for internal Console management application and Developer Portal.",
            skills: []
        },
        {
            start: "July 2019",
            end: "Oct 2019",
            title: "Software Engineer Intern",
            company: "Autonomic",
            description: "Contributed to bug fixes and built features for an internal dashboard application for demo-ing services.",
            skills: []
        }]
    ],
    ["https://www.linkedin.com/company/colark/about/",
        [{
            start: "July 2018",
            end: "March 2019",
            title: "Jr Software Engineer",
            company: "Colark",
            description: "Build and deploy company marketing site.",
            skills: ['Gatsby.js', 'Tailwind', 'GraphQL', 'Figma']
        }]
    ],
    ["https://techtonica.org/",
        [{
            start: "Jan 2018",
            end: "June 2019",
            title: "Software Engineer Apprentice",
            company: "Techtonica",
            description: "Completed Techtonica's inaugural Fullstack Web Developer apprenticeship with 10 other women. Six month full-stack web development program learning MERN stack.",
            skills: ['MySql', 'Express', 'React', 'Node.js']
        }]
    ]
]


export const FAQ_LIST = [
    {
        question: "Explain something that you have a deep amount of knowledge in as simple as you can.",
        answer: "An API stands for Application Program Interface and it is quite literally the interface between the user or client side of an application and the backend. An easy way to think of this is the waiter at a restaurant taking your order, you are the user/client and delivering it to the kitchen which is the backend. Likewise when the kitchen/backend is done preparing your order or retrieving the data you requested, the API will deliver it back to you."
    },
    {
        question: "Tell me about a time you've failed at something for work.",
        answer: "During my internship at Autonomic I was tasked with removing certain items from a list. The for loop I’d written had a bad condition and ended up deleting all the data. Luckily this was in our staging environment and was not pushed to production, but it did not go unnoticed. I shared what happened with my mentor and their reaction was nonchalant about it so I didn’t announce it further. I later had a meeting with my manager and learned that I should have shared what happened so our team could get ahead of the situation and address it to other teams, rather than vice versa."
    },
    {
        question: "What are you looking for in your next role?",
        answer: "I’m looking for a role where I can grow and learn as a developer, where there’s opportunity for career advancement, and I can work with smart passionate nice people."
    },
    {
        question: "Explain a problem you worked on in the past in depth.",
        answer: "A list table in our console app was displaying incomplete data for connectivity history. The endpoint response showed multiple instances of activity and the UI was inconsistent. It was discovered that the data not being displayed had duplicate timestamps down to the millisecond. On the frontend, because the events did not include unique identifiers, we were generating GUIDs for the table using the timestamp, so the initial fix was for the backend team to update the endpoint to return a timestamp that included nanoseconds. This dragged on so instead we used the index with the timestamp to generate the GUID for the table."
    },
    {
        question: "What's the biggest bug you deployed to production, and how did you respond?",
        answer: "A dropdown I added to a lookup page did not show a complete list of items. Users would type or search for a specific group name to add to a table and the selection could not be added if it was not in the list. The problem was api call we were making to populate the list used pagination so we were unable to populate the complete list with good latency for the user. The solution was to switch the dropdown with an input that performed a GET operation when the user clicked ‘Add’ that would populate the table with the response. The tradeoff was that the user would need to have the specific Group ID to lookup vs being able to perform a search."
    }
]