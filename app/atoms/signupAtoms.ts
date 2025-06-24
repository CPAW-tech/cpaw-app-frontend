import { atom } from 'jotai'

interface formData {
    name: {
        fname: string
        lname: String
    }
    username: string
    email: string
    password: string
    isNonProfit: boolean
}

export const formDataAtom = atom({
    name: {
        fname: '',
        lname: '',
    },
    username: '',
    email: '',
    password: '',
    isNonProfit: false,
})

export const firstnameAtom = atom(
    (get) => {
        return get(formDataAtom).name.fname
    },
    (get, set, value) => {
        let formData = get(formDataAtom)
        const updatedFormData: any = {
            ...formData,
            name: { ...formData.name, fname: value },
        }
        set(formDataAtom, updatedFormData)
    }
)

export const lastnameAtom = atom(
    (get) => {
        return get(formDataAtom).name.lname
    },
    (get, set, value) => {
        let formData = get(formDataAtom)
        const updatedFormData: any = {
            ...formData,
            name: { ...formData.name, lname: value },
        }
        set(formDataAtom, updatedFormData)
    }
)

export const usernameAtom = atom(
    (get) => {
        return get(formDataAtom).username
    },
    (get, set, value) => {
        const updatedFormData: any = { ...get(formDataAtom), username: value }
        set(formDataAtom, updatedFormData)
    }
)

export const emailAtom = atom(
    (get) => {
        return get(formDataAtom).email
    },
    (get, set, value) => {
        const updatedFormData: any = { ...get(formDataAtom), email: value }
        set(formDataAtom, updatedFormData)
    }
)

export const passwordAtom = atom(
    (get) => {
        return get(formDataAtom).password
    },
    (get, set, value) => {
        const updatedFormData: any = { ...get(formDataAtom), password: value }
        set(formDataAtom, updatedFormData)
    }
)

export const isNonProfitAtom = atom(
    (get) => {
        return get(formDataAtom).isNonProfit
    },
    (get, set, value) => {
        const updatedFormData: any = {
            ...get(formDataAtom),
            isNonProfit: value,
        }
        set(formDataAtom, updatedFormData)
    }
)
