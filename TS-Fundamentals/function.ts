// Entendendo TypeScript

type User = {
    name: string
    email: string
    adress: {
        city: string
        // Estado não obrigatorio 
        state?: string
    }
}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.adress.city} and your state is ${user.adress.state}`
}

const user = {
    name: 'Victor Santos',
    email: 'victor@santos.com',
    adress: {
        city: 'Maceió',
        state: 'AL',
    }

}

const message = showWelcomeMessage(user)


// Cidade - UF

