import {ActionTypes} from '../actions/clubAction';
import IClubs from '../../../models/IClubs';
import IUsers from '../../../models/IUsers';
import { ActionsTypes } from '../../Profile/Actions';

export interface Istate {
    myclubs:IClubs[],
    favclubs:IClubs[],
    club:IClubs
    cUsers:IUsers[],
    rUsers:IUsers[],
    nUsers:IUsers[],
    users:IUsers[]
}

const initialState:Istate ={
    
    favclubs:[],
    myclubs:[],
    club:{ clubID:1,
         clubTitle:'',
        profilePic:'',
        clubCreatedBy:1,
        clubType:'',
        clubDeactiveBy:1,
         reason:'',
         createdOn:new Date(),
         description:'',
         rowCreatedOn:new Date(),
         rowCreatedBy:1,
         rowDeletedBy:1, },
    cUsers:[],
    rUsers:[],
    users:[],
    nUsers:[]

    
}


export default function homeReducer(state=initialState,action:any){
    switch(action.type){
        case ActionTypes.FAVCLUBS_FETCH_SUCCESS: 
            console.log("fetch favclubs success",action);
            return{
                ...state,
                favclubs:action.payload
            }
        case ActionTypes.MYCLUBS_FETCH_SUCCESS:
                console.log("fetch my clubs success",action);
                return{
                  ...state,
                    myclubs:action.payload
                }
        case ActionTypes.CLUBINFO_FETCH_SUCCESS:
                console.log("fetch club info success",action);
                return{
                   ...state,
                    club:action.payload,
                    hide:action.hide,
                }
        case ActionTypes.CLUBMEMBERS_FETCH_SUCCESS:
                        console.log("fetch club mem success",action);
                        return{
                           ...state, 
                            cUsers:action.payload
                }
        case ActionTypes.REQCLUBMEM_FETCH_SUCCESS:
                        console.log("fetch club req mem success",action);
                        return{
                           ...state,
                            rUsers:action.payload
                }
        case ActionTypes.NONCLUBMEM_FETCH_SUCCESS:
                    console.log("fetch non club mem success",action);
                    return{
                       ...state,
                        nUsers:action.payload
            }
        case ActionTypes.AllUSERS_FETCH_SUCCESS:
                        console.log("fetch all users success",action);
                        return{
                           ...state,
                            users:action.payload
                }
       case ActionTypes.CHANGE_CLUB_TYPE_SUCCESS:
                        return{
                            ...state,
                          
                        }
        case ActionTypes.MUTE_N_UNMUTE_CLUB:
                        return{
                            ...state,
                        }
        case ActionTypes.REMOVE_USER_AS_ADMIN_SUCCESS:
            return state
        case ActionTypes.REMOVE_USER_AS_ADMIN_FAILED:
            return state
        case ActionTypes.BLOCK_OR_UNBLOCK_USER_SUCCESS:
            return state
        case ActionTypes.BLOCK_OR_UNBLOCK_USER_FAILED:
            return state
        default:
            return state;
    }
}
