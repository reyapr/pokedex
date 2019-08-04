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