import conf from "../conf/conf";
import { Client,ID ,Databases,Storage,Query } from "appwrite";

class ConfigService {
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    async createPost({title , slug , content , status , featuredImage , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    async updatePost(slug , {title , content , status , featuredImage}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }
    async uploadFile(file){
        try{
            return await this.storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }
    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return false;
        }
    }
}
const configService = new ConfigService()
export default configService