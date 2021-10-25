export class ApiUniversidades {

    constructor() { }


    obter(pais: String): any {
        return new Promise((sucesso, erro)=>{
            fetch("http://universities.hipolabs.com/search?country=" + pais, {
                method: 'GET',
                redirect: 'follow'
            }).then(response => {
                sucesso(response.json());
            }).catch(error => {
                console.log('error', error);
                erro(error);
            });
        })
    }


}