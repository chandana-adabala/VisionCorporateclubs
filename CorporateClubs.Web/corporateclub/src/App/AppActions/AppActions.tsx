import IUsers from '../../models/IUsers'
import {getToken} from '../../Configure'

export enum ActionTypes{
    USER_EXIST="USER_EXIST",
    USER_NOT_EXIST='USER_NOT_EXIST',
    FETCH_FAILED='FETCH_FAILED',
    LOADING_STARTED="LOADING_STARTED",
    LOADING_ENDED='LOADING_ENDED'
}

export interface PayloadType {
    LoggedUser?: IUsers,
    message?: string
    error?:string
    isLoading?: boolean
    Status?: string

}

export interface ActionReturnType {
    type: ActionTypes
    Payload: PayloadType
}


function FetchLoggedUserDetails(Payload: IUsers):ActionReturnType
 {

    return {
        type: ActionTypes.USER_EXIST,
        Payload: {LoggedUser:Payload}
    }
}

function UserUnAuthorized():ActionReturnType
 {

    return {
        type: ActionTypes.USER_NOT_EXIST,
        Payload: {error:"User UnAuthorized"}
    }
}

function FetchDetailsFailed():ActionReturnType
 {

    return {
        type: ActionTypes.USER_NOT_EXIST,
        Payload: {error:"Fetch Failed"}
    }
}

export function loadingStarted():ActionReturnType
{
    return{
       type:ActionTypes.LOADING_STARTED,
       Payload: {isLoading:true}
    }
}


export function loadingEnded():ActionReturnType
{
    return{
       type:ActionTypes.LOADING_ENDED,
       Payload: {isLoading:false}
    }
}
export function GetLoggedUserDetails()
{
    debugger;
    const headers = { 'Authorization': 'Bearer ' + getToken() };
    return function(dispatch){
        dispatch(loadingStarted());
        debugger;
        return fetch('http://localhost:3333/api/users/getuserbytoken',{headers:headers})
        .then(data => data.json())
        .then(data =>{
            if(data.message === "Not Found"){
                throw new Error("User Not Found!");
            }else{
                console.log(data);
                dispatch(FetchLoggedUserDetails(data));
                dispatch(loadingEnded());
            }
        })
        .catch(error=>{dispatch(UserUnAuthorized());dispatch(loadingEnded())})

    }
}
