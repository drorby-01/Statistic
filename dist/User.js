class User {

    static femaleArray  = []
    static maleArray = []
    static countriesArray = []
    static countriesSet = new Set()

    static sizeOfFemaleArray() {
        return User.femaleArray.length;
    }
    static sizeOfMaleArray() {
        return User.maleArray.length;
    }
    static sizeOfCountriesArray() {
        return User.countriesArray.length;
    }
    static insertFemaleElement(element) {
        User.femaleArray.push(element);
    }
    static insertMaleElement(element) {
        User.maleArray.push(element);
    }
    static insertCountryElement(element) {
        User.countriesArray.push(element);
        User.countriesSet.add(element);
    }

    static giveCountryditailes()
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

