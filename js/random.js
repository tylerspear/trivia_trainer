// const url = 'https://jservice.io/api/random'
const questionEl = document.getElementById('question')
const randomBtn = document.getElementById('randomBtn')
const answerEl = document.getElementById('answer-container')
const answerText = document.getElementById('answer-text')

const TriviaTrainer = (url) => {

    //fetch data from api and return
    async function getRandomQuestion(){
        const randUrl = url+'random'
        const res = await fetch(randUrl)
        const data = await res.json()

        //clear out any previous answers
        answerText.textContent = ''

        return data
    }

    async function renderQuestion() {
        randomBtn.disabled = "true"
        const data = await getRandomQuestion()
        questionEl.textContent = data[0].question

        //remove any 'reveal answer' buttons that were previously rendered
        answerEl.removeChild(answerEl.firstChild)

        //create the 'reveal answer' button and append
        const answerBtn = document.createElement('button')
        answerBtn.textContent = "Reveal Answer"
        answerBtn.addEventListener('click', () => {
            answerText.textContent = data[0].answer
            randomBtn.disabled = false
            answerBtn.disabled = true
        })
        answerEl.appendChild(answerBtn)
    }

    return {getRandomQuestion, renderQuestion}
}

const App = TriviaTrainer('https://jservice.io/api/')
randomBtn.addEventListener('click', App.renderQuestion)

