export class ApiPaises {

    constructor() { }


    obter(): any {
        return new Promise(async(sucesso, erro)=>{
            fetch("https://raw.githubusercontent.com/stefangabos/world_countries/master/data/en/countries.json", {
                method: 'GET',
                redirect: 'follow'
            }).then(async(response) => {
                sucesso(await response.json());
            }).catch(error => {
                console.log('error', error);
                erro(error);
            });
        })
    }


}