/**
 * Created by Yaku on 28/12/2016.
 */

import { browserHistory } from 'react-router';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';


export function signInUser()
{
  alert("action -> signInUser");
  return {
    type: SIGN_IN_USER
  }
}

export function signOutUser()
{
  alert("action -> signOutUser");
  browserHistory.push('/login');
  return {
    type: SIGN_OUT_USER
  }
}