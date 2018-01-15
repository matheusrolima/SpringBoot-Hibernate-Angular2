export class Login
{
    id:number;
    usuario:string;
    senha:string;

    constructor() {
    }

    public static isNull(login: Login): boolean {
        return login.usuario === null &&
            login.senha === null;
    }
}