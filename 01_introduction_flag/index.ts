
const setTimeOut = (n:number) => new Promise((resolve) => setTimeout(resolve,n))

export const addNumber = async (num1:number, num2: number) => {
    await setTimeOut(1000)
    return num1 + num2
}


(async () => console.log(await addNumber(1,2)))()