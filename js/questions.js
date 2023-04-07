// Array to store all questions
let question_bank = [
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },
    {
        question: "What is HTML?",
        answer: "All of the mentioned",
        options: [
            "HTML describes the structure of a webpage",
            "HTML is the standard markup language mainly used to create web pages",
            "HTML consists of a set of elements that helps the browser how to view the content",
            "All of the mentioned"
        ]
    },
    {
        question: "Who is the father of HTML?",
        answer: "Tim Berners-Lee",
        options: [
            "Rasmus Lerdorf",
            "Tim Berners-Lee",
            "Brendan Eich",
            "Sergey Brin"
        ]
    },
    {
        question: "What is the correct syntax of doctype in HTML5?",
        answer: "<!doctype html>",
        options: [
            "</doctype html>",
            "<doctype html>",
            "<doctype html!>",
            "<!doctype html>"
        ]
    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        answer: "Web browser",
        options: [
            "Web server",
            "Web network",
            "Web browser",
            "Web matrix"
        ]
    },
    {
        question: "Which of the following is not a difference between HTML and XHTML?",
        answer: "Charset in both html and xhtml is \"text/html\"",
        options: [
            "Charset in both html and xhtml is \"text/html\"",
            "Tags and attributes are case-insensitive in HTML but not in XHTML",
            "Special characters must be escaped using character entities in XHTML unlike HTML",
            "Charset in html is \"text/html\" where as in xhtml it is \"application/xml+xhtml\""
        ]
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        answer: "<h1>",
        options: [
            "head",
            "<h1>",
            "<h6>",
            "heading"
        ]
    },
    {
        question: "What is DOM in HTML?",
        answer: "Convention for representing and interacting with objects in html documents",
        options: [
            "Language dependent application programming",
            "Hierarchy of objects in ASP.NET",
            "Application programming interface",
            "Convention for representing and interacting with objects in html documents"
        ]
    },
    {
        question: "In which part of the HTML metadata is contained?",
        answer: "head tag",
        options: [
            "head tag",
            "title tag",
            "html tag",
            "body tag"
        ]
    },
    {
        question: "Which element is used to get highlighted text in HTML5?",
        answer: "<mark>",
        options: [
            "<u>",
            "<mark>",
            "<highlight>",
            "<b>"
        ]
    },
    {
        question: "Which of the following is not a HTML5 tag?",
        answer: "<slider>",
        options: [
            "<track>",
            "<video>",
            "<slider>",
            "<source>"
        ]
    },
    {
        question: "How do we write comments in HTML?",
        answer: "<!.....>",
        options: [
            "</.....>",
            "<!.....>",
            "</...../>",
            "<.....!>"
        ]
    },
    {
        question: "Which of the following is not the element associated with the HTML table layout?",
        answer: "color",
        options: [
            "alignment",
            "color",
            "size",
            "spanning"
        ]
    },
    {
        question: "Which element is used for or styling HTML5 layout?",
        answer: "CSS",
        options: [
            "CSS",
            "jQuery",
            "JavaScript",
            "PHP"
        ]
    },
    {
        question: "HTML is a subset of .....",
        answer: "SGML",
        options: [
            "SGMT",
            "SGML",
            "SGME",
            "XHTML"
        ]
    },
    {
        question: "Which of the following HTML tag is used to create an unordered list?",
        answer: "<ul>",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<ll>"
        ]
    },
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
