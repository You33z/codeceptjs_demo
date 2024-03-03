export const password: string = 'secret_sauce'

export const standardUser: User = {
    username: 'standard_user',
    password: password,
}

export const lockedOutUser: User = {
    username: 'locked_out_user',
    password: password,
    error: 'Epic sadface: Sorry, this user has been locked out.'
}

export const problemUser: User = {
    username: 'problem_user',
    password: password,
}

export const perfGlitchUser: User = {
    username: 'performance_glitch_user',
    password: password,
}

export const errorUser: User = {
    username: 'error_user',
    password: password,
}

export const visualUser: User = {
    username: 'visual_user',
    password: password,
}


export interface User {
    username: string,
    password: string,
    error?: string,
}

