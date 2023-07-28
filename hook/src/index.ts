import { Dialute, SberRequest } from 'dialute';
const textToCommand = (texts: string[]) => {
    console.log('textToCommand in index.ts');
    let text = texts.join(' ');
    text = text.toLocaleLowerCase();

    let smartapp = ['Английский крокодил', 'запусти английский крокодил', 'включи английский крокодил', 'активируй английский крокодил', 'открой английский крокодил', 'давай английский крокодил', 'поиграем английский крокодил'];
    let changemode = ['режим'];
    let changeword = ['покажи слово', 'новое слово','покажи новое слово','другое слово','поменяй слово','смени слово','покажи другое слово', 'следующее', 'следующее слово'];
    let helps = ['справка', 'помог', 'помощ', 'как игр', 'научи', 'почему', 'что делать', 'что умеешь', 'правила'];
    let greets = ['привет', 'здравствуй', 'здарова', 'здорова', 'хай', 'хеллоу'];
    let restarts = ['заново', 'новая игра', 'с начала', 'перезап', 'снова', 'по новой'];
    let guessedright = ['угадал','угадано','выиграл','отгадал','отгадано', 'выиграно', 'да', 'правильно', 'получилось'];
    let guessedwrong = ['не угадал','не угадано','не выиграл','не отгадал','не отгадано', 'не выиграно','неугаданно', 'нет', 'неправильно'];
    let close = ['закр','закрой помощь','скрой помощь','закрой справку', 'скрой справку', 'закрой мануал', 'скрой мануал', 'убери помощь', 'убери справку', 'убери мануал', 'поня', 'ясно', 'понял'];
    let value = ['оцен'];

    for (let dir of smartapp) {
        if (text.includes(dir)) return {type: 'smartapp'};
    }
    for (let dir of changeword) {
        if (text.includes(dir)) return {type: 'changeword'};
    }
    for (let dir of changemode) {
        if (text.includes(dir)) return {type: 'changemode'};
    }
    for (let dir of close){
        if (text.includes(dir)) return {type: 'close'};
    }
    for (let help of helps){
        if (text.includes(help)) return {type: 'help'};
    }
    for (let greet of greets){
        if (text.includes(greet)) return {type: 'greet'};
    }
    for (let restart of restarts){
        if (text.includes(restart)) return {type: 'restart'};
    }
    for (let dir of guessedwrong){
        if (text.includes(dir)) return {type: 'guessedwrong'};
    }
    for (let dir of guessedright){
        if (text.includes(dir)) return {type: 'guessedright'};
    }
    for (let dir of value){
        if (text.includes(dir)) return {type: 'value'};
    }
    if (text.length <= 1 ) return {type: 'double'};

    return {type: 'fail'};
}

function* script(r: SberRequest) {
    let count = 0;
    let rsp = r.buildRsp();
    rsp.kbrd = ['Оценить'];
    let changemodePhrases = ['Сделано!', 'Готово!', 'Новый режим включён!'];
    let changewordPhrases = ['Сделано!', 'Готово!', 'Новое слово на экране!', 'Внимание на экран', 'Слово появилось!'];
    let maleofficialFailPhrases = ['Я пока не выучил эту команду. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет', 'Расшифровка этого займет несколько часов. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет',
        'Над этим мне нужно подумать. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет', 'Разработчики работают над добавлением этой команды. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет',
        'Скоро я пойму, что это значит. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет'];
    let maleno_officialFailPhrases = ['Я пока не выучил эту команду. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет', 'Расшифровка этого займет несколько часов. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет',
        'Над этим мне нужно подумать. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет', 'Разработчики работают над добавлением этой команды. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет',
        'Скоро я пойму, что это значит. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет'];
    let femaleofficialFailPhrases = ['Я пока не выучила эту команду. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет', 'Расшифровка этого займет несколько часов. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет',
        'Над этим мне нужно подумать. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет', 'Разработчики работают над добавлением этой команды. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет',
        'Скоро я пойму, что это значит. Лучше скажите «помощь» или нажмите на одноимённую кнопку, возможно, это чем-то поможет'];
    let femaleno_officialFailPhrases = ['Я пока не выучила эту команду. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет', 'Расшифровка этого займет несколько часов. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет',
        'Над этим мне нужно подумать. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет', 'Разработчики работают над добавлением этой команды. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет',
        'Скоро я пойму, что это значит. Лучше скажи «помощь» или нажми на одноимённую кнопку, возможно, это чем-то поможет'];
    let GuessedRightPhrases = ['Так держать!', 'Превосходно!', 'Замечательно!', 'Хорошая работа!'];
    let GuessedWrongPhrases = ['Ничего страшного!', 'Повезёт в следующий раз!', 'Не всё так плохо!', 'Неприятности случаются'];
    let {gender, appeal} = r.body.payload.character;
    
    let phrase;
    let phraseIndex;
    phrase = `Добро пожаловать в приложение «Английский крокодил»! где ${(appeal === 'official' ? 'вам' : 'тебе')} нужно объяснить слово с экрана, используя только мимику, жесты и движения. Все слова даны на английском, надеюсь это поможет улучшить твои навыки в нем!`;
    rsp.msg = phrase;
    rsp.data = {type: 'init'};
    yield rsp;

    while (true) {
        rsp = r.buildRsp();
        rsp.kbrd = ['Оценить'];
        gender = r.body.payload.character.gender;
        appeal = r.body.payload.character.appeal;
        if (r.type === 'SERVER_ACTION' && r.act?.action_id === 'help') {
            rsp.data = {type: 'help'}
            rsp.msg = '';
        } else if (r.type === 'SERVER_ACTION' && r.act?.action_id === 'restart') {
            rsp.msg = 'Начинаю заново';
            rsp.data = {type: 'restart'};
        } else if (r.type === 'SERVER_ACTION' && r.act?.action_id === 'changeword') {
            rsp.data = {type: 'changeword'};
            phraseIndex = Math.floor(Math.random() * changewordPhrases.length);
            rsp.msg = changewordPhrases[phraseIndex];
        } else if (r.type === 'SERVER_ACTION' && r.act?.action_id === 'changemode') {
            rsp.data = {type: 'changemode'};
            phraseIndex = Math.floor(Math.random() * changemodePhrases.length);
            rsp.msg = changemodePhrases[phraseIndex];
        } else if (r.type === 'SERVER_ACTION' && r.act?.action_id === 'guessedright') {
            rsp.data = {type: 'guessedright'};
            phraseIndex = Math.floor(Math.random() * GuessedRightPhrases.length);
            rsp.msg = GuessedRightPhrases[phraseIndex];
        } else if (r.type === 'SERVER_ACTION' && r.act?.action_id === 'guessedwrong') {
            rsp.data = {type: 'guessedwrong'};
            phraseIndex = Math.floor(Math.random() * GuessedWrongPhrases.length);
            rsp.msg = GuessedWrongPhrases[phraseIndex];
        } else if (r.type !== "MESSAGE_TO_SKILL" && r.type !== "SERVER_ACTION" &&
            r.type !== "RUN_APP" && r.type !== "CLOSE_APP") {
            rsp.data = {type: 'mark'};
            rsp.msg = 'Спасибо за оценку';
        } else if (r.type === 'MESSAGE_TO_SKILL') {
            let texts = r.nlu.texts;
            let command = textToCommand(texts);
            if (command.type === 'changeword') {
                let phraseIndex = Math.floor(Math.random() * changewordPhrases.length);
                rsp.msg = changewordPhrases[phraseIndex];
                rsp.data = command;
            } else if (command.type === 'guessedright') {
                let phraseIndex = Math.floor(Math.random() * GuessedRightPhrases.length);
                rsp.msg = GuessedRightPhrases[phraseIndex];
                rsp.data = command;
            } else if (command.type === 'guessedwrong') {
                let phraseIndex = Math.floor(Math.random() * GuessedWrongPhrases.length);
                rsp.msg = GuessedWrongPhrases[phraseIndex];
                rsp.data = command;
            }  else if (command.type === 'close') {
                rsp.data = command;
                rsp.msg = 'Закрываю';
            } else if (command.type === 'help') {
                rsp.data = command;
            } else if (command.type === 'restart') {
                rsp.msg = 'Начинаю заново';
                rsp.data = command;
            } else if (command.type === 'greet') {
                    rsp.msg =  ` Добро пожаловать в приложение «Английский крокодил»! Данный смартап предназначен для всем известной игры, где тебе нужно объяснить слово с экрана, используя только мимику, жесты и движения. Здесь можно попросить новое слово, вести счёт отгаданных слов!`;
                    rsp.data = command;
            } else if (command.type === 'smartapp') {
                if (count == 0) {
                    rsp.msg = ` Добро пожаловать в приложение «Английский крокодил»! Данный смартап предназначен для всем известной игры, где тебе нужно объяснить слово с экрана, используя только мимику, жесты и движения. Здесь можно попросить новое слово,и даже вести счёт отгаданных слов!`;
                    rsp.data = command;
                    count+=1;
                }
            }
            else if (command.type === 'value') {
                rsp.msg = 'Оценивание';
                rsp.data = command;
                rsp.body.messageName = 'CALL_RATING';
            }
            else if (command.type === "double"){
                rsp.msg = '';
                rsp.data = {};
            }
            else if (command.type === 'fail') {
                let {gender, appeal} = r.body.payload.character;
                console.log(gender, appeal);
                if (gender === 'male') {
                    if (appeal === 'official') {
                        let phraseIndex = Math.floor(Math.random() * maleofficialFailPhrases.length);
                        phrase = maleofficialFailPhrases[phraseIndex];
                    } else {
                        let phraseIndex = Math.floor(Math.random() * maleno_officialFailPhrases.length);
                        phrase = maleno_officialFailPhrases[phraseIndex];
                    }
                } else {
                    if (appeal === 'official') {
                        let phraseIndex = Math.floor(Math.random() * femaleofficialFailPhrases.length);
                        phrase = femaleofficialFailPhrases[phraseIndex];
                    } else {
                        let phraseIndex = Math.floor(Math.random() * femaleno_officialFailPhrases.length);
                        phrase = femaleno_officialFailPhrases[phraseIndex];
                    }
                }
                rsp.msg = phrase;
                rsp.data = command;
            }
            console.log(command);
        }
        else{
            rsp.msg = '';
            rsp.data = {};
        }
        yield rsp;
    }
}

Dialute
    .fromEntrypoint(script as GeneratorFunction)
    .start();