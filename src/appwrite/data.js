import config from '../config/config.js'
import { Client , ID , Databases , Storage , Query} from "appwrite";

export class Service {
    client = new Client() ;
    databases ;
    bucket ;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug, content , featuredImage , status, userId}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId , 
                config.appwriteCollectionId , 
                slug ,
                {title , content , featuredImage , status , userId}
            )
        } catch (error) {
            console.log("Error while creating the post" ,error);
        }
    }

    async updatePost ( slug , {title,content,featuredImage,status}){
        try {
            await this.databases.updateDocument(config.appwriteDatabaseId , config.appwriteCollectionId ,slug , {title , content , featuredImage , status})
        } catch (error) {
            console.log("Error in updating the post" , error) ;
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId , config.appwriteCollectionId ,slug)
            return true
        } catch (error) {
            console.log("Error in deleting" , error );
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId , config.appwriteCollectionId ,slug )
        } catch (error) {
            console.log("Error in finding the Post" , error);
            return false
        }
    }

    async getPosts( queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId , 
                config.appwriteCollectionId ,
                queries
            )
        } catch (error) {
            console.log("Error to get Posts" , error);
            return false
        }
    }

    //File Upload service
    async uploadFile(file){
        try {            
            return await this.bucket.createFile(config.appwriteBucketId ,ID.unique() , file)
        } catch (error) {
            console.log("Error in uploading img" , error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appwriteBucketId , fileId)
            return true
        } catch (error) {
            console.log("Error in deleting the file" , error);
            return false
        }
    }

    previewFile(fileId){
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId)
    }
}

const service = new Service()

export default service