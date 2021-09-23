/* define welcome message block */
var welcome_block = {
    type: "text",
    text: ["<p></p><p></p><p></p><div class='center-content'>If you are using Internet Explorer, Firefox, or Safari, please switch to Google Chrome.</div><p></p><p></p><div class='center-content'>Internet Explorer, Firefox, and Safari are not supported, and your data will not be recorded.</div><p align='center'>Start the task in a quiet environment, and remove sources of distractions, like other programs and background music.</p></div><p align='center'>It will take 20~25 minutes to complete this task.</p></div><p align='center'>Press any key to begin.</p></div>"]
};

/* define welcome id block */
var subject = ["Please enter your participant ID number"]
var id_block = {
    type: 'survey-text',
    questions: [subject]
};


var headphone_inst = {
    type: "text",
    text: ["<p></p><p></p><p></p><div class='center-content'>The following tasks require you to listen to spoken words.</div><p></p><p></p><div class='center-content'>Before continuing, make sure you are wearing a headphone or have your speakers turned on.</div><p align='center'>Press any key to begin.</p></div>"]
};

// create a block of instructions
var practice_instructions_emo = {
    type: 'text',
    text: "<p>For this task, you will see a series of photos.</p>" +
        "<p>For each picture, you should concentrate on the <strong>EMOTION</strong> in the photograph.</p>" +
        "<p>If the emotion is <strong>SAD</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE COLORS</strong> of the photographs.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of instructions for emo_fear
var practice_instructions_emo_fear = {
    type: 'text',
    text: "<p>For this task, you will see a series of photos.</p>" +
        "<p>For each picture, you should concentrate on the <strong>EMOTION</strong> in the photograph.</p>" +
        "<p>If the emotion is <strong>FEAR</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE COLORS</strong> of the photographs.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of reminders
var practice_instructions_emo_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the emotion is <strong>SAD</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}

// create block of reminders for emo fear
var practice_instructions_emo_rem_fear = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the emotion is <strong>FEAR</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}

/* define practice block for emotions*/

// number of practice trials
var n_trials = 20;

var happy = ['static/img/hap.gre.congr.01.jpg', 'static/img/hap.gre.congr.02.jpg', 'static/img/hap.gre.congr.03.jpg', 'static/img/hap.gre.congr.04.jpg',
    'static/img/hap.gre.congr.05.jpg', 'static/img/hap.gre.congr.06.jpg', 'static/img/hap.gre.congr.07.jpg', 'static/img/hap.gre.congr.08.jpg',
    'static/img/hap.gre.congr.09.jpg', 'static/img/hap.gre.congr.10.jpg', 'static/img/hap.gre.congr.11.jpg', 'static/img/hap.gre.congr.12.jpg',
    'static/img/hap.gre.congr.13.jpg', 'static/img/hap.gre.congr.14.jpg', 'static/img/hap.red.incon.01.jpg', 'static/img/hap.red.incon.02.jpg',
    'static/img/hap.red.incon.03.jpg', 'static/img/hap.red.incon.04.jpg', 'static/img/hap.red.incon.05.jpg', 'static/img/hap.red.incon.06.jpg',
    'static/img/hap.red.incon.07.jpg', 'static/img/hap.red.incon.08.jpg', 'static/img/hap.red.incon.09.jpg', 'static/img/hap.red.incon.10.jpg',
    'static/img/hap.red.incon.11.jpg', 'static/img/hap.red.incon.12.jpg', 'static/img/hap.red.incon.13.jpg', 'static/img/hap.red.incon.14.jpg'
];

var sad = ['static/img/sad.gre.incon.01.jpg', 'static/img/sad.gre.incon.02.jpg', 'static/img/sad.gre.incon.03.jpg', 'static/img/sad.gre.incon.04.jpg',
    'static/img/sad.gre.incon.05.jpg', 'static/img/sad.gre.incon.06.jpg', 'static/img/sad.gre.incon.07.jpg', 'static/img/sad.gre.incon.08.jpg',
    'static/img/sad.gre.incon.09.jpg', 'static/img/sad.gre.incon.10.jpg', 'static/img/sad.gre.incon.11.jpg', 'static/img/sad.gre.incon.12.jpg',
    'static/img/sad.gre.incon.13.jpg', 'static/img/sad.gre.incon.14.jpg', 'static/img/sad.red.congr.01.jpg', 'static/img/sad.red.congr.02.jpg',
    'static/img/sad.red.congr.03.jpg', 'static/img/sad.red.congr.04.jpg', 'static/img/sad.red.congr.05.jpg', 'static/img/sad.red.congr.06.jpg',
    'static/img/sad.red.congr.07.jpg', 'static/img/sad.red.congr.08.jpg', 'static/img/sad.red.congr.09.jpg', 'static/img/sad.red.congr.10.jpg',
    'static/img/sad.red.congr.11.jpg', 'static/img/sad.red.congr.12.jpg', 'static/img/sad.red.congr.13.jpg', 'static/img/sad.red.congr.14.jpg'
];

var fear = ['static/img/fea.gre.incon.01.jpg', 'static/img/fea.gre.incon.02.jpg', 'static/img/fea.gre.incon.03.jpg', 'static/img/fea.gre.incon.04.jpg',
    'static/img/fea.gre.incon.05.jpg', 'static/img/fea.gre.incon.06.jpg', 'static/img/fea.gre.incon.07.jpg', 'static/img/fea.gre.incon.08.jpg',
    'static/img/fea.gre.incon.09.jpg', 'static/img/fea.gre.incon.10.jpg', 'static/img/fea.gre.incon.11.jpg', 'static/img/fea.gre.incon.12.jpg',
    'static/img/fea.gre.incon.13.jpg', 'static/img/fea.gre.incon.14.jpg', 'static/img/fea.red.congr.01.jpg', 'static/img/fea.red.congr.02.jpg',
    'static/img/fea.red.congr.03.jpg', 'static/img/fea.red.congr.04.jpg', 'static/img/fea.red.congr.05.jpg', 'static/img/fea.red.congr.06.jpg',
    'static/img/fea.red.congr.07.jpg', 'static/img/fea.red.congr.08.jpg', 'static/img/fea.red.congr.09.jpg', 'static/img/fea.red.congr.10.jpg',
    'static/img/fea.red.congr.11.jpg', 'static/img/fea.red.congr.12.jpg', 'static/img/fea.red.congr.13.jpg', 'static/img/fea.red.congr.14.jpg'
];


var stimuli = [];
var answers_emo = [];
var text_answers_emo = [];

var stimuli_fear = [];
var answers_emo_fear = [];
var text_answers_emo_fear = [];

// randomly choose stimuli
for (var i = 0; i < n_trials; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push(happy[Math.floor(Math.random() * happy.length)]);
        answers_emo.push(74);
        text_answers_emo.push("happy photo");
    } else {
        // pick a letter
        stimuli.push(sad[Math.floor(Math.random() * sad.length)]);
        answers_emo.push(70);
        text_answers_emo.push("sad photo");
    }
}

// randomly choose stimuli for practice emo_fear block
for (var i = 0; i < n_trials; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli_fear.push(happy[Math.floor(Math.random() * happy.length)]);
        answers_emo_fear.push(74);
        text_answers_emo_fear.push("happy photo");
    } else {
        // pick a letter
        stimuli_fear.push(fear[Math.floor(Math.random() * fear.length)]);
        answers_emo_fear.push(70);
        text_answers_emo_fear.push("fear photo");
    }
}

// create categorization block for jspsych
var practice_emo = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_emo,
    text_answer: text_answers_emo,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    timing_feedback_duration: 400,
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the photo.</strong></p></div>",
    on_finish: function(data){
        data.block_value = "emo_sad_prad";
    }
};

// create practice fear block
var practice_emo_fear = {
    type: 'categorize',
    stimuli: stimuli_fear,
    key_answer: answers_emo_fear,
    text_answer: text_answers_emo_fear,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    timing_feedback_duration: 400,
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the photo.</strong></p></div>",
    on_finish: function(data){
        data.block_value = "emo_fear_prac";
    }
};

/* define instructions block */
var instructions_block_emo = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //          "<p>If the emotion is <strong>sad</strong>, press the <strong>f</strong> key</p>" +
        //          "<p>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};

/* define test block */

var test_stimuli = [{
        image: "static/img/sad.gre.incon.01.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.01.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.02.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.02.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.03.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.03.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.04.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.04.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.05.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.05.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.06.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.06.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.07.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.07.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.08.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.08.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.09.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.09.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.10.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.10.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.11.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.11.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.12.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.12.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.13.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.13.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/sad.gre.incon.14.jpg",
        data: {
            response: 'sad.gre'
        }
    },
    {
        image: "static/img/sad.red.congr.14.jpg",
        data: {
            response: 'sad.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.01.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.01.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.02.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.02.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.03.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.03.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.04.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.04.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.05.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.05.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.06.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.06.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.07.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.07.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.08.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.08.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.09.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.09.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.10.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.10.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.11.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.11.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.12.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.12.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.13.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.13.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "static/img/hap.gre.congr.14.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "static/img/hap.red.incon.14.jpg",
        data: {
            response: 'hap.red'
        }
    }
];

/////////////////////////////////////////////////////////////////////////////////////////////////////
// breakpoint between the two arrays
/////////////////////////////////////////////////////////////////////////////////////////////////////

var test_stimuli_fear = [{
    image: "static/img/fea.gre.incon.01.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.01.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.02.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.02.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.03.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.03.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.04.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.04.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.05.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.05.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.06.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.06.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.07.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.07.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.08.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.08.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.09.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.09.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.10.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.10.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.11.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.11.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.12.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.12.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.13.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.13.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/fea.gre.incon.14.jpg",
    data: {
        response: 'fear.gre'
    }
},
{
    image: "static/img/fea.red.congr.14.jpg",
    data: {
        response: 'fear.red'
    }
},
{
    image: "static/img/hap.gre.congr.01.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.01.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.02.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.02.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.03.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.03.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.04.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.04.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.05.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.05.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.06.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.06.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.07.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.07.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.08.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.08.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.09.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.09.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.10.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.10.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.11.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.11.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.12.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.12.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.13.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.13.jpg",
    data: {
        response: 'hap.red'
    }
},
{
    image: "static/img/hap.gre.congr.14.jpg",
    data: {
        response: 'hap.gre'
    }
},
{
    image: "static/img/hap.red.incon.14.jpg",
    data: {
        response: 'hap.red'
    }
}
];

var all_trials = jsPsych.randomization.repeat(test_stimuli, 1, true);
var all_trials_fear = jsPsych.randomization.repeat(test_stimuli_fear, 1, true);

var test_block_emo = {
    type: "single-stim",
    stimuli: all_trials.image,
    choices: ['f', 'j'],
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION in the photo.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true, // if true, advance to next trial immediately after response
    //timing_post_trial: 50 // 50 ms to show a blank screen before the next trial.
    //data: { block_type: 'emo_sad' }
    on_finish: function(data){
        data.block_value = "emo_sad";
    }
};

var test_block_emo_fear = {
    type: "single-stim",
    stimuli: all_trials_fear.image,
    choices: ['f', 'j'],
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION in the photo.</strong></p></div>",
    data: all_trials_fear.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true, // if true, advance to next trial immediately after response
    //timing_post_trial: 50 // 50 ms to show a blank screen before the next trial.
    //data: { block_type: 'emo_fear' }
    on_finish: function(data){
        data.block_value = "emo_fear";
    }
};

// image resources for populating test
var images = ['static/img/sad.gre.incon.01.jpg', 'static/img/sad.red.congr.01.jpg', 'static/img/sad.gre.incon.02.jpg', 'static/img/sad.red.congr.02.jpg',
    'static/img/sad.gre.incon.03.jpg', 'static/img/sad.red.congr.03.jpg', 'static/img/sad.gre.incon.04.jpg', 'static/img/sad.red.congr.04.jpg',
    'static/img/sad.gre.incon.05.jpg', 'static/img/sad.red.congr.05.jpg', 'static/img/sad.gre.incon.06.jpg', 'static/img/sad.red.congr.06.jpg',
    'static/img/sad.gre.incon.07.jpg', 'static/img/sad.red.congr.07.jpg', 'static/img/sad.gre.incon.08.jpg', 'static/img/sad.red.congr.08.jpg',
    'static/img/sad.gre.incon.09.jpg', 'static/img/sad.red.congr.09.jpg', 'static/img/sad.gre.incon.10.jpg', 'static/img/sad.red.congr.10.jpg',
    'static/img/sad.gre.incon.11.jpg', 'static/img/sad.red.congr.11.jpg', 'static/img/sad.gre.incon.12.jpg', 'static/img/sad.red.congr.12.jpg',
    'static/img/sad.gre.incon.13.jpg', 'static/img/sad.red.congr.13.jpg', 'static/img/sad.gre.incon.14.jpg', 'static/img/sad.red.congr.14.jpg',
    'static/img/hap.gre.congr.01.jpg', 'static/img/hap.red.incon.01.jpg', 'static/img/hap.gre.congr.02.jpg', 'static/img/hap.red.incon.02.jpg',
    'static/img/hap.gre.congr.03.jpg', 'static/img/hap.red.incon.03.jpg', 'static/img/hap.gre.congr.04.jpg', 'static/img/hap.red.incon.04.jpg',
    'static/img/hap.gre.congr.05.jpg', 'static/img/hap.red.incon.05.jpg', 'static/img/hap.gre.congr.06.jpg', 'static/img/hap.red.incon.06.jpg',
    'static/img/hap.gre.congr.07.jpg', 'static/img/hap.red.incon.07.jpg', 'static/img/hap.gre.congr.08.jpg', 'static/img/hap.red.incon.08.jpg',
    'static/img/hap.gre.congr.09.jpg', 'static/img/hap.red.incon.09.jpg', 'static/img/hap.gre.congr.10.jpg', 'static/img/hap.red.incon.10.jpg',
    'static/img/hap.gre.congr.11.jpg', 'static/img/hap.red.incon.11.jpg', 'static/img/hap.gre.congr.12.jpg', 'static/img/hap.red.incon.12.jpg',
    'static/img/hap.gre.congr.13.jpg', 'static/img/hap.red.incon.13.jpg', 'static/img/hap.gre.congr.14.jpg', 'static/img/hap.red.incon.14.jpg',
    'static/img/fea.gre.incon.01.jpg', 'static/img/fea.gre.incon.02.jpg', 'static/img/fea.gre.incon.03.jpg', 'static/img/fea.gre.incon.04.jpg',
    'static/img/fea.gre.incon.05.jpg', 'static/img/fea.gre.incon.06.jpg', 'static/img/fea.gre.incon.07.jpg', 'static/img/fea.gre.incon.08.jpg',
    'static/img/fea.gre.incon.09.jpg', 'static/img/fea.gre.incon.10.jpg', 'static/img/fea.gre.incon.11.jpg', 'static/img/fea.gre.incon.12.jpg',
    'static/img/fea.gre.incon.13.jpg', 'static/img/fea.gre.incon.14.jpg', 'static/img/fea.red.congr.01.jpg', 'static/img/fea.red.congr.02.jpg',
    'static/img/fea.red.congr.03.jpg', 'static/img/fea.red.congr.04.jpg', 'static/img/fea.red.congr.05.jpg', 'static/img/fea.red.congr.06.jpg',
    'static/img/fea.red.congr.07.jpg', 'static/img/fea.red.congr.08.jpg', 'static/img/fea.red.congr.09.jpg', 'static/img/fea.red.congr.10.jpg',
    'static/img/fea.red.congr.11.jpg', 'static/img/fea.red.congr.12.jpg', 'static/img/fea.red.congr.13.jpg', 'static/img/fea.red.congr.14.jpg'
];
function updateLoadedCount(nLoaded) {
    var percentcomplete = nLoaded / images.length * 100;
    // could put something fancier here, like a progress bar
    // or updating text in the DOM.
    console.log('Loaded ' + percentcomplete + '% of images');
}

/* define debrief message block */
var change_inst = {
    type: "text",
    text: "<p></p><p align='center' style='font-size:48px'>NOW THE TASK HAS CHANGED</p>" +
        "<p align='center'>Press any key for more instructions.</p>"
};

var practice_instructions_col = {
    type: 'text',
    text: "<p>For this task, you will see a series of photos.</p>" +
        "<p>For each picture, you should concentrate on the <strong>COLOR</strong> of the photograph.</p>" +
        "<p>If the color is <strong>RED</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the color is <strong>GREEN</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE EMOTIONS</strong> in the photographs.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of reminders
var practice_instructions_col_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the color is <strong>RED</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the color is <strong>GREEN</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}

/* define practice block for colors*/

var red = ['static/img/sad.red.congr.01.jpg', 'static/img/sad.red.congr.02.jpg', 'static/img/sad.red.congr.03.jpg', 'static/img/sad.red.congr.04.jpg',
    'static/img/sad.red.congr.05.jpg', 'static/img/sad.red.congr.06.jpg', 'static/img/sad.red.congr.07.jpg', 'static/img/sad.red.congr.08.jpg',
    'static/img/sad.red.congr.09.jpg', 'static/img/sad.red.congr.10.jpg', 'static/img/sad.red.congr.11.jpg', 'static/img/sad.red.congr.12.jpg',
    'static/img/sad.red.congr.13.jpg', 'static/img/sad.red.congr.14.jpg', 'static/img/hap.red.incon.01.jpg', 'static/img/hap.red.incon.02.jpg',
    'static/img/hap.red.incon.03.jpg', 'static/img/hap.red.incon.04.jpg', 'static/img/hap.red.incon.05.jpg', 'static/img/hap.red.incon.06.jpg',
    'static/img/hap.red.incon.07.jpg', 'static/img/hap.red.incon.08.jpg', 'static/img/hap.red.incon.09.jpg', 'static/img/hap.red.incon.10.jpg',
    'static/img/hap.red.incon.11.jpg', 'static/img/hap.red.incon.12.jpg', 'static/img/hap.red.incon.13.jpg', 'static/img/hap.red.incon.14.jpg'
];

var red_fear = ['static/img/fea.red.congr.01.jpg', 'static/img/fea.red.congr.02.jpg', 'static/img/fea.red.congr.03.jpg', 'static/img/fea.red.congr.04.jpg',
    'static/img/fea.red.congr.05.jpg', 'static/img/fea.red.congr.06.jpg', 'static/img/fea.red.congr.07.jpg', 'static/img/fea.red.congr.08.jpg',
    'static/img/fea.red.congr.09.jpg', 'static/img/fea.red.congr.10.jpg', 'static/img/fea.red.congr.11.jpg', 'static/img/fea.red.congr.12.jpg',
    'static/img/fea.red.congr.13.jpg', 'static/img/fea.red.congr.14.jpg', 'static/img/hap.red.incon.01.jpg', 'static/img/hap.red.incon.02.jpg',
    'static/img/hap.red.incon.03.jpg', 'static/img/hap.red.incon.04.jpg', 'static/img/hap.red.incon.05.jpg', 'static/img/hap.red.incon.06.jpg',
    'static/img/hap.red.incon.07.jpg', 'static/img/hap.red.incon.08.jpg', 'static/img/hap.red.incon.09.jpg', 'static/img/hap.red.incon.10.jpg',
    'static/img/hap.red.incon.11.jpg', 'static/img/hap.red.incon.12.jpg', 'static/img/hap.red.incon.13.jpg', 'static/img/hap.red.incon.14.jpg'
];

var green = ['static/img/sad.gre.incon.01.jpg', 'static/img/sad.gre.incon.02.jpg', 'static/img/sad.gre.incon.03.jpg', 'static/img/sad.gre.incon.04.jpg',
    'static/img/sad.gre.incon.05.jpg', 'static/img/sad.gre.incon.06.jpg', 'static/img/sad.gre.incon.07.jpg', 'static/img/sad.gre.incon.08.jpg',
    'static/img/sad.gre.incon.09.jpg', 'static/img/sad.gre.incon.10.jpg', 'static/img/sad.gre.incon.11.jpg', 'static/img/sad.gre.incon.12.jpg',
    'static/img/sad.gre.incon.13.jpg', 'static/img/sad.gre.incon.14.jpg', 'static/img/hap.gre.congr.01.jpg', 'static/img/hap.gre.congr.02.jpg',
    'static/img/hap.gre.congr.03.jpg', 'static/img/hap.gre.congr.04.jpg', 'static/img/hap.gre.congr.05.jpg', 'static/img/hap.gre.congr.06.jpg',
    'static/img/hap.gre.congr.07.jpg', 'static/img/hap.gre.congr.08.jpg', 'static/img/hap.gre.congr.09.jpg', 'static/img/hap.gre.congr.10.jpg',
    'static/img/hap.gre.congr.11.jpg', 'static/img/hap.gre.congr.12.jpg', 'static/img/hap.gre.congr.13.jpg', 'static/img/hap.gre.congr.14.jpg'
];

var green_fear = ['static/img/fea.gre.incon.01.jpg', 'static/img/fea.gre.incon.02.jpg', 'static/img/fea.gre.incon.03.jpg', 'static/img/fea.gre.incon.04.jpg',
    'static/img/fea.gre.incon.05.jpg', 'static/img/fea.gre.incon.06.jpg', 'static/img/fea.gre.incon.07.jpg', 'static/img/fea.gre.incon.08.jpg',
    'static/img/fea.gre.incon.09.jpg', 'static/img/fea.gre.incon.10.jpg', 'static/img/fea.gre.incon.11.jpg', 'static/img/fea.gre.incon.12.jpg',
    'static/img/fea.gre.incon.13.jpg', 'static/img/fea.gre.incon.14.jpg', 'static/img/hap.gre.congr.01.jpg', 'static/img/hap.gre.congr.02.jpg',
    'static/img/hap.gre.congr.03.jpg', 'static/img/hap.gre.congr.04.jpg', 'static/img/hap.gre.congr.05.jpg', 'static/img/hap.gre.congr.06.jpg',
    'static/img/hap.gre.congr.07.jpg', 'static/img/hap.gre.congr.08.jpg', 'static/img/hap.gre.congr.09.jpg', 'static/img/hap.gre.congr.10.jpg',
    'static/img/hap.gre.congr.11.jpg', 'static/img/hap.gre.congr.12.jpg', 'static/img/hap.gre.congr.13.jpg', 'static/img/hap.gre.congr.14.jpg'
];

var stimuli = [];
var answers_col = [];
var text_answers_col = [];

var stimuli_fear = [];
var answers_col_fear = [];
var text_answers_col_fear = [];

// randomly choose stimuli
for (var i = 0; i < n_trials; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push(green[Math.floor(Math.random() * green.length)]);
        answers_col.push(74);
        text_answers_col.push("green photo");
    } else {
        // pick a letter
        stimuli.push(red[Math.floor(Math.random() * red.length)]);
        answers_col.push(70);
        text_answers_col.push("red photo");
    }
}

// randomly choose stimuli for happy/fea block
for (var i = 0; i < n_trials; i++) {
    console.log("inside happyfear");
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli_fear.push(green_fear[Math.floor(Math.random() * green_fear.length)]);
        answers_col_fear.push(74);
        text_answers_col_fear.push("green photo");
    } else {
    
        // pick a letter
        stimuli_fear.push(red_fear[Math.floor(Math.random() * red.length)]);
        answers_col_fear.push(70);
        text_answers_col_fear.push("red photo");
    }
}


// create categorization block for jspsych
var practice_col = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_col,
    text_answer: text_answers_col,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for green. Press 'j' for red.</p></div>"
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the COLOR of the photo.</strong></p></div>",
    on_finish: function(data){
        data.block_value = "col_sad_prac";
    }
};

// create categorization block for jspsych
var practice_col_fear = {
    type: 'categorize',
    stimuli: stimuli_fear,
    key_answer: answers_col_fear,
    text_answer: text_answers_col_fear,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for green. Press 'j' for red.</p></div>"
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the COLOR of the photo.</strong></p></div>",
    on_finish: function(data){
        data.block_value = "col_fear_prac";
    }
};

/* define instructions block */
var instructions_block_col = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //      "<p>If the color is <strong>GREEN</strong>, press the <strong>f</strong> key</p>" +
        //      "<p>If the color is <strong>RED</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};

var test_block_col = {
    type: "single-stim",
    stimuli: all_trials.image,
    choices: ['f', 'j'],
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the COLOR of the photo.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true, // if true, advance to next trial immediately after response
    //timing_post_trial: 50 // 50 ms to show a blank screen before the next trial.
    //data: { block_type: 'col_sad' }
    on_finish: function(data){
        data.block_value = "col_sad";
    }
};

var test_block_col_fear = {
    type: "single-stim",
    stimuli: all_trials_fear.image,
    choices: ['f', 'j'],
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the COLOR of the photo.</strong></p></div>",
    data: all_trials_fear.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true, // if true, advance to next trial immediately after response
    //timing_post_trial: 50 // 50 ms to show a blank screen before the next trial.
    //data: { block_type: 'col_fear' }
    on_finish: function(data){
        data.block_value = "col_fear";
    }
};

// create a block of instructions
var practice_instructions_ton = {
    type: 'text',
    text: "<p>For this task, you will hear a series of words.</p>" +
        "<p>For each word, you should concentrate on the <strong>EMOTION (TONE OF VOICE)</strong>.</p>" +
        "<p>If the emotion is <strong>NEGATIVE</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the emotion is <strong>POSITIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE MEANING OF THE WORDS</strong> that the person is saying.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of instructions reminder
var practice_instructions_ton_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the emotion is <strong>NEGATIVE</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the emotion is <strong>POSITIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}



// number of trials
var n_trials_ton = 20;

var happy = ['/static/mp3/hap.pos.congr.01.mp3', '/static/mp3/hap.pos.congr.02.mp3', '/static/mp3/hap.pos.congr.03.mp3', '/static/mp3/hap.pos.congr.04.mp3',
    '/static/mp3/hap.pos.congr.05.mp3', '/static/mp3/hap.pos.congr.06.mp3', '/static/mp3/hap.pos.congr.07.mp3', '/static/mp3/hap.pos.congr.08.mp3',
    '/static/mp3/hap.pos.congr.09.mp3', '/static/mp3/hap.pos.congr.10.mp3', '/static/mp3/hap.pos.congr.11.mp3', '/static/mp3/hap.neg.incon.01.mp3',
    '/static/mp3/hap.neg.incon.02.mp3', '/static/mp3/hap.neg.incon.03.mp3', '/static/mp3/hap.neg.incon.04.mp3', '/static/mp3/hap.neg.incon.05.mp3',
    '/static/mp3/hap.neg.incon.06.mp3', '/static/mp3/hap.neg.incon.07.mp3', '/static/mp3/hap.neg.incon.08.mp3', '/static/mp3/hap.neg.incon.09.mp3',
    '/static/mp3/hap.neg.incon.10.mp3', '/static/mp3/hap.neg.incon.11.mp3'
];

var sad = ['/static/mp3/sad.neg.congr.01.mp3', '/static/mp3/sad.neg.congr.02.mp3', '/static/mp3/sad.neg.congr.03.mp3', '/static/mp3/sad.neg.congr.04.mp3',
    '/static/mp3/sad.neg.congr.05.mp3', '/static/mp3/sad.neg.congr.06.mp3', '/static/mp3/sad.neg.congr.07.mp3', '/static/mp3/sad.neg.congr.08.mp3',
    '/static/mp3/sad.neg.congr.09.mp3', '/static/mp3/sad.neg.congr.10.mp3', '/static/mp3/sad.neg.congr.11.mp3', '/static/mp3/sad.pos.incon.01.mp3',
    '/static/mp3/sad.pos.incon.02.mp3', '/static/mp3/sad.pos.incon.03.mp3', '/static/mp3/sad.pos.incon.04.mp3', '/static/mp3/sad.pos.incon.05.mp3',
    '/static/mp3/sad.pos.incon.06.mp3', '/static/mp3/sad.pos.incon.07.mp3', '/static/mp3/sad.pos.incon.08.mp3', '/static/mp3/sad.pos.incon.09.mp3',
    '/static/mp3/sad.pos.incon.10.mp3', '/static/mp3/sad.pos.incon.11.mp3'
];

var stimuli = [];
var answers_ton = [];
var text_answers_ton = [];

// randomly choose stimuli
for (var i = 0; i < n_trials_ton; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push("<audio class='audio' autoplay><source src='" + happy[Math.floor(Math.random() * happy.length)] + "'> type='audio/wav'></audio>");
        answers_ton.push(74);
        text_answers_ton.push("happy tone");
    } else {
        // pick a letter
        stimuli.push("<audio class='audio' autoplay><source src='" + sad[Math.floor(Math.random() * sad.length)] + "'> type='audio/wav'></audio>");
        answers_ton.push(70);
        text_answers_ton.push("sad tone");
    }
}

// create categorization block for jspsych
var practice_ton = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_ton,
    text_answer: text_answers_ton,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    is_html: true,
    show_stim_with_feedback: false,
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for a happy tone. Press 'j' for a sad tone.</p></div>"
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the word.</strong></p></div>",
    on_finish: function(data){
        data.block_value = "aud_ton_prac";
    }
};

/* define instructions block */
var instructions_block_ton = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //      "<p>If the emotion is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        //      "<p>If the emotion is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};

/* define test block */
var test_stimuli = [{
        audio: "/static/mp3/sad.neg.congr.01.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.01.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.02.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.02.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.03.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.03.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.04.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.04.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.05.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.06.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.05.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.07.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.06.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.07.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.08.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.08.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.09.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.09.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.10.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/sad.neg.congr.11.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.10.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.pos.congr.11.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.01.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.01.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.02.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.02.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.03.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.03.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.04.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.04.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.05.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.06.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.05.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.07.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.06.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.07.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.08.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.08.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.09.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.09.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.10.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/hap.neg.incon.11.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.10.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "/static/mp3/sad.pos.incon.11.mp3",
        data: {
            response: 'emotion.incon'
        }
    }
];

var all_trials = jsPsych.randomization.repeat(test_stimuli, 1, true);
var all_trials_fear = jsPsych.randomization.repeat(test_stimuli_fear, 1, true);

var after_response = function(key_info) {
    jsPsych.finishTrial();
}

var test_block_ton = {
    type: "single-audio",
    stimuli: all_trials.audio,
    choices: ['f', 'j'],
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the word.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true, // if true, advance to next trial immediately after response
    on_finish: function(data){
        data.block_value = "aud_ton";
    }
};


/* define debrief message block */
var change_inst = {
    type: "text",
    text: "<p></p><p align='center' style='font-size:48px'>NOW THE TASK HAS CHANGED</p>" +
        "<p align='center'>Press any key for more instructions.</p>"
};

// create a block of instructions
var practice_instructions_val = {
    type: 'text',
    text: "<p>For this task, you will hear a series of words.</p>" +
        "<p>For each word, you should concentrate on the <strong>MEANING OF THE WORD</strong>.</p>" +
        "<p>If the meaning is <strong>NEGATIVE</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the meaning is <strong>POSITIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE EMOTIONS</strong> in the sound clips.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of instructions reminder
var practice_instructions_val_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the meaning is <strong>NEGATIVE</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the meaning is <strong>POSITIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"
}

// number of trials
var n_trials_val = 20;
var positive = ['/static/mp3/hap.pos.congr.01.mp3', '/static/mp3/hap.pos.congr.02.mp3', '/static/mp3/hap.pos.congr.03.mp3', '/static/mp3/hap.pos.congr.04.mp3',
    '/static/mp3/hap.pos.congr.05.mp3', '/static/mp3/hap.pos.congr.06.mp3', '/static/mp3/hap.pos.congr.07.mp3', '/static/mp3/hap.pos.congr.08.mp3',
    '/static/mp3/hap.pos.congr.09.mp3', '/static/mp3/hap.pos.congr.10.mp3', '/static/mp3/hap.pos.congr.11.mp3', '/static/mp3/sad.pos.incon.01.mp3',
    '/static/mp3/sad.pos.incon.02.mp3', '/static/mp3/sad.pos.incon.03.mp3', '/static/mp3/sad.pos.incon.04.mp3', '/static/mp3/sad.pos.incon.05.mp3',
    '/static/mp3/sad.pos.incon.06.mp3', '/static/mp3/sad.pos.incon.07.mp3', '/static/mp3/sad.pos.incon.08.mp3', '/static/mp3/sad.pos.incon.09.mp3',
    '/static/mp3/sad.pos.incon.10.mp3', '/static/mp3/sad.pos.incon.11.mp3'
];

var negative = ['/static/mp3/hap.neg.incon.01.mp3', '/static/mp3/hap.neg.incon.02.mp3', '/static/mp3/hap.neg.incon.03.mp3', '/static/mp3/hap.neg.incon.04.mp3',
    '/static/mp3/hap.neg.incon.05.mp3', '/static/mp3/hap.neg.incon.06.mp3', '/static/mp3/hap.neg.incon.07.mp3', '/static/mp3/hap.neg.incon.08.mp3',
    '/static/mp3/hap.neg.incon.09.mp3', '/static/mp3/hap.neg.incon.10.mp3', '/static/mp3/hap.neg.incon.11.mp3', '/static/mp3/sad.neg.congr.01.mp3',
    '/static/mp3/sad.neg.congr.02.mp3', '/static/mp3/sad.neg.congr.03.mp3', '/static/mp3/sad.neg.congr.04.mp3', '/static/mp3/sad.neg.congr.05.mp3',
    '/static/mp3/sad.neg.congr.06.mp3', '/static/mp3/sad.neg.congr.07.mp3', '/static/mp3/sad.neg.congr.08.mp3', '/static/mp3/sad.neg.congr.09.mp3',
    '/static/mp3/sad.neg.congr.10.mp3', '/static/mp3/sad.neg.congr.11.mp3'
];

var stimuli = [];
var answers_val = [];
var text_answers_val = [];

// randomly choose stimuli
for (var i = 0; i < n_trials_val; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push("<audio class='audio' autoplay><source src='" + positive[Math.floor(Math.random() * positive.length)] + "'> type='audio/wav'></audio>");
        answers_val.push(74);
        text_answers_val.push("positive valence");
    } else {
        // pick a letter
        stimuli.push("<audio class='audio' autoplay><source src='" + negative[Math.floor(Math.random() * negative.length)] + "'> type='audio/wav'></audio>");
        answers_val.push(70);
        text_answers_val.push("negative valence");
    }
}

// create categorization block for jspsych
var practice_val = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_val,
    text_answer: text_answers_val,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    is_html: true,
    show_stim_with_feedback: false,
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for a positive word. Press 'j' for a negative word.</p></div>"
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the MEANING of the word.</strong></p></div>",
    //data: { block_type: 'aud_val' }
    on_finish: function(data){
        data.block_value = "aud_val_prac";
    }
};

/* define instructions block */
var instructions_block_val = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //      "<p>If the meaning is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        //      "<p>If the meaning is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};


var test_block_val = {
    type: "single-audio",
    stimuli: all_trials.audio,
    choices: ['f', 'j'],
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the MEANING of the word.</strong></p></div>",
    data: all_trials.data,
    //data: { image_type: 'A', image_typee: 'B',  all_trials.data },
    //data: {image_type: 'A'},
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true, // if true, advance to next trial immediately after response
    //data: { block_type: 'aud_val' }
    on_finish: function(data){
        data.block_value = "aud_val";
    }
};

var save_data_block = {
    type: 'call-function',
    func: function() {
        saveData("tionce_voices", jsPsych.data.dataAsCSV())
    },
    timing_post_trial: 0
}

/* define debrief message block */
var debrief_block = {
    type: "text",
    text: "<div class='center-content'>Thank you. Your responses have been recorded, and you have completed this task.</div>",
    cont_key: ['q']
};



/* create experiment definition array */
var experiment = [];


// create element blocks for tests
var emo_sad = [practice_instructions_emo,
    practice_instructions_emo_rem,
    practice_emo,
    instructions_block_emo,
    test_block_emo];

// emo_fear
var emo_fear = [practice_instructions_emo_fear,
    practice_instructions_emo_rem_fear,
    practice_emo_fear,
    instructions_block_emo,
    test_block_emo_fear];

// happy_sad
var col_sad = [practice_instructions_col, 
    practice_instructions_col_rem,
    practice_col,
    instructions_block_col,
    test_block_col];

// col_fear
var col_fear = [practice_instructions_col, 
    practice_instructions_col_rem,
    practice_col_fear,
    instructions_block_col,
    test_block_col_fear];

// column_block_headphone
var aud_ton = [headphone_inst,
    practice_instructions_ton,
    practice_instructions_ton_rem,
    practice_ton,
    instructions_block_ton,
    test_block_ton];

// column_block_val
var aud_value = [headphone_inst,
    practice_instructions_val,
    practice_instructions_val_rem,
    practice_val,
    instructions_block_val,
    test_block_val];

// multidimensional array filled with the above test blocks
// first block has emo and col tests
var block = [
    emo_sad, col_sad, emo_fear, col_fear
]

// for second block with headphone and val tests
var block2 = [
    aud_ton, aud_value
]

// randomizes above blocks during each run
function test_scrambler(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// randomize tests inside each block
// keeps block-specific tests in their respective blocks
test_scrambler(block);
test_scrambler(block2);

// pushes the called element of the randomized array onto
// the experiment array, which is the array that builds the 
// the study layout
function datapusher(input_arr, location){
    for(i = 0; i < input_arr[location].length; i++){
        experiment.push(input_arr[location][i]);
    }
}

// build the test's layout
experiment.push(welcome_block);
experiment.push(id_block);

datapusher(block, 0);
experiment.push(change_inst);
datapusher(block, 1);
experiment.push(change_inst);
datapusher(block, 2);
experiment.push(change_inst);
datapusher(block, 3);

experiment.push(change_inst);
datapusher(block2, 0);
experiment.push(change_inst);
datapusher(block2, 1);

experiment.push(save_data_block);
experiment.push(debrief_block);


// after finishing, posts content of test to the Flask backend
function saveData(filename, filedata) {
    console.log("Saving data: ", filename, filedata)
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "/api/save_data",
      data: JSON.stringify({
        study: filename,
        data: filedata,
      }),
      dataType: "json",
      success: function (data) {
        console.log("The save was a success")
        console.log(data);
      },
    });
}


jsPsych.init({
    experiment_structure: experiment,
    on_finish: function(data) {
        console.log("Initating done")
    }
});

function startExperiment() {
    jsPsych.preloadImages(images, function() {       
    }, function(nLoaded) {
        updateLoadedCount(nLoaded);
    });
}

startExperiment();