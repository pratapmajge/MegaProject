import Conf from "../Conf/Conf.js";
import {Client , Account , ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectId);
        this.account= new Account(this.client);
    }

    async createAccount ({email , password , name}){
        try {
            
        } catch (error) {
            
        }
    }
}

const authservice = new AuthService();

export default AuthService;