class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }
    
    addRepository(event){
        event.preventDefault();
        
        this.repositories.push({
            name: 'BBBB',
            description: 'AAAA',
            avatar_url: 'https://avatars2.githubusercontent.com/u/38070771?v=4',
            html_url: 'https://github.com/LucasDMS/Example-ES6',
        });
        console.log(this.repositories);
        
    }
}

new App();