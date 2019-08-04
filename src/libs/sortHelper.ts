export const sortArr = (data: Array<any>, sortBy: string) => {
  return data.sort((a,b)=>{
    if(sortBy === 'desc'){
      let temp = a
      a = b
      b = temp
    }
    if(b.name < a.name){ return 1}
    if(b.name > a.name){ return -1}
    return 0
  })
}

export const sortByNumber = (data: Array<any>, sortBy: string) => {
  return data.sort((a,b)=>{
    let splittedB = b.url.split('/')
    let splittedA = a.url.split('/')
    let idB = Number(splittedB[splittedB.length-2])
    let idA = Number(splittedA[splittedA.length-2])
    if(sortBy === 'asc'){
      return idA-idB
    }else{
      return idB-idA
    }
  })
}