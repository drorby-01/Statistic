const mapping = {
    gender:{path:"gender",isVisible:true},
    country:{path:"location.country",isVisible:true}
}

function getApi(url){
   return $.ajax({
        url,
        method:"GET",
        success: function (response) {
            return response;
        }
    });
}

async function init(){
    const users = await getApi("https://randomuser.me/api/?results=50")    
    const {results} = users
    draw(results)
}

function draw(data){

    const mappedUser = data.map(user=>{
        return getMappedUser(user)
    })

    console.log(mappedUser)
    
    mappedUser.forEach(element=>{
        switch(element.gender){
            case "male":{User.insertMaleElement(element.gender);}break;
            case "female":User.insertFemaleElement(element.gender);break;
        }
        User.insertCountryElement(element.country)
    })

    drawTableGender()
    drawTableCountry()
}

function drawTableGender(){
    const tableHeaders=$(`<tr> 
    <th>Male </th>
    <th>Female</th>
    </tr>`)
    const tableRowBodey = $(`<tr>
    <td>${User.sizeOfMaleArray()}</td>
    <td>${User.sizeOfFemaleArray()}</td>
    </tr>`)

    $("#drawUser").append(tableHeaders,tableRowBodey)
}

function drawTableCountry(){

    const tableHeaders=$(`<tr> 
    <th>Country</th>
    <th>Statistic</th>
    </tr>`)
    
    const countreyStatistic = User.giveCountryditailes()
    
    console.log(countreyStatistic)

    const countreyStatisticUi = countreyStatistic.map(element=>{
        return darwCountryBody(element)
    })

    $("#drawCountry").append(tableHeaders,...countreyStatisticUi)

    function darwCountryBody(element){
    
        return  $(`<tr>
                    <td>${element.country}</td>
                    <td>${element.counter}</td>
                  </tr>`)

    }

}

function getMappedUser (user) {
    const keyValueMappingArray = Object.entries(mapping)
    return keyValueMappingArray.reduce((mappedUser, KEYVALUEPAIR_ARRAY,) => {
        const [ key, settingObj ] = KEYVALUEPAIR_ARRAY
        const { path } = settingObj
        const isFunction = typeof settingObj[ "fn" ] === 'function'
        return { ...mappedUser, [ key ]: isFunction ? settingObj[ "fn" ](user) : getValueFromPath(path, user) }
    }, {})
}

function getValueFromPath (path, user) {
    if (typeof path !== 'string') return
    const splittedPath = path.split(".")
    const theRequestedValue = splittedPath.reduce((currentUser, partOfPath) => {
        const isValueExist = currentUser[ partOfPath ]
        return isValueExist ? currentUser[ partOfPath ] : "Not Availble"
    }, user)

    return theRequestedValue
}


init()