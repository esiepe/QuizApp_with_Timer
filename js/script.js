// App settings
let time_counter;
let time_counter_line;
let time_limit = 25;
let unit_per_sec = 50 // 30 units = 1 sec

// Quiz related stuff
let cur_que = 0; // current question
let user_score = 0; // user's score

// Result icons
let tick_icon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let cross_icon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Get elements
const start_btn = document.querySelector('.start_btn');

const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');

const quiz_box = document.querySelector('.quiz_box');
const next_btn = quiz_box.querySelector('.next_btn');
const que_counter = quiz_box.querySelector('.total_que');
const que_text = quiz_box.querySelector('.que_text');
const option_list = quiz_box.querySelector('.option_list');
const timer_sec = quiz_box.querySelector('.timer_sec');
const time_line = quiz_box.querySelector('.time_line');

const result_box = document.querySelector('.result_box');
const replay_quiz_btn = result_box.querySelector('.restart');
const quit_quiz_btn = result_box.querySelector('.quit');
const score_text = result_box.querySelector('.score_text');

// Start button clicked
start_btn.onclick = () => {
    let time_limit_label = info_box.querySelector('.info_list .info:first-child span');
    time_limit_label.textContent = time_limit + ' seconds';
    info_box.classList.add('active');
};

// Exit button clicked
exit_btn.onclick = () => {
    info_box.classList.remove('active');
};

// Continue button clicked
continue_btn.onclick = () => {
    info_box.classList.remove('active');
    quiz_box.classList.add('active');
    showQuestion(0);
};

// Next Question button clicked
next_btn.onclick = () => {

    if (++cur_que < questions.length) {
        showQuestion(cur_que);
    } else {
        showResultBox();
    }
};

// Replay Quiz button clicked
replay_quiz_btn.onclick = () => {
    cur_que = 0;
    user_score = 0;
    result_box.classList.remove('active');
    quiz_box.classList.add('active');
    showQuestion(0);
};

// Quit Quiz button clicked
quit_quiz_btn.onclick = () => {
    window.location.reload();
};

// Function to show question
function showQuestion(index) {

    // Show question's content
    let que_tag = '<span>' + (index + 1) + '. ' + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
                    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
                    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
                    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    showCurQueNumber(index);

    // Handle user's answer
    Array.from(option_list.children).forEach(option => {
        option.setAttribute('onclick', 'handleAnswer(this)');
    });

    // Start time counter
    startTimeCounter(time_limit);

    // Start time counter line
    startTimeCounterLine(0);

    // Disable Next button until user answers the question
    next_btn.classList.add('disable');
}

// Show current question number out of total
function showCurQueNumber(index) {
    let que_counter_tag = '<span><p>' + (index + 1) + '</p>of<p>' + questions.length + '</p>Questions</span>';
    que_counter.innerHTML = que_counter_tag;
}

// Function to handle user's answer
function handleAnswer(option) {

    // Show result
    if (option.textContent.replaceAll('<', '&lt;').replaceAll('>', '&gt;') === questions[cur_que].answer) {

        user_score++;
        option.classList.add('correct');
        option.insertAdjacentHTML('beforeend', tick_icon);
    } else {

        option.classList.add('incorrect');
        option.insertAdjacentHTML('beforeend', cross_icon);

        // Auto-select correct option
        showCorrectOption();
    }

    // Disable other options
    Array.from(option_list.children).forEach(option => {
        option.classList.add('disable');
    });

    // Stop time counter
    clearInterval(time_counter);

    // Stop time counter line
    clearInterval(time_counter_line);

    // Show Next button
    next_btn.classList.remove('disable');
}

// Function to show correct option
function showCorrectOption() {
    let correct_option = Array.from(option_list.children).find(
        option => option.textContent.replaceAll('<', '&lt;').replaceAll('>', '&gt;') === questions[cur_que].answer
    );
    if (correct_option != null) {
        correct_option.classList.add('correct');
        correct_option.insertAdjacentHTML('beforeend', tick_icon);
    }
}

// Function to show Result box
function showResultBox() {
    quiz_box.classList.remove('active');
    result_box.classList.add('active');
    score_text.innerHTML = '<span>You got <p>' + user_score + '</p> out of <p>' + questions.length + '</p> questions.</span>';
}

// Function to start time counter
function startTimeCounter(time) {
    clearInterval(time_counter);
    if (time >= 10) {
        timer_sec.textContent = time;
    } else {
        timer_sec.textContent = '0' + time;
    }
    time_counter = setInterval(() => {
        time--;
        if (time >= 10) {
            timer_sec.textContent = time;
        } else if (time > 0) {
            timer_sec.textContent = '0' + time;
        } else {

            timer_sec.textContent = '00';
            clearInterval(time_counter);

            // Auto-select correct option
            showCorrectOption();

            // Disable other options
            Array.from(option_list.children).forEach(option => {
                option.classList.add('disable');
            });

            // Show Next button
            next_btn.classList.remove('disable');
        }
    }, 1000);
}

// Function to start time counter line
function startTimeCounterLine(time_unit) {
    clearInterval(time_counter_line);
    time_line.style.width = '0%';
    time_counter_line = setInterval(() => {
        time_unit++;
        time_line.style.width = (time_unit / (time_limit * unit_per_sec) * 100) + '%';
        if (time_unit >= time_limit * unit_per_sec) {
            clearInterval(time_counter_line);
        }
    }, 1000 / unit_per_sec);
}
