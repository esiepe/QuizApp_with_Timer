// Array to store all questions
let question_bank = [
    {
        question: "The internet functions like a vast network of what?",
        answer: "Computers and devices",
        options: [
            "Cables and wires",
            "Computers and devices",
            "Websites and servers",
            "All of the above"
        ]
    },
    {
        question: "What is the primary function of the HTTP protocol?",
        answer: "Transfer data between web browsers and servers",
        options: [
            "Secure online transactions",
            "Translate domain names to IP addresses",
            "Transfer data between web browsers and servers",
            "Store and organize website content"
        ]
    },
    {
        question: "What does DNS stand for, and what role does it play in internet browsing?",
        answer: "Domain Name System, translates domain names to IP addresses",
        options: [
            "Data Network System, manages user data flow",
            "Domain Name System, translates domain names to IP addresses",
            "Digital Navigation Service, guides users to specific websites",
            "Data Network Switch, controls data transfer between devices"
        ]
    },
    {
        question: "What is a domain name, and how does it differ from an IP address?",
        answer: "A domain name is a user-friendly website address, while an IP address is a numerical code that identifies a device.",
        options: [
            "They are the same thing, just different names for the same online location.",
            "A domain name is a user-friendly website address, while an IP address is a numerical code that identifies a device.",
            "A domain name is a website's category, while an IP address is its unique identifier.",
            "Domain names are used for email, while IP addresses are used for websites."
        ]
    },
    {
        question: "What is the purpose of web hosting, and who typically provides this service?",
        answer: "Hosting companies store and manage website content, making it accessible online.",
        options: [
            "Hosting companies store and manage website content, making it accessible online.",
            "Users can host online meetings and conferences through web hosting services.",
            "Web hosting allows users to share personal files and documents securely.",
            "Search engines use web hosting to store and index website information."
        ]
    },
    {
        question: "What is the primary function of a web browser?",
        answer: "To access and navigate websites on the internet",
        options: [
            "To create and edit websites",
            "To translate languages online",
            "To send and receive emails",
            "To access and navigate websites on the internet"
        ]
    },
    {
        question: "How does a web browser interpret and display the content of a website?",
        answer: "By converting the website's code into human-readable text and images.",
        options: [
            "By converting the website's code into human-readable text and images.",
            "By directly connecting to the website's server and displaying its content.",
            "By searching for the website's information on the internet and presenting it",
            "By using a complex algorithm to understand and translate the website's data."
        ]
    },
    {
        question: "In addition to HTTP, what other common protocols are used for secure online communication?",
        answer: "HTTPS and SSH",
        options: [
            "DNS and IP",
            "HTML and CSS",
            "HTTPS and SSH",
            "FTP and SMTP"
        ]
    },
    {
        question: "What is the difference between the World Wide Web and the internet?",
        answer: "Web browser",
        options: [
            "The internet is a physical network, while the web is a virtual space built on top of it.",
            "The internet is for communication, while the web is for information access.",
            "The web is a type of search engine, while the internet connects devices globally.",
            "There is no difference; they are just different names for the same thing."
        ]
    },
    {
        question: "When you type a web address into your browser, what happens first?",
        answer: "The browser sends a request to a DNS server to translate the domain name into an IP address.",
        options: [
            "The browser directly displays the content of the website.",
            "Your computer searches for the website on your local hard drive.",
            "The browser sends a request to a DNS server to translate the domain name into an IP address.",
            "The website's server sends the website's content to your browser."
        ]
    }
];

// Get 10 random questions
let questions = question_bank.sort(() => 0.5 - Math.random()).slice(0, 10);

// Escape '<' and '>' character
for (let i = 0; i < questions.length; i++) {

    questions[i].question = questions[i].question.replaceAll('<', '&lt;');
    questions[i].question = questions[i].question.replaceAll('>', '&gt;');

    questions[i].answer = questions[i].answer.replaceAll('<', '&lt;');
    questions[i].answer = questions[i].answer.replaceAll('>', '&gt;');

    for (let j = 0; j < 4; j++) {
        questions[i].options[j] = questions[i].options[j].replaceAll('<', '&lt;');
        questions[i].options[j] = questions[i].options[j].replaceAll('>', '&gt;');
    }
}
