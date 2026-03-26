export const area = (width: number, length: number): number => {
    return length * width
}

export const perimeter = (width: number, length: number): number => {
    return (length * 2) + (width * 2)
}


const FAKE_DATA = [
    {category: "lunch"},
    {category: "breakfast"},
    {category: "dinner"},
    {category: "lunch"}]

const filteredCategories = FAKE_DATA.filter({
    let userChosenOption = "breakfast"
    let {category} = data;
    return
})