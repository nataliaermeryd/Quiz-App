const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'CERTIFICATION?',
    answers: [
      { text: 'In cryptography, a certificate authority or certification authority is an entity that issues digital certificates.nA digital certificate certifies the ownership of a public key by the named subject of the certificate. The format of these certificates is specified by the X.509 or EMV standard.', correct: false },
      { text: 'A certificate does not only identify you as the owner of a public key, it also certifies you as an owner of a domain name. You can not certify localhost. You can use a self-signed certificate to use TLS/HTTPS during development. (You can also become your own CA)', correct: true }
    ]
  },
  {
    question: 'AUTHENTICATION?',
    answers: [
      { text: 'Who and What am I? I can *** myself based on: What I know! What I have! Who I am! Password-Based *** Multi Factor *** Certificate Based *** Biometric *** Token Based ***', correct: true },
      { text: 'What am I allowed to do? When authenticating me I might get an authorization that gives me privileges to use more or less of the services in the system.', correct: false },
    ]
  },
  {
    question: 'AUDIT LOGGING?',
    answers: [
      { text: 'This is a method that that helps us revise a system attack after the fact. It also helps us monitor internal risks. All activity of users are logged and when security is breached these loggs can be used to determine who did what, and what did who.', correct: true },
      { text: 'This is another web security-tool. By logging when attempts to log in into our application occurs, we increase the probability to detect an attack when it occurs. reCaptcha offers this. ', correct: false }
    ]
  },
  {
    question: 'CERTIFICATE AUTHORITY(CA)',
    answers: [
      { text: 'A certificate does not only identify you as the owner of a public key, it also certifies you as an owner of a domain name. You can not certify localhost. You can use a self-signed certificate to use TLS/HTTPS during development. (You can also become your own CA)', correct: false },
      { text: 'In cryptography, a certificate authority or certification authority is an entity that issues digital certificates.nA digital certificate certifies the ownership of a public key by the named subject of the certificate. The format of these certificates is specified by the X.509 or EMV standard.', correct: true }
    ]
  },
  {
    question: 'AUTHORIZATION?',
    answers: [
      { text: 'Who and What am I? I can *** myself based on: What I know! What I have! Who I am! Password-Based *** Multi Factor *** Certificate Based *** Biometric *** Token Based ***', correct: false },
      { text: 'What am I allowed to do? When authenticating me I might get an authorization that gives me privileges to use more or less of the services in the system.', correct: true },
    ]
  },
  {
    question: 'MONITORING?',
    answers: [
      { text: 'To ensure a web application is not hacked we can use ***-tools. We implemented HTTP GET /healthcheck which is a standard endpoint for this. Now various ***-apps can be used to sound alarm automatically when the application is not healthy.Tools to do this: Pingdom, Dynatrace, Freshping...', correct: true },
      { text: 'Any package you add to your Node-App might have security issues.-npm auduit. -npm audit fix. npm-audit runs automatically after NPM install and reports known ***. To remove *** packages is hard and tideous work. Other tools: Snyk, Source Clear, Node SecurityPlatform, Acunetix, Retire.js, NodeJsScan, OWASP Dependency check.', correct: false }
    ]
  },
  {
    question: 'ACCESS LOGGING?',
    answers: [
      { text: 'This is a method that that helps us revise a system attack after the fact. It also helps us monitor internal risks. All activity of users are logged and when security is breached these loggs can be used to determine who did what, and what did who.', correct: false },
      { text: 'This is another web security-tool. By logging when attempts to log in into our application occurs, we increase the probability to detect an attack when it occurs. reCaptcha offers this. ', correct: true }
    ]
  },
  {
    question: 'VULNERABILITIES?',
    answers: [
      { text: 'To ensure a web application is not hacked we can use ***-tools. We implemented HTTP GET /healthcheck which is a standard endpoint for this. Now various ***-apps can be used to sound alarm automatically when the application is not healthy.Tools to do this: Pingdom, Dynatrace, Freshping...', correct: false },
      { text: 'Any package you add to your Node-App might have security issues.-npm auduit. -npm audit fix. npm-audit runs automatically after NPM install and reports known ***. To remove *** packages is hard and tideous work. Other tools: Snyk, Source Clear, Node SecurityPlatform, Acunetix, Retire.js, NodeJsScan, OWASP Dependency check.', correct: true }
    ]
  },
  {
    question: 'PENETARATION TEST?',
    answers: [
      { text: 'These Tests are performed before a system is launched. Burp Suite is a ***test-tool.', correct: true },
      { text: 'The *** Test, by Alan *** in 1950, is a test of a machine´s ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human. (Orginally called the imitation game) CAPTCHA = Completely Automated Public *** Tests to tell Computers and Humans Apart.', correct: false }
    ]
  },
  {
    question: 'TURING TEST?',
    answers: [
      { text: 'The *** Test, by Alan *** in 1950, is a test of a machine´s ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human. (Orginally called the imitation game) CAPTCHA = Completely Automated Public *** Tests to tell Computers and Humans Apart.', correct: true },
      { text: 'These Tests are performed before a system is launched. Burp Suite is a ***test-tool.', correct: false }
    ]
  },
  {
    question: 'ASYMMETRIC ENCRYPTION?',
    answers: [
      { text: '***-Encryption is when something is known to bothe client and server. In database authentication a hashcode is often stored in a database and compared to the hashcode computed on the client side. It gives an illusion of security as the password is not sent over the web, but as soon as the password is stored it might be hacked rendering the password moot as credential and in effect making the hashcode to credential.', correct: false },
      { text: 'Public-key cryptography is a cryptographic system that uses pairs of keys. Each pair consists of: -A Public Key(which may be known to others), -A Private Key(which may not be known by anyone except the owner). Public key can be used to crypt a message, but not to decrypt.', correct: true }
    ]
  },
  {
    question: 'SYMMETRIC ENCRYPTION?',
    answers: [
      { text: '***-Encryption is when something is known to bothe client and server. In database authentication a hashcode is often stored in a database and compared to the hashcode computed on the client side. It gives an illusion of security as the password is not sent over the web, but as soon as the password is stored it might be hacked rendering the password moot as credential and in effect making the hashcode to credential.', correct: true },
      { text: 'Public-key cryptography is a cryptographic system that uses pairs of keys. Each pair consists of: -A Public Key(which may be known to others), -A Private Key(which may not be known by anyone except the owner). Public key can be used to crypt a message, but not to decrypt.', correct: false }
    ]
  }
]