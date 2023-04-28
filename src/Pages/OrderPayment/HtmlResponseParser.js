 const creatElement = (content) => {

    let retunObj = {}


    const div = document.createElement("div")
    div.innerHTML = content
    let formTag = div.querySelectorAll('form')
    let inputArray = div.querySelectorAll('input')

    inputArray?.forEach((item) => {
        let objKey = item?.name
        retunObj[objKey] = item?.value
    })
    retunObj.formURL = formTag[0].action;
    // console.log(div, "DIV with innerHTML")
    // console.log(formTag, "formTag with innerHTML")
    // console.log(inputArray, "inputArray with innerHTML")
    // console.log(retunObj, "manged daata")
    return retunObj
}

export default creatElement;
