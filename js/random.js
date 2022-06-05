// const url = 'https://jservice.io/api/random'
const questionEl = document.getElementById('question')
const randomBtn = document.getElementById('randomBtn')
const answerEl = document.getElementById('answer-container')
const answerText = document.getElementById('answer-text')
const questionCategory = document.getElementById('category')

const TriviaTrainer = (url) => {

    //fetch data from api and return
    async function getRandomQuestion(){
        const randUrl = url+'random'
        const res = await fetch(randUrl)
        const data = await res.json()

        //clear out any previous answers
        answerText.textContent = ''

        return data[0]
    }

    async function renderQuestion() {
        randomBtn.disabled = "true"
        const data = await getRandomQuestion()
        console.log(data)
        questionEl.textContent = data.question
        questionCategory.textContent = `Category: ${data.category.title}`

        //remove any 'reveal answer' buttons that were previously rendered
        answerEl.removeChild(answerEl.firstChild)

        //create the 'reveal answer' button and append
        const answerBtn = document.createElement('button')
        answerBtn.textContent = "Reveal Answer"
        answerBtn.addEventListener('click', () => {
            answerText.innerHTML = `Answer: ${data.answer}`
            randomBtn.disabled = false
            answerBtn.disabled = true
        })
        answerEl.appendChild(answerBtn)
    }

    return {getRandomQuestion, renderQuestion}
}

const App = TriviaTrainer('https://jservice.io/api/')
randomBtn.addEventListener('click', App.renderQuestion)

