class User{

    private static femaleArray :string[] = []
    private static maleArray : string[]= []
    private static countriesArray:string[] = []
    private static countriesSet = new Set()

    public static sizeOfFemaleArray(){
        return User.femaleArray.length;
    }
    
    public static sizeOfMaleArray(){
        return User.maleArray.length;
    }
    public static sizeOfCountriesArray(){
        return User.countriesArray.length;
    }

    public static insertFemaleElement(element:string){
        User.femaleArray.push(element)
    }

    public static insertMaleElement(element:string){
        User.maleArray.push(element)
    }

    public static insertCountryElement(element:string){
        this.countriesArray.push(element)
        this.countriesSet.add(element)
    }

    public static giveCountryditailes()
    {
        let array;
        const countriesStatistic =[]
        
        Array.from(User.countriesSet).forEach(countryS=>{
            array=User.countriesArray.filter(countryA=>{
                return countryS === countryA
            })
            countriesStatistic.push({country:countryS,counter:array.length})
        }) 

        return countriesStatistic;
    }

}