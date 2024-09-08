export interface signup {
    readonly name:string;
    readonly email:string;
    readonly password:string;
    readonly confirmPassword:string;

}
export interface login {   
    readonly email:string;
    readonly password:string;
}
